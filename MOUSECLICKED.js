function mouseClicked() { // this code is almost all to change between menus because i didnt want to use buttons and instead i used imgs

    if (MENU == 0) { // this is the starting menu
        if ((mouseX < width / 2 + 200 && mouseX > width / 2) && (mouseY < height / 4 + 75 && mouseY > height / 4)) { // this represent start button
            MENU = 1 // initiates game 
        } else if ((mouseX < width / 2 + 200 && mouseX > width / 2) && (mouseY < height / 1.5 + 75 && mouseY > height / 1.5)) { // this represent help button
            MENU = 2 // inities help manual
        }
    } else if (MENU == 2) { //when player is in the help menu....
        if ((mouseX < width / 9 + 100 && mouseX > width / 9) && (mouseY < height / 8 + 100 && mouseY > height / 8)) { // this represents a back button to go  back
            MENU = 0 // go to starting menu
        }
    } else if (MENU == 1) { // if at starting menu
        for (let i = 0; i < enemies.length; i++) { //goes thru enemies
            let distance = dist(player.x, player.y, enemies[i].x, enemies[i].y); // distance from enemy to player
            if (distance < tileSize * 1.5) { // if player is close enough + pressed mouse
                enemies[i].EnemyHit(10) // enemies recieves 10 dmg 
            }
        }
    }

    if (MENU == 3) { // losing menu
        if ((mouseX < width / 9 + 100 && mouseX > width / 9) && (mouseY < height / 8 + 100 && mouseY > height / 8)) { // represent back button
            MENU = 0 // starting menu
        }
    }
    if (MENU == 4) { // win menu
        if ((mouseX < width / 9 + 100 && mouseX > width / 9) && (mouseY < height / 8 + 100 && mouseY > height / 8)) { // represnt back button
            MENU = 0 // starting menu
        }
    }
}