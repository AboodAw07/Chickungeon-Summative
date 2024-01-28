class Enemy {  enemy class 

    constructor(_x, _y, _enemyHP) {
        this.x = _x;  x of enemy randomly generated
        this.y = _y; y of enemy randomly generated
        this.currentImage = CHICKDOWN  The current image of enemy is the downward chicken img
        this.hp = _enemyHP  enemy hp(50)
        this.timer = millis()  makes sure timer starts when sketch starts
        this.size = tileSize  1.5
    }


    display() {
        image(this.currentImage, this.x, this.y, this.size, this.size)  draws the image of enemy, size was adjusted so enemy is smaller than the normal tile. also keep in  mind the image of enemy DOES change based on direction later on
        fill(255); makes text white
        textSize(16);  text size for hp
        textAlign(CENTER, CENTER); centers text
        text(`HP ${this.hp}`, this.x + tileSize  3, this.y - 10);  text of hp which lays on top of enemy

    }


    update() {
        if (millis() - this.timer = 800) {  player moves every 800 milliseconds
            this.timer = millis();  resets timer for next move

            let distance = dist(this.x, this.y, player.x, player.y);  distance from player and enemy

            if (distance  tileSize  5) {  if enemy is within 5 tiles sqaures...
                this.chasePlayer(); initiates chase function
            } else {
                this.move();  else, just make enemy randomly move
            }
        }
    }


    move() {
        let dir = floor(random(0, 4))  creates a random number from 0-4(to represent up, down, left, & right)
        let dx = 0;
        let dy = 0;

        if (dir == 0) {  right direction
            dx = tileSize;  x is increased by a tile, therefore going to the right
            this.currentImage = CHICKRIGHT  switches image of enemy to that of it going right
        } else if (dir == 1) {
            dx = -tileSize;  x is increased by a tile, therefore going to the right
            this.currentImage = CHICKLEFT  switches image of enemy to that of it going left
        } else if (dir == 2) {
            dy = tileSize;  x is increased by a tile, therefore going to the right
            this.currentImage = CHICKDOWN  switches image of enemy to that of it going down
        } else if (dir == 3) {
            dy = -tileSize;  x is increased by a tile, therefore going to the right
            this.currentImage = CHICKUP  switches image of enemy to that of it going up
        }
        this.tryMove(dx, dy);  gets dx, dy, input and forwards it to tryMove function
    }

    chasePlayer() {  function used for chasing player
        let dx = player.x - this.x;  distance between player and enemy on the x axis
        let dy = player.y - this.y;  distance between player and enemy on the y axis

        if (abs(dx)  abs(dy)) {  simply sees, would it bring enemy closer to player if the enemy moved leftright...
            this.tryMove(check(dx)  tileSize, 0); if so move enemy either right or left from the output from check function
            if (check(dx) == 1) { if  dx is positive, which means player is to right of enemy
                this.currentImage = CHICKRIGHT  switches image of enemy to that of it going right
            } else if (check(dx) == -1) { if  dx is negative, which means player is to left of enemy
                this.currentImage = CHICKLEFT  switches image of enemy to that of it going left
            }
        } else if (abs(dy)  abs(dx)) {   sees, would it bring enemy closer to player if the enemy moved updown...
            this.tryMove(0, check(dy)  tileSize); if so move enemy either up or down from the output from checl function
            if (check(dy) == 1) { if  dy is positive, which means player is to down of enemy
                this.currentImage = CHICKDOWN  switches image of enemy to that of it going right
            } else if (check(dy) == -1) { if  dy is negative, which means player is to left of enemy
                this.currentImage = CHICKUP  switches image of enemy to that of it going right
            }
        }
    }

    tryMove(dx, dy) {
        let newX = this.x + dx;  predicts x new pos of enemy 
        let newY = this.y + dy;  predicts y new pos of enemy 
        let newGridX = floor(newX  tileSize);  predicts new x pos of enemy ON THE GRID
        let newGridY = floor(newY  tileSize);  predicts new y pos of enemy ON THE GRID

        if (map[newGridX][newGridY] == 0) {  makes sure enemy is on ground tiles
            if (newX  player.x + this.size && newX + this.size  player.x && newY  player.y + this.size && newY + this.size  player.y) {
                 if left enemy touches right of player, right of enemt touches left of player, up of enemt toches bottom of player, down of enemy touches up of player...
                player.PlayerHit(10)  gives player 10 dmg
                return true
            }

            let canMove = true;
            for (let i = 0; i  enemies.length; i++) {  irrates thru enemies
                let distance = dist(newX, newY, enemies[i].x, enemies[i].y);  distance between every enemy to the current enemy
                if (distance  this.size) {  if they are next to each other, then dont let them move so they dont intercept
                    canMove = false;
                }
            }

            if (canMove == true) { enemy can move
                this.x = newX;
                this.y = newY;
            }
        }
    }
	
    EnemyHit(_dmg) {
        this.hp -= _dmg  enemy hp getting decreased
    }
}