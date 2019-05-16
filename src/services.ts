import { AuthService } from './services/AuthService';
import MusicSearch from './search/components/MusicSearch.vue';
import { MusicSearchService } from './services/MusiSearchService';


export const authService = new AuthService(
    "https://accounts.spotify.com/authorize",
    "70599ee5812a4a16abd861625a38f5a6",
    "http://localhost:8080/"
);


export const musicSearch = new MusicSearchService(authService,'https://api.spotify.com/v1/search')