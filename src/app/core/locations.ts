import { Info } from "./info";

export interface Location {
    info: Info;
    results: LocationResults[];
}

export interface LocationResults {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: string; 
}