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
let sibtn = document.querySelector(".sibtn")
function changeSign(){
sibtn.style.color = "white"
}
sibtn.addEventListener("mouseenter", changeSign)

/* logout js*/

/* contactus js*/
function handlePlaceOrder() {
    alert("Redirecting to Place Order...");
  }
  
  function handleSalesInquiry() {
    alert("Redirecting to Sales Inquiry...");
  }
  function handlePlaceOrder() {
    const choice = prompt(
      "Welcome! Please choose an option to place an order:\n\n" +
      "1. Perfume Brands\n" +
      "2. Price Ranges\n\n" +
      "Enter the number of your choice (1 or 2):"
    );
  
    if (choice === "1") {
      alert("Here are the available perfume brands:\n\n1. Chanel\n2. Dior\n3. Gucci\n4. Versace");
    } else if (choice === "2") {
      alert("Here are the price ranges:\n\n1. $50 - $100\n2. $101 - $200\n3. $201 - $300\n4. $301 and above");
    } else {
      alert("Invalid choice. Please try again.");
    }
  }
  

  function handleSalesInquiry() {
    alert("Thank you for your interest in our perfumes! We are happy to assist you with any questions about our products.");


    const perfumeInfo = "Our perfumes are crafted with high-quality, natural ingredients. " +
                        "They come in a variety of fragrances to suit your preferences, including floral, woody, and citrus scents. " +
                        "We also offer free samples for first-time customers. Don't miss out on exclusive discounts and special offers available on our website.";

    alert(perfumeInfo);
alert("Thank you for contacting us! If you have any further questions, feel free to reach out anytime.");
}



function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;


  if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out.");
      return false; 
  }


  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

 
  alert(`Thank you, ${name}! We will get back to you via your email: ${email}.`);
  return true;
}




  