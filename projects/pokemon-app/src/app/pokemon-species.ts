export interface PokemonNameUrl {
    name: string;
    url: string;
}

export interface PokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: PokemonNameUrl;
    egg_groups: PokemonNameUrl;
    evolution_chain: string;
    evolutions_from_species: string;
    flavor_text_entries: PokemonTextEntries[];
    form_descriptions: string;
    forms_switchable: boolean;
    gender_rate: number;
    genera: PokemonGenera;
    generation: PokemonNameUrl;
    growth_rate: PokemonNameUrl;
    habitat: PokemonNameUrl;
    has_gender_drifferences: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    name: string;
    names: PokemonNameLanguage[];
    order: number;
    pal_park_encounters: PokemonParkEncounters[];
    pokedex_numbers: PokemonNumbers[];
    shape: PokemonNameUrl;
    varieties: PokemonVariety[];
}

export interface PokemonTextEntries {
    flavor_text: string;
    language: PokemonNameUrl; 
    version: PokemonNameUrl;
}

export interface PokemonGenera {
    genus: string;
    language: PokemonNameUrl;
}

export interface PokemonNameLanguage {
    language: PokemonNameUrl;
    name: string;
}

export interface PokemonParkEncounters {
    area: PokemonNameUrl;
    base_score: number;
    rate: number;
}

export interface PokemonNumbers {
    entry_nubmer: number;
    pokedex: PokemonNameUrl;
}

export interface PokemonVariety {
    is_default: boolean;
    pokemon: PokemonNameUrl;
}
