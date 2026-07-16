interface NamedAPIRessource<T> {
    name: string;
    url: string;
}
export interface Poke {
    id: number;
    name: string;
    stats: Array<NamedAPIRessource<PokemonStat>>;
}
interface PokemonStat {
    stat: NamedAPIRessource<Stat>;
    base_stat: number;
}
interface Stat {
    name: string;
}
export {};
//# sourceMappingURL=poke.model.d.ts.map