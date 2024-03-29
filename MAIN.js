let map = []; //empty array
let DOWNWALK = [] //empty array
let UPWALK = [] //empty array
let LEFTWALK = [] //empty array
let RIGHTWALK = [] //empty array
let sparks = [] //empty array
let tileSize = 80; // size of tile
let killPoints = 0; // number of kills
let MENU = 0 // sets the menu as 0
let playerHP = 150 // hp of players
let enemyHP = 50 // hp of enemies
let pointsToWin = 0 //points to win the game(ultimatly need 3)
let imageFrame = 0 // used for frames in game func
let frameDelay = 8 // used for frames in game func
let frameCounter = 0 // used for frames in game func


function preload() {
    for (let i = 1; i <= 9; i++) { // all my movement images for player  can be put into a for loop because they all go from 1-9 and have same naming format
        DOWNWALK.push(loadImage("DOWN" + i + ".png"))
        UPWALK.push(loadImage("UP" + i + ".png"))
        LEFTWALK.push(loadImage("LEFT" + i + ".png"))
        RIGHTWALK.push(loadImage("RIGHT" + i + ".png"))
    }
    CHICKUP = loadImage("CHICKUP.png") // img for when chicken walks up
    CHICKDOWN = loadImage("CHICKDOWN.png") // img for when chicken walks DOWN
    CHICKLEFT = loadImage("CHICKLEFT.png") // img for when chicken walks LEFT
    CHICKRIGHT = loadImage("CHICKRIGHT.png") // img for when chicken walks RIGHT
    backgroundImg = loadImage("Runway 2024-01-17T04_24_45.jpg") // this is the background img
    bottomTile = loadImage("BOTTOM_TILE.png") // img for tile on the bottom row
    topTile = loadImage("UP_TILE.png") // img for top tile for top row
    sideTile = loadImage("RIGHT-LEFT_TILE.png") // img for tile  for left and right coloumns
    doorimg = loadImage("DOOR_TILE.png") //img for door
    backImg = loadImage("Back Button.png") // img for button to go back
    startImg = loadImage("button_start.png") //img for start button
    helpImg = loadImage("button_help.png") // img for help button
    manual = loadImage("Screenshot 2024-01-22 084555.png") //img for game manual page
    title = loadImage("button_chickungeon-a-summative-game.png") //img for title of game
    smoke = loadImage("TAxDHQ.png")
    backSound = loadSound("elevator-musicchosiccom_Zte9KN4R.mp3")
}


function setup() {
    backSound.loop()
    createCanvas(windowWidth, windowHeight);
    cols = floor(width / tileSize); //divides width of screen by the size of tiles and rounds it// therefore getting an amount of how many tiles could fit
    rows = floor(height / tileSize); //divides heigght of screen by the size of tiles and rounds it// therefore getting an amount of how many tiles could fit
    generateMap(); // calls generate map function
    player = new Player(floor(cols / 2) * tileSize, floor(rows / 2) * tileSize, playerHP); // makes a player
}


function draw() {
    if (MENU == 0) { // this is the orignal menu
        background(backgroundImg) // puts the bacjground of the img
        image(title, width / 3, height / 90, width / 2.1, width / 23); // this is the image of the title: chuckengeon: a summative game
        image(startImg, width / 2, height / 4, 200, 75); //  start img
        image(helpImg, width / 2, height / 1.5, 200, 75); // help img
    }

    if (MENU == 1) { // if menu = 1(happens by pressing the start button), then start the game function
        GAME()
    } else if (MENU == 2) { // if menu = 2(happens by pressing the help button), then start the help function
        HELP()
    } else if (MENU == 3) { // if menu = 3(happens by player losing all hp), then start the lose function
        LOST()
        pointsToWin = 0 // resets
    } else if (MENU == 4) { // if menu = 4(happens by player going thru the 3 rooms), then start the win function
        WIN()
        pointsToWin = 0 // resets
    }
}