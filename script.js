
let body = document.addEventListener('keydown', (e) =>{ 
    let key = e.key
    let box =  document.querySelector(`div#${key}`)
    let audio =  document.querySelector(`audio#${key}`)
    box.classList.add('playing')
    audio.currentTime = 0; //start audio
    audio.play()
    
})

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


            
    
        
        
        


