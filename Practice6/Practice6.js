//Task1
//Solution1
// let element = document.getElementById("test");
// element.innerHTML = "Last";

//Solution2
// let elements = document.getElementsByTagName("div");
// elements[0].innerHTML = "Last";

//Task2
// let element = document.getElementsByClassName("image");
// element[0].setAttribute("src", "cat.jpg");
// alert(element.outterHTML);

//Task3
// let pNum = 0;
// let elements = document.querySelectorAll("div");
// console.log(elements[0].childNodes);
// elements[0].childNodes.forEach(p => {
//     if (p.nodeName == "P") {
//         console.log(`Selector text ${pNum}: ${p.innerHTML}`);
//         pNum++;
//     } 
// });

//Task4
// let list = document.querySelectorAll("ul");
// let listArr = list[0].children;
// alert(`${listArr[0].innerHTML}, ${listArr[4].innerHTML}, ${listArr[1].innerHTML}, ${listArr[3].innerHTML}, ${listArr[2].innerHTML}`);

//Task5

// let header = document.getElementsByTagName("h1");
// header[0].style.backgroundColor = "green";

// let paragraphs = document.querySelectorAll("p");
// paragraphs[0].style.fontWeight = "bold";
// paragraphs[1].style.color = "red";
// paragraphs[2].style.textDecoration = "underline";
// paragraphs[3].style.fontStyle = "italic";

// let parent = document.querySelector('#myList');
// let child = document.querySelectorAll("li");

// let str = `${child[0].innerHTML} ${child[1].innerHTML}${child[2].innerHTML}`;
// let child1 = child[0].innerHTML;
// let newLi = document.createElement("li");
// newLi.innerHTML = str;

// parent.removeChild(parent.children[0]);
// parent.removeChild(parent.children[1]);
// parent.removeChild(parent.children[0]);
// parent.append(newLi);

// let makeInvis = document.getElementsByTagName("span");
// makeInvis[0].style.visibility = "hidden";

//Task6
// let firstMsg = prompt("Please enter first message");
// let secMsg = prompt("Please enter second message");
// let input = document.querySelectorAll('input');
// let firstInput = input[0].value;
// let secInput = input[1].value;
// input[0].select();
// input[0].value = firstMsg
// input[1].select();
// input[1].value = secMsg;

// input[0].value = secMsg;
// input[1].value = firstMsg;

//Task7
// let main = document.createElement("main");
// let div = document.createElement("div");
// let paragraph = document.createElement("p");
// document.body.appendChild(main);
// main.appendChild(div);
// div.appendChild(paragraph);
// main.className = " mainClass check item ";
// div.id = "myDiv";
// paragraph.innerHTML = "First paragraph";
// console.log(document.body.children[1]);