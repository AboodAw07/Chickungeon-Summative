class Door { // door class

    constructor(_img, _x, _y, _size) {
        this.x = _x // x of door: randomly generated around the outside walls
        this.y = _y // y of door: randomly generated around the outside walls
        this.size = tileSize // the size of the door is as big as a normal wall
        this.img = _img // img of door
    }
    display() {
        image(this.img, this.x, this.y, this.size, this.size) // image of door
    }
    checkDist() {
        let distance = dist(player.x, player.y, this.x, this.y) // distance from player and door
        if (distance <= tileSize * 2) { // if pplayer is close enough to door:
            return true // then let function return true
        }
    }
}