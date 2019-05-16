<template>
  <div>
    <h3>Form</h3>
    <form @submit="save">
      <div class="form-group">
        <label>Name :</label>
        <input
          type="text"
          class="form-control"
          v-model="draft.name"
        >
      </div>
      <div class="form-group">
        <label>Favourite :</label>
        <input
          type="checkbox"
          class="form-control"
          v-model="draft.favourite"
        >
      </div>
      <div class="form-group">
        <label>Color :</label>
        <input
          type="color"
          class="form-control"
          v-model="draft.color"
        >
      </div>
      <input type="button" value="Save" @click="save">
      <input type="button" value="Cancel" @click="cancel">
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Watch } from "vue-property-decorator";
import Vue from "vue";
import { Playlist } from '../../models/Playlist';

@Component({
    // watch: {
    //     playlist(this: PlaylistForm , next : Playlist, prev : Playlist){
    //         this.draft = {
    //             ...next
    //         };
    //     }
    // }
})
export default class PlaylistForm extends Vue {
  draft: Playlist;

  constructor() {
    super();
    this.draft = {
      ...this.playlist
    };
  }
    @Watch("playlist", {
        deep:true,
    })
  onPlaylistChange(next : Playlist, prev : Playlist){
            this.draft = {
                ...next
            };
        }

  @Prop()
  playlist!: Playlist;

  save() {
    this.$emit("save", this.draft);
  }

  //   cancel() {
  //     this.$emit("cancel");
  //   }

  @Emit()
  cancel() {}
}
</script>

<style lang="scss" scoped>
</style>
