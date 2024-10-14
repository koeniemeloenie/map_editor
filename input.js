let editMode = true;

function insideRect(mouseX, mouseY, rectPos) {
    if(mouseX >= innerWidth - rectPos && mouseY >= rectPos / 2 && mouseX <= (innerWidth - rectPos)+rectPos / 2 && menuButton.menuHeight && mouseY <= (rectPos / 2)+menuButton.menuHeight ){
        return true;
        
    }
    else{
        return false;
    }
}
const mouse = {
    x: 0,
    y: 0,
}

canvas.addEventListener('mousemove', (evt) => {

    const y = Math.trunc(evt.offsetY);
    const x = Math.trunc(evt.offsetX);

    mouse.x = x;
    mouse.y = y;

   if(insideRect(x, y, menuButton.menuPos)){
    menuButtonBlue = 0;
    menuButtonGreen = 0;
   }
    else{
        menuButtonBlue = 255;
        menuButtonGreen = 190;
    }
    
})


canvas.addEventListener('mouseup', (evt) => {
if (editMode){
    const y = Math.trunc(evt.offsetY  / screenBlockLength);
    const x = Math.trunc(evt.offsetX / screenBlockLength);
    
    if (map[y][x] == "x" && insideRect(mouse.x, mouse.y, menuButton.menuPos) == false) {
        map[y][x] = "."; 
    
    } else if(map[y][x] == "."&& insideRect(mouse.x, mouse.y, menuButton.menuPos) == false) {
        map[y][x] = "x";
  
    }
}
});

addEventListener('keydown', (evt) => {
    if (player.properties.moving) return;

    if (evt.code == 'KeyW') player.goUp();
    if (evt.code == 'KeyA') player.goLeft();
    if (evt.code == 'KeyS') player.goDown();
    if (evt.code == 'KeyD') player.goRight();
}
)
addEventListener('keyup', (evt) => {
    if (player.properties.moving == false) return;

    if (evt.code == 'KeyW') player.stop();
    if (evt.code == 'KeyA') player.stop();
    if (evt.code == 'KeyS') player.stop();
    if (evt.code == 'KeyD') player.stop();
}
)