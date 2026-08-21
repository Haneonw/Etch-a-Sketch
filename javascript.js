function putSquares(event)
{
    event.preventDefault();
    let numberPerSide = input.value;
    input.value = "";
    if(numberPerSide > 100 || numberPerSide < 1){return;}
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
    event.target.style.backgroundColor = select.value;
}

const game = document.querySelector("#game");
//Grid Area.
const grid = 800;
//Put squares on grid.


let apply = document.querySelector("button");
let input = document.querySelector("input");
input.value = 50;
let select = document.querySelector("select");
apply.addEventListener("click", putSquares);
apply.dispatchEvent(new Event('click'));


