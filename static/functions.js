var slideNum=1;
displaySlide(slideNum);

function changeSlide(n){
    slideNum+=n;
    displaySlide(slideNum);
}

function displaySlide(n){
    var i;
    var slide = document.getElementsByClassName("slides");
    if(n>slide.length){
        slideNum=1;
    }
    if(n<1){
        slideNum=slide.length;
    }
    for(i=0;i<slide.length;i++){
        slide[i].style.display = 'none';
    }
    slide[slideNum-1].style.display = 'block';
}
