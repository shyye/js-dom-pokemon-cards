
console.log(data);

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

// Elements
const cardsUL = document.querySelector(".cards")

// RENDER FUNCTIONS
// Cards
function renderCards() {

    data.forEach((pokemon) => {

        const li = document.createElement("li")
        li.classList.add("card")
        li.innerHTML = `
            <h2 class="card--title">${pokemon.name}</h2>
            <img
                width="256"
                class="card--img"
                src="${pokemon.sprites.other["official-artwork"].front_default}"
            />
        `
        const innerUL = document.createElement("ul")
        innerUL.classList.add("card--text")
        pokemon.stats.forEach((stats) => {
            innerUL.innerHTML += `
                <li>${stats.stat.name.toUpperCase()}: ${stats.base_stat}</li>
            `
        })
        li.append(innerUL)

        // games each pokemon appeared in
        const p = document.createElement("p")
        p.innerHTML = `
            Appears in:            
        `

        // Assumes that the games is the name, even if the indices are the same for some of them
        pokemon.game_indices.forEach((game) => {
            p.innerHTML += game.version.name + ", "
        })
        li.append(p)

        cardsUL.append(li)
    })
}

// Initial render
function main() {
    renderCards();
  }
  
  main();