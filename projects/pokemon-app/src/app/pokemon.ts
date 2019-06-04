export interface Pokemon {
    count: number;
    next: string;
    previous: string;
    results: PokemonResult[];
}

export interface PokemonResult {
    name: string;
    url: string;
}

export interface PokemonSprites {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

export interface PokemonResource {
    abilities: string;
    base_experience: number;
    forms: string;
    game_indices: string;
    height: number;
    held_items: string;
    id: number;
    is_default: boolean;
    location_area_encounter: string;
    moves: string;
    name: string;
    order: number;
    species: string;
    sprites: PokemonSprites;
    stats: string;
    types: string;
    weight: number;
}

