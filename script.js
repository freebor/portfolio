let items = document.querySelectorAll('.content');
let grid = document.querySelectorAll('.grid-content');
items.forEach(item=>{
    item.addEventListener("mousemove", (e)=>{
        // get position pointer in with (pixel)
        let positionPx = e.x - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth)*100;
        // get position pointer in height (px)
        let positionPy = e.y - item.getBoundingClientRect().top;
        // convert to %
        let positionY = (positionPy / item.offsetHeight)*100;

        item.style.setProperty('--rX', (0.5)*(50 - positionY) + "deg")
        item.style.setProperty('--rY', -(0.5)*(50 - positionX) + "deg")
        item.style.setProperty("--sU", (1.1));
    })
    item.addEventListener('mouseout', ()=>{
        item.style.setProperty("--sU", (1.0));
        item.style.setProperty('--rX', "0deg")
        item.style.setProperty('--rY', "0deg")
    })
})
grid.forEach(item=>{
    item.addEventListener("mousemove", (e)=>{
        // get position pointer in with (pixel)
        let positionPx = e.x - item.getBoundingClientRect().left;
        let positionX = (positionPx / item.offsetWidth)*100;
        // get position pointer in height (px)
        let positionPy = e.y - item.getBoundingClientRect().top;
        // convert to %
        let positionY = (positionPy / item.offsetHeight)*100;

        item.style.setProperty('--rX', -(0.3)*(30 - positionY) + "deg")
        item.style.setProperty('--rY', (0.3)*(30 - positionX) + "deg")
    })
    item.addEventListener('mouseout', ()=>{
        item.style.setProperty('--rX', "0deg")
        item.style.setProperty('--rY', "0deg")
    })
})