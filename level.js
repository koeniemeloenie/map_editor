let mapWidth = canvas.width;

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

}


function loadLevel(level) {
    const unparsedLoadedLevel = localStorage.getItem(level);
    const loadedLevel = JSON.parse(unparsedLoadedLevel);
    console.log(unparsedLoadedLevel);
    map = loadedLevel;
    

}



let map = [
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

console.log(typeof map);


// const worldBlockWidth = 1;
// const worldBlockHeight = 1;

let screenBlockLength = mapWidth/14;

const menuHeight = 0.05 * innerHeight;
const menuPos = 0.05 * innerWidth;
const curveRate = 12;
const menuButtonGrey = 190;
const menuButtonLineWidth = 2;
let   menuButtonGreen = 190;
let   menuButtonBlue = 225;

const menuButton = {
    rect: {
        x: innerWidth - menuPos,
        y: menuPos / 2,
    },
}

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

    context.fillStyle = `rgb(190,${menuButtonGreen},${menuButtonBlue})`;
    context.strokeStyle = 'black';
    context.lineWidth = menuButtonLineWidth;
    context.roundRect(innerWidth - menuPos, menuPos / 2, menuHeight, menuHeight,curveRate )
    context.fill();
    context.stroke();
                    

    requestAnimationFrame(animate);
};   

animate();