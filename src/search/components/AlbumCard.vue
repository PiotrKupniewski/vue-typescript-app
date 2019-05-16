<template>
  <div class="card">
    <img :src="album.images[0].url" alt="kitten" class="card-img-top">

    <div class="card-body">
      <h5 class="card-title">{{album.name}}</h5>
    </div>
  </div>    
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Album } from "../../models/Album";

@Component({})
export default class AlbumCard extends Vue {
  @Prop()
  album!: Album;

  result! : Album;
}
</script>

<style>
</style>
