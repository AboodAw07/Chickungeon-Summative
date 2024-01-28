function keyPressed() { // PAUSING GAME!!!
    if (MENU == 1) { //if player at game 
        if (keyCode == 32) { // if player presses space
            MENU = 0 // pause game
        }
    }
}