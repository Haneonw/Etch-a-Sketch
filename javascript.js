function putSquares(numberPerSide)
{
    // Removes the old squares.
    game.innerHTML = "";
    size = grid/numberPerSide;
    for (let i = 0; i < (grid / size)**2; i++) {
        // Create a new square element.
        let square = document.createElement("div");

        // Add the "square" class to apply its CSS styles.
        square.classList.add("square");

        // Hover Effect
        square.addEventListener("mouseover", hoverEffect);

        // Set the square's width and height based on the given size.
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        // Add the square to the game container.
        game.appendChild(square);
    }

}

function hoverEffect(event){
    event.target.style.background = "pink";
}

const game = document.querySelector("#game");
//Grid Area.
const grid = 800;
//Put squares on grid.
putSquares(4);
