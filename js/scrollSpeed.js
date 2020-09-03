var el = document.querySelectorAll,
    lastPos = null,
    timer = 0,
    newPos;

function clear() {
  lastPos = null;
  el.removeAttribute('style');
};

window.onscroll = checkScrollSpeed;

function checkScrollSpeed(){
  newPos = window.scrollY;
  if ( lastPos != null ){ // && newPos < maxScroll 
    var delta = newPos -  lastPos;

    // min/max values
    if( delta > 45 ) delta = 45;
    else if( delta < -45 ) delta = -45;
    console.log(delta);
    el.style.cssText = '-webkit-transform:rotatex(' + delta +'deg); transform:rotatex(' + delta +'deg)';
  }
  lastPos = newPos;
  timer && clearTimeout(timer);
  timer = setTimeout(clear, 30);
};