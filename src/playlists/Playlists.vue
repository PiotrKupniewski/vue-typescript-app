<template>
  <div>
    <h1>Playlist :</h1>

    <SearchField @search="search($event)" v-model="currentQuery"/>
    {{currentQuery }}
    <div class="row">
      <div class="col">
        <PlaylistList @select=" selected = $event " :selected="selected" :items="results"/>
        <!-- <PlaylistList 
            @select=" selected = $event "
            :selected="selected"
        :items="playlists"/>-->
      </div>
      <div class="col">
        <template v-if="selected">
          <PlaylistDetails @edit="edit()" :playlist="selected" v-if="mode == 'show'"/>
          <PlaylistForm
            @cancel="cancel()"
            @save="save($event)"
            :playlist="selected"
            v-else-if=" mode == 'edit' "
          />
        </template>
        <p v-else>Please selecte playlist</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PlaylistList from "./components/PlaylistList.vue";
import PlaylistDetails from "./components/PlaylistDetails.vue";
import PlaylistForm from "./components/PlaylistForm.vue";
import { Playlist } from "../models/Playlist";
import SearchField from "../components/SearchFieldVue.vue";

@Component({
  components: { PlaylistList, PlaylistDetails, PlaylistForm, SearchField },
  computed: {
    results(this: Playlists) {
      return this.playlists.filter(p =>
        p.name.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  }
})
export default class Playlists extends Vue {
  playlists: Playlist[] = [
    {
      id: 1,
      name: "Vue Hits",
      favourite: true,
      color: "#ff00ff"
    },
    {
      id: 2,
      name: "Treningowa",
      favourite: false,
      color: "#ff87ff"
    },
    {
      id: 3,
      name: "Testowa",
      favourite: true,
      color: "#ccc"
    }
  ];

  query: string = "";
  currentQuery: string = "";

  search(query: string) {
    this.query = query;
    // console.log(query);
  }

  mode = "show";

  edit() {
    console.log("edit");
    this.mode = "edit";
  }

  cancel() {
    console.log("cancel");
    this.mode = "show";
  }

  save(draft: Playlist) {
    // console.log(draft);
    const index = this.playlists.findIndex(p => p.id == draft.id);

    if (index !== -1) {
      this.playlists.splice(index, 1, draft);
      this.selected = draft;
      this.mode = "show";
    }
  }

  selected: Playlist | null = null;
}
</script>

<style lang="scss" scoped>
h1 {
  color: hotpink;
}
</style>
