const qS = (el)=>document.querySelector(el);
const qSa = (el)=>document.querySelectorAll(el);
let clickArray = qSa('.n, .b')

document.body.addEventListener('keyup', (event)=>{
    playSound(event.code.toLowerCase());
});

qS('.composer button').addEventListener('click', ()=>{
    let song = qS('#input').value;
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
});

clickArray.forEach(function(element){
    element.addEventListener('click', ()=>{
        let clickKey = element.getAttribute('data-key')
        playSound(clickKey);
    })
});

function playSound(sound){
    let audioElement = qS(`#s_${sound}`);
    let keyElement = qS(`div[data-key="${sound}"]`);
    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 200);
    }
}

function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        wait += 400;
    }
}
