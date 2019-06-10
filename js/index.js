// 1. MouseOver
let imageEvent = document.getElementById('first-image');
console.log(imageEvent);
imageEvent.addEventListener('mouseover', (event) => { 
    event.target.style.opacity = '0.75';
    event.target.style.border = '2px solid yellow';
});

// 2. Click
let letsGoImg = document.getElementById('letsGoImg');
console.log(letsGoImg);
letsGoImg.addEventListener('click', (event) => {
    event.target.style.display = 'none';
});

// 3. DblClick
let adventureImg = document.getElementById('adventureImg');
console.log(adventureImg);
adventureImg.addEventListener('dblclick', (event) => {
    event.target.style.filter = "blur(35px)";
});

// 4. ContextMenu
let funInTheSun = document.getElementById('fun');
console.log(funInTheSun);
funInTheSun.addEventListener('contextmenu', (event) => {
    event.target.style.color = "red";
});

// 5. MouseMove
let mountain = document.getElementById('mountain');
console.log(mountain);
mountain.addEventListener('mousemove', (event) => {
    event.target.style.color = "red";
});

// 6. Copy
let island = document.getElementById('island');
console.log(island);
island.addEventListener('copy', (event) => {
    event.target.style.color = "red";
});

// 7. Resize
let pick = document.getElementById('pick');
console.log(pick);
window.addEventListener('resize', (event) => {
    pick.style.borderRight = "5px solid yellow";
    pick.style.borderLeft = "5px solid yellow";

});

// 8. Scroll
let footer = document.getElementById('footer');
console.log(footer);
window.addEventListener('scroll', (event) => {
    footer.style.backgroundColor = "red";
});
