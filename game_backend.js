score=0;
crossed = true;

audio=new Audio('oceanMusic.mp3');
audioGO=new Audio('out.mp3');
setTimeout(() => {
    audio.play();
},1000);

window.addEventListener('keyup', e =>{
    if (e.key == 'ArrowUp'){
        fish = document.querySelector('.fish');
        fish.classList.add('animateFish')
    }
    setTimeout(()=>{
        fish.classList.remove('animateFish')
    },700);

    if (e.key == 'ArrowRight'){
        fish = document.querySelector('.fish');
        fishX=parseInt(window.getComputedStyle(fish,null).getPropertyValue('left'));
        fish.style.left=fishX+112+"px";
    }

    if (e.key == 'ArrowLeft'){
        fish = document.querySelector('.fish');
        fishX=parseInt(window.getComputedStyle(fish,null).getPropertyValue('left'));
        fish.style.left=fishX-112+"px";
    }
});

setInterval(()=>{
    fish=document.querySelector('.fish');
    game_over=document.querySelector('.game_over');
    shark=document.querySelector('.shark');

    fx=parseInt(window.getComputedStyle(fish,null).getPropertyValue('left'));
    fy=parseInt(window.getComputedStyle(fish,null).getPropertyValue('top'));

    sx=parseInt(window.getComputedStyle(shark,null).getPropertyValue('left'));
    sy=parseInt(window.getComputedStyle(shark,null).getPropertyValue('top'));
    
    offsetX=Math.abs(fx-sx);
    offsetY=Math.abs(fy-sy);

    if(offsetX<93 && offsetY<93){
        game_over.style.visibility = 'visible';
        shark.classList.remove('sharkAni')
        audioGO.play();
        setTimeout(() =>{
            audioGO.pause();
            audio.pause();
        },1000);
    } 
    else if(offsetX<145 && crossed){
        score+=1;
        updateScore(score)
        crossed=false;
        setTimeout(()=>{
            crossed=true;
        },1000);
        setTimeout(()=>{
            aniDur=parseFloat(window.getComputedStyle(shark,null).getPropertyValue('animation-duration'));
            newDur=anyDur-0.1;
            shark.style.animationDuration=newDur+'s';
            console.log('New Animation Duration : ',newDur)
        },500);
    }

},100);

function updateScore(score){
    score_container.innerHTML="Your Score : "+ score ;
}