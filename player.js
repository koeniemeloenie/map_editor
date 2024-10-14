const getPlayer = () => {
    const properties = {
        acc: {x: 0, y: 0},
        vel: {x: 0, y: 0},
        fill: {r: 0, g:200 , b:70},
        moving: false,
    }

    const draw = () => {
        context.beginPath();
        context.fillStyle = `rgb(${properties.fill.r}, ${properties.fill.g}, ${properties.fill.b})`;
        context.fillRect(pos.x * screenBlockLength, pos.y * screenBlockLength, screenBlockLength, screenBlockLength);
    }

    const getPosFromMap = () => {
        for (let y = 0; y < map.length; y++) {
            // rows
            for( let x = 0; x < map[y].length; x++) {
                // columns
                if (map[y][x] == 'P') {
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

        const x = Math.trunc(pos.y);
        const y = Math.trunc(pos.x);
        const block = map[y][x];


        console.log(
        block    
        )
    }

    return {draw, getPosFromMap, properties, update, goUp, goLeft, goDown, goRight, stop};
}

const player = getPlayer();
// /console.log(player.getPosFromMap());

animate();