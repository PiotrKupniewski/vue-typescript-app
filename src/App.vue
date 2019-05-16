<template>
  <div id="app">
    <div class="container">
      <MusicSearch/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import MusicSearch from './search/components/MusicSearch.vue';
import Playlists from './playlists/Playlists.vue';

export default Vue.extend({
  components: {
      Playlists,
      MusicSearch
  }
});
</script>


<style lang="scss">
</style>
