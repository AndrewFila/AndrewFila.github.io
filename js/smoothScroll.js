function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var dist = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,targetPosition,duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d;
        t--;
        return c*(t*t*t*t*t + 1) + b;
    }
    requestAnimationFrame(animation);



}

var selection1 = document.querySelector('.home-link');

selection1.addEventListener('click', function(){
    smoothScroll('#home',1000);
});
var selection2 = document.querySelector('.abt-link');

selection2.addEventListener('click', function(){
    smoothScroll('#about',1000);
});
var selection3 = document.querySelector('.edu-link');

selection3.addEventListener('click', function(){
    smoothScroll('#education',1000);
});
var selection4 = document.querySelector('.ts-link');

selection4.addEventListener('click', function(){
    smoothScroll('#tech-skills',1000);
});
var selection5 = document.querySelector('.cont-link');

selection5.addEventListener('click', function(){
    smoothScroll('#contact',1000);
});
