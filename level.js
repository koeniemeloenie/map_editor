// const container = document.createElement('div');

// container.style.display = 'flex';
// // container.style.position = 'absolute';
// container.style.left = 0;
// container.style.top = 0;
// container.style.alignContent = 'center';
// container.style.justifyItems = 'center';
// container.style.height = '100vh';
// container.style.width = '100vw';

const canvas = document.createElement("canvas");
canvas.width = 700;
canvas.height = 700;

document.body.style.margin = "0";
// document.body.appendChild(container);
document.body.appendChild(canvas)

const context = canvas.getContext('2d');

// const buttons = [];

// for (let i; i < 4; i++) {
//     buttons.push(document.getElementById(i + 1));
// } 

const saveButton1 = document.getElementById('1');
const loadButton1 = document.getElementById('2');
const saveButton2 = document.getElementById('3');
const loadButton2 = document.getElementById('4');

localStorage.clear();
if(localStorage.getItem('level1') == null) loadButton1.disable;
if(localStorage.getItem('level2') == null) loadButton2.disable;

if(localStorage.getItem('maps') == null) {
    localStorage.setItem('maps', JSON.stringify([]));
    // const levelKeys = []
    // const stringifiedLevelKeys =  JSON.stringify(levelKeys);
}

//legenda
//x = muur
// .=niks
// 'P' = Player

const player = {
    x: 3,
    y: 4,
    // color: {} // r, g, b
    // stroke: 'purple'
    color: [100, 50, 0],
}

const playerStringified = JSON.stringify(player);

const playerParsed = JSON.parse(playerStringified);

function saveLevel(level) {
    const stringifiedMap = JSON.stringify(map);
    localStorage.setItem(level, stringifiedMap);
    localStorage.setItem('maps', level)
}


function loadLevel(map1) {
    const unparsedLoadedLevel = localStorage.getItem(localStorage.getItem('maps'));
   const loadedLevel = JSON.parse(unparsedLoadedLevel);
    map.length = 0;

    for (let index = 0; index < loadedLevel.length; index++) {
    map.push(loadedLevel[index]);    
        
    }
}



const map = [
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "."]
];

const maps = {
default: map
} 




// const worldBlockWidth = 1;
// const worldBlockHeight = 1;

const screenBlockLength = canvas.width/14;


const animate = () => {
    
    context.clearRect(0, 0, innerWidth, innerHeight);
    
    context.strokeStyle = 'lime';
    context.fillStyle = 'maroon';
    context.lineWidth = 4;

    for (let y = 0; y < map.length; y++) {
        // rows
        for( let x = 0; x < map[y].length; x++) {
            // columns
            switch (map[y][x]) {
                case "x":
                    context.beginPath();
                  
                    context.rect((x *screenBlockLength), (y * screenBlockLength), screenBlockLength,screenBlockLength);
                    context.fill();
                    context.stroke();
                    break
                case 'P':
                    context.beginPath();
                    // player.x, player.y, player.
                    
               
            }
        }
    }

                    


    requestAnimationFrame(animate);
};




//draw player
// context.fillStyle = (player.color.r, player.color.g, player.color.b);`



canvas.style.backgroundColor = "darkblue";

animate();

canvas.addEventListener('mouseup', (evt) => {

    const y = Math.trunc(evt.offsetY  / screenBlockLength);
    const x = Math.trunc(evt.offsetX / screenBlockLength);
    
    if (map[y][x] == "x") {
        map[y][x] = ".";
    
    } else if(map[y][x] == ".") {
        map[y][x] = "x";
  
    }

})
addEventListener('keyup', (evt) => {
console.log(evt)
}
)

