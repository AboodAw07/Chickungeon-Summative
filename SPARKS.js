class Spark { // spark class

    constructor(_smoke, _x, _y) {
        this.width = random(20, 30) //randomly generated size for spark
        this.angle = random(0, TWO_PI) // gets an angle from 0  to 2pi in rads(360 degrees)
        this.mx = cos(this.angle) * 5; // cos(random angle) gives a horizontal point of a circle, multiplied to make the explosion bigger
        this.my = sin(this.angle) * 5; // sin(random angle) gives a horizontal point of a circle,  multiplied to make the explosion bigger
        this.x = _x + tileSize / 2; // x of spark is at the middle of the tile where the enemy is (rather than top left) 
        this.y = _y + tileSize / 2; // y of spark is at the middle of the tile where the enemy is (rather than top left
        this.img = _smoke //img of smoke
    }

    move() {
        this.x += this.mx; // adding the angle from mx to x of spark
        this.y += this.my; // adding the angle from my to y of spark
    }

    display() {
        image(this.img, this.x, this.y, this.width, this.width); // draws a smoke image to represent explosion
    }
}