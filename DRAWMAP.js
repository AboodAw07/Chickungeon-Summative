function drawmap() {
    for (let i = 0; i < cols; i++) { // irritates through all squares on grid
        for (let j = 0; j < rows; j++) {
            if (map[i][j] == 1) { //in the generate map func, 1 is all the side of grid
                if (i == 0 || i == cols - 1) { // for left & right
                    image(sideTile, i * tileSize, j * tileSize, tileSize, tileSize)
                } else if (j == 0) { // for top side
                    image(topTile, i * tileSize, j * tileSize, tileSize, tileSize)
                } else if (j == rows - 1) { //for bottom side
                    image(bottomTile, i * tileSize, j * tileSize, tileSize, tileSize)
                }
            } else {
                fill(100)
                rect(i * tileSize, j * tileSize, tileSize, tileSize); // these are just to show the inside squares
            }
            if (map[i][j] == 2) { // these r the inside squares
                image(topTile, i * tileSize, j * tileSize, tileSize, tileSize)
            }

            if (map[i][j] == 0 && (i == 0 || j == 0 || i == cols - 1 || j == rows - 1)) { // makes sure door is on the outer edge and that it qualifies for generate map
                x = i * tileSize; // i of door as an x(gotten i from generate map)
                y = j * tileSize; // j of door as a y(gotten j from generate map)
                door = new Door(doorimg, x, y) // makes door(USES A CLASS(IMPORTANT, because it helps get distance from that door to player))
                door.display() // displays door
            }
        }
    }
}