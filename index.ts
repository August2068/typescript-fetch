import type {Poke} from "./poke.model"

let poke1Name:string;
let poke2Name:string;
let poke1Speed:number;
let poke2Speed:number;

function getPokePoke(apiURL:string){
    fetch(apiURL)
    .then(response => response.json())
    .then(data => console.log(data.name, data.stats[5].stat.name,data.stats[5].base_stat))
}

async function getPokemons(apiURL:string): Promise<Poke>{
    let response = await fetch(apiURL);
    if(response.status!=200){
        console.log("Oskour")
    }
    let pokemons = await response.json();
    console.log(pokemons.name);
    poke1Name=pokemons.name;
    for(let i:number=0;i<pokemons.stats.length;i++){
        console.log(pokemons.stats[i].stat.name);
        console.log(pokemons.stats[i].base_stat);
    }
    poke1Speed=pokemons.stats[5].base_stat;
    return pokemons;
}

async function getPoke(apiURL:string): Promise<Poke>{
    try{
        let response = await fetch(apiURL);
        let data = await response.json();
        console.log(data.name);
        poke2Name=data.name;

        for(let i:number=0;i<data.stats.length;i++){
            console.log(data.stats[i].stat.name);
            console.log(data.stats[i].base_stat);
        }
        poke2Speed=data.stats[5].base_stat;
        return data;
    } catch(error){
        throw error;
    }
}

async function comparePoke() {
    await getPokemons("https://pokeapi.co/api/v2/pokemon/entei");
    await getPoke("https://pokeapi.co/api/v2/pokemon/scizor");
    if(poke1Speed>poke2Speed){
        console.log(`${poke1Name} (speed = ${poke1Speed}) is quicker than ${poke2Name} (speed = ${poke2Speed})`);
    }else{
        console.log(`${poke2Name} (speed = ${poke2Speed}) is quicker than ${poke1Name} (speed = ${poke1Speed})`);

    }
}

getPokePoke("https://pokeapi.co/api/v2/pokemon/gengar");
comparePoke();
