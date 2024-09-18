let content=document.getElementById("container")

let home= document.getElementsByTagName("a")[1]
let about= document.getElementsByTagName("a")[2]
let contact= document.getElementsByTagName("a")[3]

let homes= document.getElementsByTagName("a")[4]
let abouts= document.getElementsByTagName("a")[5]
let contacts= document.getElementsByTagName("a")[6]

const gifImg = document.createElement('img');
gifImg.src = 'https://image.spreadshirtmedia.net/image-server/v1/products/T1459A839PA4459PT28D151362539W10000H10000/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/hourglass-icon-sign-time-koers-present-klistermaerke.jpg'

// Funktion for home
home.addEventListener('click', handlehome)
homes.addEventListener('click', handlehome)
function handlehome(event) {
    event.preventDefault()
    content.append(gifImg)
    fetchPage("home.html");
    history.pushState({ page: 1 }, "home", "/home.html");
}

// Funktion for about
about.addEventListener('click', handleabout)
abouts.addEventListener('click', handleabout)

function handleabout(event) {
    event.preventDefault()
    content.append(gifImg)
    fetchPage("about.html");
    history.pushState({ page: 2 }, "about", "/about.html");
}

// function for contact
contact.addEventListener('click', handlecontact)
contacts.addEventListener('click', handlecontact)

function handlecontact(event){
    event.preventDefault();
    content.append(gifImg);
    fetchPage("contact.html")
    history.pushState({ page: 3 }, "contact", "/contact.html");
}


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

