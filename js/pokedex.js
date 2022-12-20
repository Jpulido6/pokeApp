
const fechtPokemon = ()=>{

    const pokeNameInput = document.getElementById('pokeName');
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();

    const  url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch (url).then((res)=>{
        if (res.status !="200") {
            
            pokeImage("../img/poke.png");
            const nonPoke= document.getElementById("idPoke");
            const nombre = document.getElementById("infoPoke");
            const habilidad = document.getElementById("nomPoke");
            const tipo= document.getElementById("tipoPoke");
            const ataque = document.getElementById("atackPoke");
            nombre.innerHTML='';
            habilidad.innerHTML='';
            tipo.innerHTML='';
            ataque.innerHTML='';
            nonPoke.innerHTML='';
            const nonePoke = document.createElement("div");
            nonPoke.textContent= 'NO ENCONTRAMOS NINGUN POKEMON';
            nonPoke.appendChild(nonePoke);
           
        }else{
            return res.json();
        }

    }).then((data)=>{
        if (data) {
            
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities;
            let pokeNom = data.name;
            let pokeId = data.id;
            let pokeAttack = data.stats;
            let pokeType = data.types;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            pokId (pokeId);
            nomPoke (pokeNom);
            pokeTyp(pokeType)
            atacPoke(pokeAttack);
            
        }

    });

    
};

const pokeImage =(url)=>{
    const pokePhoto = document.getElementById('pokeFoto');
    pokePhoto.src = url;
}

const pokeData= (abilities)=>{
    const pokeAbilities = document.getElementById('infoPoke');
    pokeAbilities.innerHTML='';

    abilities.forEach(ability => {
        const abilitiesElement = document.createElement("div");
        abilitiesElement.textContent=`HABILIDADES: ${ability.ability.name.toUpperCase()}`;
        pokeAbilities.appendChild(abilitiesElement);

        
    });
    
}
const pokId =(id)=>{
    const idPok= document.getElementById("idPoke");
    idPok.innerHTML = '';

        const idElement = document.createElement("div");
        idElement.textContent= `ID: ${id}`;
        idPok.appendChild(idElement);
    
    
}

const nomPoke = (name)=>{
    const nomPok = document.getElementById("nomPoke");
    nomPok.innerHTML='';
   
        const nameElement = document.createElement("div");
        nameElement.textContent= `NOMBRE: ${name.toUpperCase()}`;
        nomPok.appendChild(nameElement);

    }

  

const pokeTyp = (types)=>{
    const pokeTipo  = document.getElementById("tipoPoke");
    pokeTipo.innerHTML='';
    types.forEach(type => {
        const typeElement = document.createElement("div");
        typeElement.textContent= `TIPO POKEMON: ${type.type.name.toUpperCase()}`;
        pokeTipo.appendChild(typeElement)
    });
    
}

const atacPoke = (stats)=>{
    const atackPoke  = document.getElementById("atackPoke");
    atackPoke.innerHTML='';
    stats.forEach(stat => {
        const statElement= document.createElement("div");
        const statElementName = document.createElement("div")
        const statElementAmount = document.createElement("div");
        statElementName.textContent = stat.stat.name.toUpperCase();
        statElementAmount.textContent= stat.base_stat;
        statElement.appendChild(statElementName);
        statElement.appendChild(statElementAmount);

        atackPoke.appendChild(statElement);

        
    });

}