
<template>
  <div>
    <div class="row">
      <div class="col">
        <SearchField @search="search"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <SearchResults :results="results"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">


import {Component, Vue } from 'vue-property-decorator';
import SearchField from '../../components/SearchFieldVue.vue';
import SearchResults from './SearchResults.vue';
import { Album } from '../../models/Album';
import { musicSearch } from '../../services';

@Component({components:{
    SearchField, SearchResults
}})
export default class MusicSearch extends Vue{
    results : Album[] = [];

    search(){
        musicSearch.search().then(albums =>{
           this.results =  albums;
        });
    }

}
</script>

<style>
</style>
