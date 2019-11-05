import {Photo} from './photo';

export class Station {
    question: string;
    answer: string;
    geolocation: { lat: number, lng: number };
    photos: Array<Photo>;
}