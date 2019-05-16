<template>
  <form @submit.prevent=" search">
    <input
      class="form-control marginUD10"
      ref="inputRef"
      type="text"
      placeholder="Search"
      v-model="query"
      @keyup.enter="search"
      @keyup="search"
      @input="$emit('queryChange', $event.target.value)"
    >
    <input type="button" value="Search" @click="search">
  </form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  inheritAttrs: false,
  model: {
    prop: "query",
    event: "queryChnage"
  }
})
export default class SearchField extends Vue {
  query: String = "";

  mounted() {
    console.log(this.$refs);
    const input = this.$refs["inputRef"];
    if (input instanceof HTMLInputElement) {
      input.focus();
    }
  }

  debounce?: number;

  search() {
    clearTimeout(this.debounce);

    this.debounce = setTimeout(() => {
      this.$emit("search", this.query);
    }, 400);
  }
}
</script>

<style>
.marginUD10 {
  margin: 10px 0 10px 0;
}
</style>
