class Player { // player class
    constructor(_x, _y, _playerHP) {
        this.x = _x; // starting x of player: middle of screen
        this.y = _y; // starting y of player: middle of screen
        this.size = tileSize / 1.5 // sizeof player is 2/3 of a normal tile
        this.hp = _playerHP // player hp
    }

    display(img) { // display gets image from game function(img dependant on direction of where player goes)
        image(img, this.x, this.y, this.size, this.size); // draws player
        textSize(16); // text size of hp
        fill(255) //makes text white
        textAlign(CENTER, CENTER); //centers text
        text("HP: " + this.hp, this.x + this.size / 2, this.y); // text of hp which lays on top of plyer
    }

    move(mx, my) { //mx and my are based on WASD / arrow keys
        //before going to this code, I had alot of trouble with using the normal x and y of the player(top left), because it incorrectly made player interact with the surroundigs, so i had to account for the bottom right as well
        let newX = this.x + (mx * 9); // mx changes the direction fo x based on how player moves using WASD/arrow keys * amplifier
        let newY = this.y + (my * 9); // my changes the direction fo x based on how player moves using WASD/arrow keys * amplifier

        let topLeftX = newX // x of top left player
        let topLeftY = newY // y of top left player
        let bottomRightX = newX + this.size // x of the bottom right of player
        let bottomRightY = newY + this.size // y of bottom right of player
        let gridTopLeftX = floor(topLeftX / tileSize) // calculates the position on the grid of players top left
        let gridTopLeftY = floor(topLeftY / tileSize) //calculates the position on the grid of players top left
        let gridBottomRightX = floor(bottomRightX / tileSize) //calculates the position on the grid of players bottom right
        let gridBottomRightY = floor(bottomRightY / tileSize) //calculates the position on the grid of players bottom right


        let move = true // automatically player can move(UNLESS otherwise falsefied by the below)
        for (let i = gridTopLeftX; i <= gridBottomRightX; i++) { // nest for loop that calculates the area between top left x,y and bottomr right x,y(therefore making up all the player)
            for (let j = gridTopLeftY; j <= gridBottomRightY; j++) {
                if (map[i][j] !== 0) { // if player is not on the normal ground tiles, then dont let him move
                    move = false
                }

                for (let m = 0; m < enemies.length; m++) { // for loop going through enemies
                    let e = enemies[m]; // the indivisual enemy the foor loop is on

                    if (i * tileSize < e.x + this.size && (i + 1) * tileSize > e.x && j * tileSize < e.y + this.size && (j + 1) * tileSize > e.y) {
                        //if player left edge touches right edge of enemy && right edge of player touches left edge of enemy && top edge of player touches bottom of enemy && bottom edge of player touches top of enemy.
                        move = false; //if they overlap with enemy, then dont let him move
                    }
                }
            }
        }

        if (move == true) { // if player move is true(and they are not in a wall or in an enemy...), then give him the new x and y so he can actually move
            this.x = newX;
            this.y = newY;
        }
    }


    PlayerHit(_dmg) { // recieves dmg from enemies which reduces hp
        this.hp -= _dmg

        if (this.hp <= 0) { //if all of player hp is done, return true so the game can be ended
            return true
        }
    }
}