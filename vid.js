
let rec =document.querySelector('#rectangle');
let text =document.querySelector('#text');

rec.addEventListener('mousemove', function(details){
    let recLocation = rec.getBoundingClientRect();
    
    let insideRec=details.clientX - recLocation.left;

     


if (insideRec< recLocation.width/2) {
 
  let redcolor = gsap.utils.mapRange(0, recLocation.width/2, 255, 0, insideRec);
    rec.style.backgroundColor = `rgb(${redcolor},0,0)`;
    text.style.color = 'black';
}else if (insideRec> recLocation.width/2) {
    let greencolor = gsap.utils.mapRange(recLocation.width/2, recLocation.width, 0, 255, insideRec);
    rec.style.backgroundColor = `rgb(0,${greencolor},0)`;
    text.style.color = 'white';


    
    


    
}else{
    rec.style.backgroundColor = 'white';
    text.style.color = 'black';
}
});

rec.addEventListener('mouseleave', function(){
    gsap.to(rec, {
        backgroundColor: 'white',
    });


});

let newX = 0, newY = 0, startX = 0, startY = 0;

let drag = document.getElementById("rectangle");

if (drag) {
    drag.addEventListener("mousedown", mouseDown);
    
    drag.style.position = 'absolute';
    drag.style.left = drag.style.left || '0px';
    drag.style.top = drag.style.top || '0px';
}

function mouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
}

function mouseMove(e) {
    newX = e.clientX - startX;
    newY = e.clientY - startY;

    startX = e.clientX;
    startY = e.clientY;

    drag.style.left = (parseInt(drag.style.left) + newX) + "px";
    drag.style.top = (parseInt(drag.style.top) + newY) + "px";

    console.log({newX, newY});
}

function mouseUp() {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
}
