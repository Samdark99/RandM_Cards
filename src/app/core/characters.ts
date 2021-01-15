import { EpisodeResults } from "./episodes";
import { Info } from "./info";
import { LocationResults } from "./locations";

export interface Characters {
    info: Info;
    results: CharacterResults[];
}

export interface CharacterResults {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Origin;
    location: Location;
    location_data?: LocationResults;
    image: string;
    episode: string[];
    episode_data?: EpisodeResults;
    url: string;
    created: string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface Location {
    name: string;
    url: string;
}