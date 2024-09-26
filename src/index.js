
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
        `
        const img = document.createElement("img")
        img.width = 256
        img.classList.add("card--img")
        img.src = pokemon.sprites.other["official-artwork"].front_default
        li.append(img)


        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
        let imgList = []
        for (const [key, value] of Object.entries(pokemon.sprites)) {
            if (key === "other") {
                imgList.push(pokemon.sprites.other["official-artwork"].front_default)
                break
            } else if(value !== null) {
                imgList.push(value)
            }
        }

        // Toggle images
        li.addEventListener('click', (event) => {
            let index = imgList.indexOf(event.target.src)
            if (index + 1 === imgList.length) {
                index = -1  // To select index 0 in next step
            }
            img.src = imgList[index + 1]
        })

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