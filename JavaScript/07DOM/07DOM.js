// console.log(document);

// console.log(document);
// console.log(document.head);
// console.log(document.title);
// console.log(document.body);
// console.log(document.documentURI);
// console.log(document);

// // ************ DOM SELECTORS ************
// // 1. getElementsByTagName
// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("h1").length);
// // 2. getElementById
// console.log(document.getElementById("main"));
// // 3. getElementsByClassName
// console.log(document.getElementsByClassName("cls"));
// // 4. querySelector
// console.log(document.querySelector("#id-1"));
// // 5. querySelectorAll
// console.log(document.querySelectorAll("li"));

// // ---------------------------------------
// // Storing data in variables
// const h1 = document.querySelector("h1");
// console.log(h1);

// //ClassList

// const h1 = document.querySelector("h1")
// console.log(h1.classList);
// h1.classList.add("styles")
// h1.classList.remove("styles")
// h1.classList.toggle("styles")


// // Attributes
// const a = document.querySelector('a')
// const f2 = document.querySelector('.f2')
// const input = document.querySelector('input')
// console.log(a.href);
// console.log(f2.href = "https://www.youtube.com/");
// console.log(input.value = "hello");
// console.log(input.type);
// console.log(input.placeholder = "Please provide a Password");

// input.value = "Ritik the Great"
// //getAttribute(attrName)
// console.log(input.getAttribute("type"));
// console.log(input.getAttribute("value"));
// console.log(input.getAttribute("placeholder"));

//setAttribute(attrName, value)
// input.setAttribute("placeholder", "password")


// // Siblings
// let li = document.querySelector("li");
// let ul = document.querySelector("ul")
// let fli = document.querySelector(".fourth")
// console.log(li.parentElement);

// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[1]);
// console.log(ul.children[2]);
// console.log(ul.children[3]);
// console.log(ul.children[0].innerText = "zero");

// console.log(li.nextElementSibling.textContent);
// console.log(fli.previousElementSibling.textContent);
// console.log(fli.previousElementSibling.textContent = "Hello");

// // Styles
// console.log(h1.style);
// h1.style.color= "teal";
// h1.style.backgroundColor = "red";

// const container = document.querySelector(".container");
// const h1 = document.querySelector(".head1");
// const p = document.querySelector(".head2");
// const btn = document.querySelector(".btn");

// container.style.height = "200px";
// container.style.backgroundColor = "teal";
// container.style.padding = "10px";

// h1.style.color = "skyblue";
// p.style.fontFamily = "sans-serif";
// p.style.color = "white";
// p.style.backgroundColor = "#212121";
// btn.style.color = "pink";
// btn.style.backgroundColor = "blue";

// const h1 = document.createElement("h1");
// const body = document.body;
// h1.textContent = "Element created";
// h1.classList.add("styles")
// h1.classList.remove("styles")
// body.appendChild(h1);
// console.log(h1);

// // selector.insertBefore(what, where);
// ul.insertBefore(newLi, firstLi);

// const firstP = document.querySelector('p');
// const i = document.createElement('i');
// i.innerText = " i'm Italics";
// i.style.color = "green";
// firstP.insertAdjacentElement("beforebegin",i);
// firstP.insertAdjacentElement("afterbegin",i);
// firstP.insertAdjacentElement("beforeend",i);
// firstP.insertAdjacentElement("afterend",i);

// let section = document.querySelector('section');
// const i = document.createElement('i');
// i.innerText = "I'm italics!";
// i.style.color = "red";

// const j = document.createElement('i');
// j.innerText = "I'm prepond!";
// j.style.color = "blue";
// section.append(i)
// section.prepend(j)


// // Events in javaScript
// const secondBtn = document.querySelector(".second-btn");
// secondBtn.onmousemove = function(){
//     alert("Hello in Second btn")
// };

// const best = document.querySelector(".best");
// function greetings(){
//     alert("Hello World! This is the best");
// }
// best.addEventListener("click", greetings)

// const para = document.querySelector(".para")
// para.addEventListener('click', (event)=>{
//     console.log(event);
    
// })

// const form = document.querySelector("form")
// const input = document.querySelector("input")

// form.addEventListener("submit", (event)=>{
//     event.preventDefault()
//     console.log(input.value);
    
// })

// // MouseEvent

// let one = document.querySelector(".click");
// let two = document.querySelector(".contextmenu");
// let three = document.querySelector(".dblclick");
// let four = document.querySelector(".mousedown");
// let five = document.querySelector(".mouseenter");
// let six = document.querySelector(".mouseleave");
// let seven = document.querySelector(".mousemove");
// let eight = document.querySelector(".mouseout");
// let nine = document.querySelector(".mouseover");
// let ten = document.querySelector(".mouseup");

// one.addEventListener("click", ()=>{
//     one.classList.toggle("red")
// })

// two.addEventListener("contextmenu", ()=>{
//     two.classList.toggle("blue")
// })
// three.addEventListener("dblclick", ()=>{
//     three.classList.toggle("teal")
// })
// four.addEventListener("mousedown", ()=>{
//     four.classList.toggle("steelblue")
// })
// five.addEventListener("mouseenter", ()=>{
//     five.classList.toggle("orange")
// })
// six.addEventListener("mouseleave", ()=>{
//     six.classList.toggle("purple")
// })
// seven.addEventListener("mousemove", ()=>{
//     seven.classList.toggle("pink")
// })
// eight.addEventListener("mouseout", ()=>{
//     eight.classList.toggle("crimson")
// })
// nine.addEventListener("mouseover", ()=>{
//     nine.classList.toggle("chocolate")
// })
// ten.addEventListener("mouseup", ()=>{
//     ten.classList.toggle("aqua")
// })

// KeyboardEvent
const input = document.querySelector("input")

// input.addEventListener("keypress", ()=>{
//     console.log("Key Pressed");
// })
// input.addEventListener("keyup", ()=>{
//     console.log("Key UP");
// })
// input.addEventListener("keydown", ()=>{
//     console.log("Key Down");
// })

// input.addEventListener("keypress", (e)=>{
//     console.log(e.charCode);
//     console.log(e.code);
//     console.log(e.ctrlKey);
//     console.log(e.key);
//     console.log(e.shiftKey);
// })