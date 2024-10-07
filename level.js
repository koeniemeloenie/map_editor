let mapWidth = canvas.width;

localStorage.clear();

if(localStorage.getItem('maps') == null) {
    localStorage.setItem('maps', JSON.stringify([]));
    // const levelKeys = []
    // const stringifiedLevelKeys =  JSON.stringify(levelKeys);
}

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

//legenda
//x = muur
// .=niks
// 'P' = Player
let map = [ 
    ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "x", "x", "x"],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "x", "x", "x"],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "x", "x", "x"],
    ["x", "P", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "x", "x", "x"],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "x", "x", "x"],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "x", "x", "x"],
    ["x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", ".", "x", "x", "x", "x"],
    ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"],

];

const maps = {
    default: map
} 

let screenBlockLength = mapWidth / map[0].length;

const menuButton = {
    menuHeight: 0.05 * innerHeight,
    menuPos: 0.05 * innerWidth,
    curveRate: 12,
    menuButtonGrey: 190,
    menuButtonLineWidth: 2, 
    menuButtonGreen: 190,
    menuButtonBlue: 225,
}

const menuButtonLineOne = {
    x1: innerWidth + (-menuButton.menuPos + (0.25 *menuButton.menuHeight)),
    y1: menuButton.menuPos / 2 + 0.25 * menuButton.menuHeight,
    x2: innerWidth + (-menuButton.menuPos + (0.75 *menuButton.menuHeight)),
    y2: menuButton.menuPos / 2 + 0.25 * menuButton.menuHeight,
}
const menuButtonLineTwo = {
    x1: innerWidth + (-menuButton.menuPos + (0.25 *menuButton.menuHeight)),
    y1: menuButton.menuPos / 2 + 0.5 * menuButton.menuHeight,
    x2: innerWidth + (-menuButton.menuPos + (0.75 *menuButton.menuHeight)),
    y2: menuButton.menuPos / 2 + 0.5 * menuButton.menuHeight,
}
const menuButtonLineThree = {
    x1: innerWidth + (-menuButton.menuPos + (0.25 *menuButton.menuHeight)),
    y1: menuButton.menuPos / 2 + 0.75 * menuButton.menuHeight,
    x2: innerWidth + (-menuButton.menuPos + (0.75 *menuButton.menuHeight)),
    y2: menuButton.menuPos / 2 + 0.75 * menuButton.menuHeight,
}

const animate = () => {
    context.clearRect(0, 0, innerWidth, innerHeight);
    

    for (let y = 0; y < map.length; y++) {
        // rows
        for( let x = 0; x < map[y].length; x++) {
            // columns
            switch (map[y][x]) {
                case "x":
                    context.beginPath();
                    context.strokeStyle = 'lime';
                    context.lineWidth = 4;
                    context.fillStyle = 'maroon';
                    context.rect((x *screenBlockLength), (y * screenBlockLength), screenBlockLength,screenBlockLength);
                    context.fill();
                    context.stroke();
                    break
                case 'P':
                     player.draw();
            }
        }
    }

    // context.beginPath();
    // context.moveTo(menuButtonLineOne.x1, menuButtonLineOne.y1);
    // context.lineTo(menuButtonLineOne.x2, menuButtonLineOne.y2);
    // context.moveTo(menuButtonLineTwo.x1, menuButtonLineTwo.y1);
    // context.lineTo(menuButtonLineTwo.x2, menuButtonLineTwo.y2);
    // context.moveTo(menuButtonLineThree.x1, menuButtonLineThree.y1);
    // context.lineTo(menuButtonLineThree.x2, menuButtonLineThree.y2);


    // context.fillStyle = `rgb(190,${menuButton.menuButtonGreen},${menuButton.menuButtonBlue})`;
    // context.strokeStyle = 'black';
    // context.lineWidth = menuButton.menuButtonLineWidth;
    // context.roundRect(innerWidth - menuButton.menuPos, menuButton.menuPos / 2, menuButton.menuHeight, menuButton.menuHeight,menuButton.curveRatecurveRate )
    // context.fill();
    // context.stroke();
                    

    requestAnimationFrame(animate);
};   
