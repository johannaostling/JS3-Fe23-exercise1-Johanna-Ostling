let home= document.getElementsByTagName("a")[0]
let about= document.getElementsByTagName("a")[1]
let contact= document.getElementsByTagName("a")[2]

home.addEventListener('click', event => {
    event.preventDefault()
    fetchPage("home.html");
})

about.addEventListener('click', event => {
    event.preventDefault()
    fetchPage("about.html");
})

contact.addEventListener('click', event=>{
    event.preventDefault();
    fetchPage(contact.html)
})

let content=document.getElementById("container")

function fetchPage(filename){
    if(typeof filename!= "string")
        return;
    fetch(filename)
    .then(response=>{return response.text()})
    .then(data=> content.innerHTML = data)
    
}
