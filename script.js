const btn = document.querySelector("#button");
btn.addEventListener("click", () => {
    let numOfSquares = prompt("What is the desired grid-layout?");
    if (numOfSquares < 100) {
        numOfSquares = numOfSquares * numOfSquares;
    createSquares(numOfSquares);
    } else {
        alert("Chosen ammount is too big. Your browser cannot handle the truth!!");
        location.reload();
    }
    
});

function createSquares(numOfSquares) {
    const container = document.getElementById("boxGrid");

    for (i = 0; i < numOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.style.cssText = "height: 60px; width: 60px;";
        newSquare.classList.add("squares");
        container.appendChild(newSquare);
    }
}

//createSquares(256);