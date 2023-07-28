import { Iattraction } from "./iattraction";

export interface Icity {
     id: number;
    name: string;
    city_id: string;
    population: number;
    imgURL: string;
    attractions: Iattraction[];
    attraction_name?: Iattraction;
}
