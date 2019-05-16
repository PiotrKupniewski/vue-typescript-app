export interface Album{
    id:string;
    name:string;
    images: AlbumImage[];
    artists: Artist[];
}

export interface AlbumImage{
    url:string;
    height: number;
    width: number;
}

export interface Artist{
    id: string;
    name:string;
}

export interface PagingObject<T>{
    items : T[];
}

export interface AlbumResponse{
    albums : PagingObject<Album>
}