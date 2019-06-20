export interface Pokemon {
    count: number;
    next: string;
    previous: string;
    results: PokemonNameUrl[];
}

export interface PokemonNameUrl {
    name: string;
    url: string;
}

export interface PokemonAbilities {
    ability: PokemonNameUrl;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonGameIndices {
    game_index: number;
    version: PokemonNameUrl;
}

export interface PokemonMoves {
    move: PokemonNameUrl;
    version_group_details: PokemonVersionGroupDetails[]; 
}

export interface PokemonVersionGroupDetails {
    level_learned_at: number;
    move_learn_method: PokemonNameUrl;
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

export interface PokemonStats {
    base_stat: number;
    effort: number;
    stat: PokemonNameUrl;
}

export interface PokemonTypes {
    slot: number;
    type: PokemonNameUrl;
}

export interface PokemonResource {
    abilities: PokemonAbilities[];
    base_experience: number;
    forms: PokemonNameUrl[];
    game_indices: PokemonGameIndices[];
    height: number;
    held_items: string;
    id: number;
    is_default: boolean;
    location_area_encounter: string;
    moves: PokemonMoves[];
    name: string;
    order: number;
    species: PokemonNameUrl;
    sprites: PokemonSprites;
    stats: PokemonStats[];
    types: PokemonTypes[];
    weight: number;
}

