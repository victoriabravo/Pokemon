const URL_BASE = 'https://pokeapi.co/api/v2';
const contenedor = document.getElementById("contenedor");
const formulario = contenedor.querySelector("form");
const listado = contenedor.querySelector("ul");

formulario.addEventListener('submit', e =>{
    e.preventDefault();
    const numero = e.target.querySelector("input[name=numero]").value;
    e.target.reset();

    fetch (URL_BASE+'/pokemon/'+numero)
        .then(handlerResponseJson)
        .then(pokemon => listado.appendChild(crearTarjeta(pokemon)))
        .catch(handlerErrorFetch);

});

function crearTarjeta(poke){
    const card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
    <img src="${poke.sprites.front_default}" width="100" />
    <h2>#${poke.id} ${poke.name} </h2>
    <ul>
        ${poke.moves.slice(0,5).map(m=>`<li>${m.move.name}</li>`).join('')}
    </ul>
    `;
    return card;
}

function handlerResponseJson(r){
    if(!r.ok){
        throw newError (r.status);
    }
    return r.json();
}
function handlerErrorFetch (err){
    console.error(err);
}










/*const promesaForms = fetch('http://localhost:3000/forms');

    promesaForms
        .then(r => r.json())
        .then(res =>{
           console.log(res);
         })
        .catch(err =>{
         
            console.log(err);
        })
const promesaMove = fetch('http://localhost:3000/move');

    promesaMove
        .then(r => r.json())
        .then(res =>{
          console.log(res);
              

         })
        .catch(err =>{
           
            console.log(err);
        })
*/
        