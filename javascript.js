function putSquares(size)
{
    // removes the old squares.
    game.innerHTML = "";

    for (let i = 0; i < (grid / size) ** 2; i++) {
        // Create a new square element.
        let square = document.createElement("div");

        // Add the "square" class to apply its CSS styles.
        square.classList.add("square");

        // Set the square's width and height based on the given size.
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        // Add the square to the game container.
        game.appendChild(square);
    }

}

const game = document.querySelector("#game");
//Grid Area.
const grid = 800;
//Put squares on grid.
putSquares(80);
