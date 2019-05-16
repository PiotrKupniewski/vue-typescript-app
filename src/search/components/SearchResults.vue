<template>
    <div class="card-group">
        <template v-for="(result,index) of results">
            <!-- -->
            <AlbumCard :album="result" :key="result.id"/>
            <div v-if="(index+1) % 4 == 0" :key="result.id+'_spacer'" style="flex: 1 1 100%"></div>
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import AlbumCard from "./AlbumCard.vue";
import { Album } from "../../models/Album";

@Component({
  components: {
    AlbumCard
  }
})
export default class SearchResults extends Vue {
  albums!: Album[];

    @Prop()
    results!: Album;

}
</script>

<style>
</style>
