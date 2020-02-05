import {Photo} from './photo';
import { Vr } from './vr';

export class Station {
    question: string;
    answer: string;
    geolocation: { lat: number, lng: number };
    photos: Array<Photo>;
    vrs: Array<Vr>;
}