window.onload = function() {
    // You might want to start with a template that uses GameStates:
    //     https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    
    // You can copy-and-paste the code from any of the examples at http://examples.phaser.io here.
    // You will need to change the fourth parameter to "new Phaser.Game()" from
    // 'phaser-example' to 'game', which is the id of the HTML element where we
    // want the game to go.
    // The assets (and code) can be found at: https://github.com/photonstorm/phaser/tree/master/examples/assets
    // You will need to change the paths you pass to "game.load.image()" or any other
    // loading functions to reflect where you are putting the assets.
    // All loading functions will typically all be found inside "preload()".
    
    "use strict";
    
    var game = new Phaser.Game( 600, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() {
        game.load.spritesheet('heartButton', 'assets/Art/heartSpritesheet.png');
        game.load.image('cursorButton', 'assets/Art/cursorButton.png');
        game.load.image('cardButton', 'assets/Art/cardButton.png');
        game.load.image('chocolateButton', 'assets/Art/chocoButton.png');
        game.load.image('roseButton', 'assets/Art/roseButton.png');
    }

    //Global Variables
    var heartButton;
    var heartTotal = 0;
    
    function create() {
        heartButton = game.add.button(0,0, 'heartButton', heartClick, this, 1, 0, 2);
    }
   
   function heartClick(){
       heartTotal++;
   }
   
    function update() {
    }

    function render() {
    }
};
