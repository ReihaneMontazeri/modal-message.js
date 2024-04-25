let btn = document.querySelector('button')
let section = document.querySelector('section')
let modalParent = document.querySelector('.modal-parent')
let x = document.querySelector('.X')

function exitModal(){
    modalParent.style.display = 'none'
    section.style.filter = 'blur(0px)'
}

btn.addEventListener('click', function(){
    console.log('button clicked')
    modalParent.style.display = 'block'
    section.style.filter = 'blur(10px)'
    x.addEventListener('click', exitModal)
})

window.addEventListener('keyup', function(event){
    if (event.keyCode === 27){
        exitModal()
    }
})

