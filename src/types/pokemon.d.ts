export interface PokemonInfo {
  name: string;
  url: string;
}

export interface PokemonPlusInfo extends PokemonInfo {
  image: string;
  id: number;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonInfo[];
}

export interface PokemonKoreanName {
  language: {
    name: string;
    url: string;
  };
  name: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface GrowthRate {
  name: string;
  url: string;
}

export interface Color extends GrowthRate {}

export interface SpeciesResponse {
  id: number;
  name: string;
  order: number;
  names: PokemonKoreanName[];
  color: Color;
  flavor_text_entries: FlavorTextEntry[];
  growth_rate: GrowthRate;
  gender_rate: number;
  is_legendary: boolean;
  is_mythical: boolean;
  evolution_chain: {
    url: string;
  };
}

export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface PokemonMoveVersion {
  version_group: PokemonInfo;
  move_learn_method: PokemonInfo;
  level_learned_at: number;
}

interface PokemonMove {
  move: PokemonInfo;
  version_group_details: PokemonMoveVersion[];
}

interface Form extends PokemonInfo {}

interface PokemonGameIndex {
  game_index: number;
  version: PokemonInfo;
}

interface PokemonHeldItemVersion {
  version: PokemonInfo;
  rarity: number;
}

interface PokemonHeldItem {
  item: PokemonInfo;
  version_details: PokemonHeldItemVersion[];
}

interface PokemonSpecies extends PokemonInfo {}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonDetailResponse {
  id: number;
  abilities: Ability[];
  height: number;
  weight: number;
  stats: Stat[];
  types: Type[];
  sprites: PokemonSprites;
  base_experience: number | null;
  forms: PokemonForm[] | null;
  game_indices: PokemonGameIndex[] | null;
  held_items: PokemonHeldItem[] | null;
  is_default: boolean | null;
  location_area_encounters?: string | null;
  moves: PokemonMove[] | null;
  name: string;
  order: number | null;
  species: PokemonSpecies | null;
  past_types: PokemonTypePast[] | null;
}
