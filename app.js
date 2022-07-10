const leftThumb= document.querySelector('.left');
const rightThumb=document.querySelector('.right');

leftThumb.addEventListener('click',() =>{
    if(rightThumb.classList.contains('right')){
        rightThumb.classList.add('active');
        leftThumb.classList.remove('active');
    }
});
rightThumb.addEventListener('click',() =>{
    if(leftThumb.classList.contains('left')){
        leftThumb.classList.add('active');
        rightThumb.classList.remove('active');
    }
});