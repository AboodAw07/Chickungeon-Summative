function LOST() { // lost function
    background(200, 0, 0) // red background
    image(backImg, width / 9, height / 8, 100, 100); // img for back button
    textAlign(CENTER, CENTER) // makes text in center
    textSize(200) // makes text large
    text("YOU LOST!", width / 2, height / 4) // text says "YOU LOSR!" in mid of screen
    playerHP = 150 // resets hp if player choose to play another game
    player = new Player(floor(cols / 2) * tileSize, floor(rows / 2) * tileSize, playerHP); // resets position of player if player choose to play another game
}