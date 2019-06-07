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

export interface PokemonAbilities {
    ability: PokemonAbility
    is_hidden: boolean;
    slot: number;
}

export interface PokemonAbility {
    name: string;
    url: string;
}

export interface PokemonForms {
    name: string;
    url: string;
}

export interface PokemonGameIndices {
    game_index: number;
    version: PokemonVersion;
}

export interface PokemonVersion {
    name: string;
    url: string;
}

export interface PokemonMoves {
    move: PokemonMove;
    version_group_details: PokemonVersionGroupDetails[]; 
}

export interface PokemonMove {
    name: string;
    url: string;   
}

export interface PokemonVersionGroupDetails {
    level_learned_at: number;
    move_learn_method: PokemonMoveLearnMethod;
}

export interface PokemonMoveLearnMethod {
    name: string;
    url: string;   
}

export interface PokemonSpecies {
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

export interface PokemonStats {
    base_stat: number;
    effort: number;
    stat: PokemonStat;
}

export interface PokemonStat {
    name: string;
    url: string; 
}

export interface PokemonTypes {
    slot: number;
    type: PokemonType;
}

export interface PokemonType {
    name: string;
    url: string;     
}

export interface PokemonResource {
    abilities: PokemonAbilities[];
    base_experience: number;
    forms: PokemonForms[];
    game_indices: PokemonGameIndices[];
    height: number;
    held_items: string; //array?
    id: number;
    is_default: boolean;
    location_area_encounter: string;
    moves: PokemonMoves[];
    name: string;
    order: number;
    species: PokemonSpecies;
    sprites: PokemonSprites;
    stats: PokemonStats[];
    types: PokemonTypes[];
    weight: number;
}

