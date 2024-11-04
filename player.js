const getPlayer = () => {
    const properties = {
        acc: {x: 0, y: 0},
        vel: {x: 0, y: 0},
        fill: {r: 255, g:100 , b:0},
        moving: false,
        xInt: 0,
        yInt: 0,
    }

    const draw = () => {
        context.beginPath();
        context.fillStyle = `rgb(${properties.fill.r}, ${properties.fill.g}, ${properties.fill.b})`;
        context.strokeStyle = 'darkorange'
        context.lineWidth = screenBlockLength/12;
        context.rect(pos.x * screenBlockLength, pos.y * screenBlockLength, screenBlockLength, screenBlockLength);
        context.stroke();
        context.fill();
    }

    const getPosFromMap = () => {
        for (let y = 0; y < map.length; y++) {
            // rows
            for( let x = 0; x < map[y].length; x++) {
                // columns
                if (map[y][x] == 'P') {
                    map[y][x] = "."; 
                    return {x, y}
                }
            }
        }
    }

    const pos = getPosFromMap();
    const goUp = () => {
        properties.vel.y = -.1;
        properties.moving = true;
    }
    const goLeft = () => {
        properties.vel.x = -.1;
        properties.moving = true;

    }
    const goDown = () => {
        properties.vel.y = .1;
        properties.moving = true;
    }
    const goRight = () => {
        properties.vel.x = .1;
        properties.moving = true;
    }
    const stop = () => {
        properties.vel.x = 0;
        properties.vel.y = 0;
        properties.moving = false;
        editMode = true;
    }


    const update = () => {

        pos.x += properties.vel.x;
        pos.y += properties.vel.y;
        if (properties.moving) editMode = false;

        let x = Math.trunc(pos.x);
        let y = Math.trunc(pos.y);

        //mapborder check
        if (pos.x> map[1].length-1) {
            pos.x = map[1].length-1;
            player.stop();
            }
        if (pos.x <0 ){ 
            pos.x = 0;
            player.stop();
            }
        if (pos.y > map.length-1){ 
            pos.y = map.length-1;
            player.stop();
            }
        if (pos.y <0 ){
            pos.y = 0;
            player.stop();
        } 
        
        const block = map[y][x];

        
        //wall check
        if(properties.moving){
            
            
            if(properties.vel.y < 0){
                if (block == "X"){ 
                    player.stop();
                    pos.y = y+1;
                }
                if( properties.yInt !== y){
                    map[y+1][x]= "-";
                }
           } 
           if(properties.vel.y > 0){
            if (map[y+1][x] == "X"){ 
                player.stop();
                pos.y = y;
                }
                if( properties.yInt-1 !== y){
                    map[y][x]= "-";
                }
            } 
           if(properties.vel.x < 0){
            if (block == "X"){ 
                player.stop();
                pos.x = x+1;
                }
                if( properties.xInt !== x){
                    map[y][x+1]= "-";
                }
           } 
           if(properties.vel.x > 0){
            if (map[y][x+1] == "X"){ 
                player.stop();
                pos.x = x;
            }
            if( properties.xInt-1 !== x){
                map[y][x]= "-";
            }
           } 

        }
    
        properties.xInt = x;
        properties.yInt = y;
    }

    return {draw, getPosFromMap, properties, update, goUp, goLeft, goDown, goRight, stop};
}

const player = getPlayer();

animate();