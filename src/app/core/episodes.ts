import { Info } from "./info";

export interface Episodes {
    info: Info;
    results: EpisodeResults[];
}

export interface EpisodeResults {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}