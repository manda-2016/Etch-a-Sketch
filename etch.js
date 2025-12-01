//creates divs
for (i = 0 ; i < 256; i++){
    const squareDiv = document.createElement ("div");
    const newContent = document.createTextNode("");
    squareDiv.appendChild(newContent);
    squareDiv.id = "boxes";
    const element = document.getElementById("boxContainer");
    element.appendChild(squareDiv);



    squareDiv.addEventListener ("mouseenter", (event) => {
    event.target.style.backgroundColor = "orange";
    //setTimeout (() => {
        //event.target.style.backgroundColor = "";
    //}, 5000);
})};

//creates button to change grid size
function popupButton () {
    console.log("hello");
    const popButton = document.createElement ("BUTTON");
    const text = document.createTextNode ("Change Grid Size");
    popButton.appendChild(text);
    const element = document.getElementById("promptButton");
    element.appendChild(popButton);


    popButton.addEventListener("click", (event) => {
        let userInput = prompt ("Please enter a number between 1 and 100 to change the grid size");
    });
    //let i = 0;
    //let i = userInput;
    

    //if (userInput > 100 || userInput < 1) {
        //alert ("Invalid entry. Please enter a number between 1 and 100")
    //} else {

    //}

};

popupButton()

//const title =document.createElement("h1");
//title.id= "title";
//title.textContent= "Etch-A-Sketch";
//title.style.border = "2px solid red";