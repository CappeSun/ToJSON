export type Console = {
    name: string;
    year: number;
    brand: string;
    type: string;       // Home, handheld, hybrid
}

export type Game = {
    title: string;
    year: number;
    console: string[];
    genres: string[];
    developers: string[];
}

export type Track = {
    title: string;
    year: number;
    game: string;
    duration: number;
    composer: string;
    arranger?: string;
}