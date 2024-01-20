const gridBtn = document.querySelector("#grid-button");
const clearBtn = document.querySelector("#clear-button");

gridBtn.addEventListener("click", () => {
    let numOfSquares = prompt("What is the desired grid-layout?");
    if (numOfSquares <= 100) {
        numOfSquares = numOfSquares * numOfSquares;
        createSquares(numOfSquares);  
    } else {
        alert("Chosen ammount is too big. Your browser cannot handle the truth!!");
        location.reload();
    }
});

clearBtn.addEventListener("click", () => {
    location.reload();
})


function createSquares(numOfSquares) {
    const container = document.getElementById("boxGrid");
    const totalPixel = 640000;
    let pxPerSquare = totalPixel / numOfSquares;
    let sqHeightWidth = Math.sqrt(pxPerSquare);
    
    for (i = 0; i < numOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.classList.add("squares");
        newSquare.style.cssText = `height: ${sqHeightWidth}px; width: ${sqHeightWidth}px;`;
        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = randomColor();
        })
        container.appendChild(newSquare);
    }
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 