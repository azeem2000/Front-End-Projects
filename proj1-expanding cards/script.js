const panels = document.querySelectorAll('.panel')
//querySelectorAll takes the panels in form of node list that is stores the panels in form of an array

panels.forEach((panel)=>{
    panel.addEventListener('click',() =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}