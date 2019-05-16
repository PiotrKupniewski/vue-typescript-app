
<template>
  <div>
    <h3>Playlist list :</h3>
    <div class="list-group">
      <div
        class="list-group-item"
        :class="{'active':selected == playlist}"
        @click="select(playlist)"
        v-for="(playlist,n) of items"
        :key="playlist.id"
      >{{n+1}}.{{playlist.name}}</div>
    </div>
    {{selected && selected.name}}
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import { Playlist } from "../../models/Playlist";
import { register } from "register-service-worker";

@Component({
  props: {
    items: {
      default: [],
      required: true
    },
    selected: {
      required: true
    }
  }
})
export default class PlaylistList extends Vue {

  
  items!: Playlist[];

  selected!: Playlist;

  select(selected: Playlist) {
    this.$emit("select", this.selected == selected  ? null : selected);
    // console.log(this.selected);
  }
}
</script>

<style lang="scss" scoped>
</style>
