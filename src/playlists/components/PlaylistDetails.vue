<template>
  <div>
    <h3>Details</h3>
    <div>
      <dl>
        <dt>Name :</dt>
        <dd>{{playlist.name}}</dd>
        <dt>Favourite :</dt>
        <dd>{{playlist.favourite ? 'Yes' : 'No'}}</dd>
        <dt>Color:</dt>
        <dd class="square" :style="{background : playlist.color, }"></dd>
      </dl>
      <input type="button" value="Edit" @click="edit">
    </div>
    <!-- -->
  </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import PlaylistForm from "./PlaylistForm.vue";
import { Playlist } from "../../models/Playlist";

@Component({ components: { PlaylistForm }, props: ["playlist"] })
export default class PlaylistDetails extends Vue {
  @Prop()
  playlist!: Playlist;

  edit() {
    this.$emit("edit");
  }
}
</script>

<style lang="scss" scoped>
.square {
  height: 20px;
  width: 20px;
  border: 1px solid black;
}
</style>
