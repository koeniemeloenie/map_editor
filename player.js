const getPlayer = () => {
    const acc = {x: 0, y: 0};
    const vel = {x: 0, y: 0};
    const fill = {r: 0, g:200 , b:70};
    let moving = false;

    const draw = () => {
        context.beginPath();
        context.fillStyle = `rgb(${fill.r}, ${fill.g}, ${fill.b})`;
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
    //
    }
    
    


    return {draw, getPosFromMap, moving};
}

const player = getPlayer();
// /console.log(player.getPosFromMap());

animate();