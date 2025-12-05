//creates divs

function createGrid(userInput) {

  const element = document.getElementById("boxContainer");
  //clears out grid
  element.innerHTML = "";
    
//makes all boxes same size dependent upon user input
  const boxSize = 500 /userInput; 
  for (let i = 0; i < userInput * userInput; i++) {
    console.log("box count");
    const squareDiv = document.createElement ("div");
    const newContent = document.createTextNode("");
    squareDiv.appendChild(newContent);
    squareDiv.id = "boxes";
    element.appendChild(squareDiv);

    squareDiv.style.width = `${boxSize}`;
    squareDiv.style.height = `${boxSize}`;

//allows change color on hover
  squareDiv.addEventListener ("mouseenter", (event) => {
  event.target.style.backgroundColor = "orange";
  console.log("hello");
  }
)
  }
  
}
   //creates standard grid
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


  

//const title =document.createElement("h1");
//title.id= "title";
//title.textContent= "Etch-A-Sketch";
//title.style.border = "2px solid red";}
