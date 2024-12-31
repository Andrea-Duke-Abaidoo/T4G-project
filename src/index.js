/* home js*/
let open = document.querySelector(".open")
function openImage(){
    let image = document.querySelector(".image")
    image.style.display="block"
    let close = document.querySelector(".close")
    close.style.display="block"
    let open= document.querySelector(".open")
    open.style.display="none"
}
open.addEventListener("click", openImage)


let close = document.querySelector(".close")
function closeImage(){
    let image = document.querySelector(".image")
    image.style.display="none"
    let close = document.querySelector(".close")
    close.style.display="none"
    let open= document.querySelector(".open")
    open.style.display=" block"
}
close.addEventListener("click", closeImage)

 
let header = document.querySelector(".header")
header.style.backgroundColor ="rosybrown"
header.style.color = "white"


let hello = document.querySelector(".hello")
function changeContent(){ 
hello.innerHTML = "We are glad to have you here, enjoy your shopping!🤩"
hello.style.color = "white"
}
hello.addEventListener("mouseenter", changeContent)
  
alert("Hello, welcome to our website")


let username = prompt("Enter your name");
if (username){
    alert(`Hi ${username}, you are welcome to ADA PERFUMES`);
}

let perfume1 = document.querySelector(".perfume1")
function changeStyle(){
perfume1.style.color = "white"
}
perfume1.addEventListener("mouseenter", changeStyle)
 

let notes = document.querySelector(".notes")
function changeNotes(){ 

notes.innerHTML = "@ADA_PERFUMES: Experience the best of authentic perfumes at unbeatable prices! All top brands, one trusted destination."
notes.style.color = "white"
}
notes.addEventListener("mouseenter", changeNotes)
  






/* aboutus js*/



/* features js*/

  



/* signup js*/



/* signin js*/




/* logout js*/



/* contactus js*/
function handlePlaceOrder() {
    alert("Redirecting to Place Order...");
  }
  
  function handleSalesInquiry() {
    alert("Redirecting to Sales Inquiry...");
  }
