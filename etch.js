//creates divs
for (i = 0 ; i < 256; i++){
    const squareDiv = document.createElement ("div");
    const newContent =document.createTextNode("Hello");
    squareDiv.appendChild(newContent);
    squareDiv.id = "boxes";
    const element = document.getElementById("boxContainer");
    element.appendChild(squareDiv);



    squareDiv.addEventListener ("mouseenter", (event) => {
    event.target.style.backgroundColor = "orange";
    setTimeout (() => {
        event.target.style.backgroundColor = "";

    }, 500);
})};



//const title =document.createElement("h1");
//title.id= "title";
//title.textContent= "Etch-A-Sketch";
//title.style.border = "2px solid red";