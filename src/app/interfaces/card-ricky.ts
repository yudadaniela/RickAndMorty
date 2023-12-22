export interface RickAndMorty {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}
export interface Character{
    name:string;
    status:string;
    gender:string;
    image:string 
}
export interface Result {
    id:       number;
    name:     string;
    status:   string;
    species?:  Species;
    type?:     string;
    gender:   string;
    origin?:   Location;
    location?: Location;
    image:    string;
    episode?:  string[];
    url?:      string;
    created?:  Date;
}



export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}
