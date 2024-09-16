const home= document.getElementsByTagName('a')[0]
const about= document.getElementsByTagName('a')[1]
const contact= document.getElementsByTagName('a')[2]

window.onload = fetchHtml('home')

window.addEventListener('popstate', (event) => {
    /*     alert(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`,
    ); */
    switch (event.state.page) {
        case 0:
            fetchHtml('home')
            break
        case 1:
            fetchHtml('contact')
            break
        default:
            fetchHtml('home')
    }
})

home.addEventListener('click', (e)=>{
    history.pushState({page:0}, 'home','home')
    fetchPage('home')
})

home.addEventListener('click', (e)=>{
    history.pushState({page:1}, 'about','about')
    fetchPage('about')
})