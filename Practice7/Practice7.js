//Task1
// let newWindow = window.open("", "", "width=300 height=300");

// setTimeout(function() {
//     newWindow.resizeTo(500, 500);
// }, 2000);

// setTimeout(function() {
//     newWindow.moveTo(200, 200);
// }, 4000);

// setTimeout(function() {
//     newWindow.close();
// }, 6000);

//Taks2
// document.addEventListener('click', changeCSS);

// function changeCSS() {
//     let newStyle = document.getElementById("text");
//     newStyle.style.color = "orange";
//     newStyle.style.fontSize = 20;
//     newStyle.style.fontFamily = "Comic Sans MS";
// }

//Task3
// let button1 = document.getElementById("button1");
// let button2 = document.getElementById("button2");
// let button3 = document.getElementById("button3");
// let link = document.getElementById("link");

// function changeBcgColor(color) {
//   document.body.style.backgroundColor = color; 
// }

// button1.addEventListener("click", function () {
//     changeBcgColor("blue");
// });

// button2.addEventListener("dblclick", function(){
//     changeBcgColor("pink");
// });

// button3.addEventListener("mousedown", function(){
//     setTimeout(function(){
//         changeBcgColor("brown");
//     },1000)
// });

// button3.addEventListener("mouseup", function(){
//     changeBcgColor("white");
// });

// link.addEventListener("mouseover", function(){
//     changeBcgColor("yellow");
// });

// link.addEventListener("mouseout", function(){
//     changeBcgColor("white");
// });

//Task4
// let dropdown = document.getElementById('nameDropdown');
// let button = document.getElementById("actionButton");

// button.addEventListener("click", function () {
//     let currentSelection = dropdown.value;
//     const options = document.querySelectorAll('option');
//     options.forEach(function (option) {
//         if (option.value === currentSelection) {
//             option.remove();
//         }
//     })
// });

//Task5
// let btn = document.getElementById('liveButton');

// btn.addEventListener("click", function () {
//     let p = document.createElement("p");
//     document.body.append(p);
//     p.innerHTML = "I was pressed!";
// });

// btn.addEventListener("mouseover", function () {
//     let p = document.createElement("p");
//     document.body.append(p);
//     p.innerHTML = "Mouse on me!";
// });

// btn.addEventListener("mouseout", function () {
//     let p = document.createElement("p");
//     document.body.append(p);
//     p.innerHTML = "Mouse is not on me!";
// });

//Task6
// function updateSizeValues() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     document.getElementById('width&height').textContent = `Width: ${width}px, Height: ${height}px`;
//   }

//   updateSizeValues();

//   window.addEventListener('resize', function() {
//     updateSizeValues(); 
//   });
