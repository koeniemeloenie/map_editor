const canvas = document.createElement("canvas");
canvas.width = innerWidth;
canvas.height = 700;

document.body.style.margin = "0";
document.body.appendChild(canvas)

const context = canvas.getContext('2d');

canvas.style.backgroundColor = "darkblue";


// const container = document.createElement('div');
// container.style.display = 'flex';
// // container.style.position = 'absolute';
// container.style.left = 0;
// container.style.top = 0;
// container.style.alignContent = 'center';
// container.style.justifyItems = 'center';
// container.style.height = '100vh';
// container.style.width = '100vw';

// document.body.appendChild(container);