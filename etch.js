//creates divs

function createGrid(userInput) {

  const element = document.getElementById("boxContainer");
  //clears out grid
  element.innerHTML = "";
    
  
  
  for (let i = 0; i < userInput * userInput; i++) {
    console.log("box count");
    const squareDiv = document.createElement ("div");
    const newContent = document.createTextNode("");
    squareDiv.appendChild(newContent);
    squareDiv.id = "boxes";
    element.appendChild(squareDiv);

    //returns the inner width of the box container in pixels    
    const size = boxContainer.clientWidth;
    const cellSize = size / userInput; 
    //makes all boxes same size dependent upon user input
    squareDiv.style.width = squareDiv.style.height = cellSize + 'px';

    //calculates random color for rainbow
    function rainbow() {
    console.log("color generator")
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return`rgb(${r},${g}, ${b})`;
    }
//allows change color on hover
  squareDiv.addEventListener ("mouseenter", (event) => {
  event.target.style.backgroundColor = rainbow();
  console.log("hello");
  }
)
  }
  
}
  //creates standard grid upon page loading
  createGrid(16)
    
  
    const popButton = document.getElementById("promptButton");

    console.log(popButton);
//creates button
    popButton.addEventListener("click", () => {
      console.log("is button working?")
        let userInput = prompt ("Please enter a number between 1 and 100 to change the grid size");
        if ( userInput > 100 || userInput < 1 || isNaN(userInput)){
        userInput = prompt ("Please enter a number between 1 and 100 to change the grid size");
        } else {
          console.log("creating grid")

          createGrid(userInput)
        }
       
      
 
});


  
