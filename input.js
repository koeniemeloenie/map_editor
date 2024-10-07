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

const changeTileMap = (evt) => {

    const y = Math.trunc(evt.offsetY  / screenBlockLength);
    const x = Math.trunc(evt.offsetX / screenBlockLength);
    
    if (map[y][x] == "x" && insideRect(mouse.x, mouse.y, menuButton.menuPos) == false ) {
        map[y][x] = "."; 
    
    } else if(map[y][x] == "."&& insideRect(mouse.x, mouse.y, menuButton.menuPos) == false) {
        map[y][x] = "x";
  
    }
}

canvas.addEventListener('mouseup', (evt) => {
    changeTileMap();

})
addEventListener('keydown', (evt) => {
    if ( player.moving == true) return;

    if (evt.keycode == 'KeyW') player.goUp();
    if (evt.keycode == 'KeyA') player.goLeft();
    if (evt.keycode == 'KeyS') player.goDown();
    if (evt.keycode == 'KeyD') player.goRight();
}
)