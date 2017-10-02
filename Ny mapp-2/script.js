//var myBlock = document.getElementById('myElement');
// var myBlock2 = document.getElementById('myElement2');
var myBlock;
var mc = new Hammer(myBlock);


$(document).ready(function() {
    $("div").click(function(event) {
    myBlock = event.target.id;
    });
});

// create a simple instance on our object
// var mc2 = new Hammer(myBlock2);

// add a "PAN" recognizer to it (all directions)
mc.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }));
// mc2.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }));


// tie in the handler that will be called
mc.on("pan", handleDrag);
// mc2.on("pan", handleDrag);


// poor choice here, but to keep it simple
// setting up a few vars to keep track of things.
// at issue is these values need to be encapsulated
// in some scope other than global.
var lastPosX = 0;
var lastPosY = 0;
var isDragging = false;
function handleDrag(ev) {

    // for convience, let's get a reference to our object
    var elem = ev.target;

    // DRAG STARTED
    // here, let's snag the current position
    // and keep track of the fact that we're dragging
    if (!isDragging) {
        isDragging = true;
        lastPosX = elem.offsetLeft;
        lastPosY = elem.offsetTop;

    }

    // we simply need to determine where the x,y of this
    // object is relative to where it's "last" known position is
    // NOTE: 
    //    deltaX and deltaY are cumulative
    // Thus we need to always calculate 'real x and y' relative
    // to the "lastPosX/Y"
    var posX = ev.deltaX + lastPosX;
    var posY = ev.deltaY + lastPosY;

    // move our element to that position
    elem.style.left = posX + "px";
    elem.style.top = posY + "px";

    // DRAG ENDED
    // this is where we simply forget we are dragging
    if (ev.isFinal) {
        isDragging = false;

    }


}





