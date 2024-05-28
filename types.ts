const consoleType = ['handheld', 'home', 'hybrid', 'vr'] as const;
type ConsoleType = (typeof consoleType)[number];

export type Console = {
    name: string;
    year: number;
    brand: string;
    type: ConsoleType;
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
    duration: number;       // In seconds
    composer: string;
    arranger: string;
}