class Game {
    constructor(pieces) {
        this.pieces = pieces;
        this.possiblePositionX = 0;
        this.possiblePositionY = [];
        this.earlierTeam = '';
        this.countTurns = 0;
    }

    checkTeamturn(){
        if(this.countTurns%2=== 0){
            currentTeam = 'team-1';
        } else{
            currentTeam = 'team-2'; 
        }
    }




}

