const createNumber = number => {
    const tombolaTabella = document.getElementById("Tombola") 
    const numeriTombola = [];
    const maxNumeri = 76;
    for (let index = 1; index < maxNumeri.length; index++) {
        tombolaTabella.push([])

        const casella = document.createElement("div")

        casella.classList.add("number")
        
        const casellaContenuto = document.createElement("h3")
        casellaContenuto.innerText = index + 1 


    }
createNumber()
}

console.log(createNumber)