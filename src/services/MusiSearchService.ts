import axios from 'axios'
import { AuthService } from './AuthService';
import { AlbumResponse } from '../models/Album';

export class MusicSearchService {
    constructor(private auth: AuthService,
        private searchUrl: string) {
    }

    search(query = 'batman') {
      return axios.get<AlbumResponse>(this.searchUrl, {
            params: {
                type: "album",
                q: query
            },
            headers: {
                Authorization: `Bearer ${this.auth.getToken()}`
            },
        }).then(response => {
            return response.data.albums.items;
        })
    }
}

