function generateMap() {
    map = []; // empty array for storing the cols x rows of canvas
    enemies = [] // empty array for storing all enemies
    validPos = [] // empty array for all valid positions enemy can be
    for (let i = 0; i < cols; i++) {
        map[i] = [];
        for (let j = 0; j < rows; j++) {
            map[i][j] = 0; // all squares of map are labeled as 0 EXCEPT....
            if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) { // if the squares are edges
                map[i][j] = 1; //then they are made to be labeled as 1
            }
        }
    }

    let side = floor(random(4)); // random number to pick which side of the edge of the map the door is going to be in
    let midX = floor(cols / 2) * tileSize // used to represent the players starting position
    let midY = floor(rows / 2) * tileSize // used to represent the players starting position
    let square;

    if (side == 0) { // if the random number is 0,
        square = floor(random(1, cols - 1)); // pick a random position from the top and label it as square
        map[square][0] = 0; // that position on the map will be labeled as 0
    } else if (side == 1) {
        square = floor(random(1, rows - 1)); // pick a random position from the right and label it as square
        map[cols - 1][square] = 0; // that position on the map will be labeled as 0
    } else if (side == 2) {
        square = floor(random(1, cols - 1)); // pick a random position from the bottom and label it as square
        map[square][rows - 1] = 0; // that position on the map will be labeled as 0
    } else if (side == 3) {
        square = floor(random(1, rows - 1)); // pick a random position from the left and label it as square
        map[0][square] = 0; // that position on the map will be labeled as 0
    }

    for (let i = 1; i < cols - 1; i++) { // this is a nested for loop that handles all inner squares
        for (let j = 1; j < rows - 1; j++) {
            if (!(i * tileSize == midX && j * tileSize == midY)) { // no wall/enemy will be placed on the middle square(where player always spawns)
                if (random(0, 1) > 0.8 && !(side == 0 && j == 1) && !(side == 1 && i == cols - 2) && !(side == 3 && i == 1) && !(side == 2 && j == rows - 2) && !(i * tileSize == midX && j * tileSize == midY)) {
                    //20% chance, also gets the col/row next to where the doors and make that whole thing empty
                    map[i][j] = 2 // labels those boxes as 2
                } else {
                    validPos.push({i,j}) // valid positions for the enemy to be in(i represent x, j represent y) that are not inner walls
                }
            }
        }
    }

    for (let m = 0; m <= 5; m++) { // used to irrate though 6 enemies
        let randIndex = floor(random(validPos.length)) // gets a random (index) from the array so enemies are spread out
        let spawnPos = validPos[randIndex] // this is the actual position of what index is on the array
        validPos.splice(randIndex, 1) // splices that pos so no 2 enemies can be in same pos
        let eX = spawnPos.i * tileSize // uses i of validpos as x
        let eY = spawnPos.j * tileSize // uses j of validpos as y
        enemies.push(new Enemy(eX, eY, enemyHP)) // makes enemy from enemy class
    }
}