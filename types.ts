const consoleType = ['home', 'handheld', 'hybrid', 'vr'] as const;
type ConsoleType = (typeof consoleType)[number];

export type Console = {
    name: string;
    year: number;
    brand: string;
    type: ConsoleType;       // Home, handheld, hybrid
}

export type Game = {
    title: string;
    year: number;
    consoles: string[];
    genres: string[];
    developers: string[];
}

export type Track = {
    title: string;
    year: number;
    game: string;
    duration: number;
    composer: string;
    arranger: string;
}