class Button{
    constructor(){

       this.input = createInput("Please Enter Your Name");

       this.button = createButton('Play');

       this.greeting = createElement('h2');

       this.title = createElement('h2');

       this.reset = createButton('Reset');

       this.instructions = createElement('h4');
       this.instructions1 = createElement('h4');
       this.instructions2 = createElement('h4');
       this.instructions3 = createElement('h4');
       this.instructions4 = createElement('h4');
       this.instructions5 = createElement('h4');
       this.instructions6 = createElement('h4');
       this.instructions7 = createElement('h4');

      // this.instructionsOp = createElement('h4');

    }

    hide() {

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();

        this.instructions.hide();
        this.instructions1.hide();
        this.instructions2.hide();
        this.instructions3.hide();
        this.instructions4.hide();
        this.instructions5.hide();
        this.instructions6.hide();
        this.instructions7.hide();

        //this.instructionsOp.hide();

    }

    display() {

        this.title.html("The Ultimate Balloon Buster!");
        this.title.position(500, 100);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');

        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'yellow');

        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'skyblue');

        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.instructions.html("Hello player! welcome to the balloon buster! here are the instruction:");
        this.instructions.position(900, 660);

        this.instructions1.html("1. The value you will get will be there in the balloon.");
        this.instructions1.position(900, 660);
        
        this.instructions2.html("2. If you touch the black balloon you will lose 10 points.");
        this.instructions2.position(900, 660);
        
        this.instructions3.html("3. You have to drag the arrow and release it by pressing the mouse and releasing it.");
        this.instructions3.position(900, 660);
        
        this.instructions4.html("4. Then you have to aim in souch a way that it hits the balloon. this will dystroy the balloon and give you score.")
        this.instructions4.position(900, 660);
        
        this.instructions5.html("5. You can reattach the arrow by cliking the space bar. ");
        this.instructions5.position(900, 660);
        
        this.instructions6.html("6. The first one to get 200 points will win the game!");
        this.instructions6.position(900, 660);
        
        this.instructions7.html("7. It is a two player game..");
        this.instructions7.position(900, 660);
        
        //this.instructionsOp.html("7. you can also create a bot if you like!")


        this.button.mousePressed(() => {


            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello And Welcome !" + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');

        });


        if(gameState===2){

            this.reset.mousePressed(() => {

            player.updateCount(0);
            game.update(0);

        });

    }
  }
}