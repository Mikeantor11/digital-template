window.onload = function () {
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

    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});

    function preload() {
        game.load.image('platform', 'assets/Art/platform.png');
        game.load.spritesheet('police', 'assets/Art/policeOfficer.png', 16, 31);
    }

    var police;
    var plat1;
    var plat2;
    var plat3;
    var cursors;
    var counter = 0;

    function create() {
        
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 200;
        
        police = game.add.sprite(100,500, 'police');
        plat1 = game.add.sprite(75,550, 'platform');
        plat2 = game.add.sprite(200,450, 'platform');
        plat3 = game.add.sprite(500,400, 'platform');
        
        game.physics.arcade.enableBody(police);
        game.physics.arcade.enable(plat1);
        game.physics.arcade.enable(plat2);
        game.physics.arcade.enable(plat3);
        
        /*
        game.physics.enable(police, Phaser.Physics.ARCADE);
        game.physics.enable(plat1, Phaser.Physics.ARCADE);
        game.physics.enable(plat2, Phaser.Physics.ARCADE);
        game.physics.enable(plat3, Phaser.Physics.ARCADE);
        police.body.collideWorldBounds = true;
        */
        
        police.animations.add('walkRight', [0,1,2]);
        police.animations.add('walkLeft', [3,4,5]);
        police.body.bounce.y = 0.2;
        police.body.setSize(20,35);
        plat1.body.moves = false;
        plat2.body.moves = false;
        plat3.body.moves = false;
        
        police.body.collideWorldBounds = true;
        plat1.body.collidesWorldBounds = true;
        plat2.body.collidesWorldBounds = true;
        plat3.body.collideesWorldBounds = true;
        
        plat1.body.allowGravity = false;
        plat2.body.allowGravity = false;
        plat3.body.allowGravity = false;
        
        cursors = game.input.keyboard.createCursorKeys();
        
        police.body.collides([plat1, plat2, plat3], collision, this);
    }

    function collision(){
        counter++;
    }

    function update() {
        if(cursors.left.isDown){
            police.animations.play('walkLeft', 10);
            police.body.velocity.x = -300;
        }
        else if(cursors.right.isDown){
            police.animations.play('walkRight', 10);
            police.body.velocity.x = 300;
        }
        else{
            police.body.velocity.x = 0;
        }
        
        if(cursors.up.isDown && counter > 0){
            police.body.velocity.y = -200;
            counter = 0;
        }
        
        police.body.mass = 1;
        
        game.physics.arcade.collide(police, [plat1, plat2, plat3]);
    }
};
