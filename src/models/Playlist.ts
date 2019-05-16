export interface Entity{
    id : number;
    name : string;
}

export interface Playlist extends Entity{
    favourite : boolean;
    /**
     * color in Hex
     */
    color : string;
    tracks?: Track[];
}

export interface Track extends Entity{}