class Player {

    constructor() {

        
        this.xPosition = 0;
        this.yPosition = 0;

        this.name = null;
        this.index = null;

        this.score =0;

    }

    getCount() {
        var playerCountRef = database.ref('playerCount');

        playerCountRef.on("value", (data) => {

            playerCount = data.val();
            
        })

    }

    updateCount(count) {

        database.ref('/').update({

            playerCount: count

        });

    }

    update() {

        var playerIndex = "players/player" + this.index;

        database.ref(playerIndex).set({

            name: this.name,

            x: this.xPosition,
            y: this.yPosition,

            score:this.score 

        });
    }

    static getPlayerInfo() {

        var playerInfoRef = database.ref('players');

        playerInfoRef.on("value", (data) => {

            allPlayers = data.val();

        })

    }

    
}
