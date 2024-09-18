let home= document.getElementsByTagName("a")[0]
let about= document.getElementsByTagName("a")[1]
let contact= document.getElementsByTagName("a")[2]

window.onload= fetchPage("home.html")
home.addEventListener('click', event => {
    event.preventDefault()
    fetchPage("home.html");
    history.pushState({ page: 0 }, "home", "/home.html");
})

about.addEventListener('click', event => {
    event.preventDefault()
    fetchPage("about.html");
    history.pushState({ page: 1 }, "about", "/about.html");
})

contact.addEventListener('click', event=>{
    event.preventDefault();
    fetchPage("contact.html")
    history.pushState({ page: 2 }, "contact", "/contact.html");
})

let content=document.getElementById("container")

function fetchPage(filename){
    if(typeof filename!= "string")
        return;
    fetch(filename)
    .then(response=>{return response.text()})
    .then(data=> content.innerHTML = data)
}

//Meny script
const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", (event) => {

    event.preventDefault();

    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.add("show");

});

const closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.remove("show");
});

