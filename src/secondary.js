class Game {
    constructor(pieces, countTurns) {
        this.pieces = pieces;
        this.possiblePositionX = 0;
        this.possiblePositionY = [];
        this.earlierTeam = '';
        this.countTurns = countTurns;
    }

    checkTeamturn(){
        if(this.countTurns === 0){
            currentTeam = 'team-1';
        } else if(this.earlierTeam === 'team-1'){
            currentTeam = 'team-2';
        } else{
            currentTeam = 'team-1'; 
        }
    }

    checkPossibilities(team, j, i){
        if(team==='team-1'){
            this.possiblePositions = [i+1]
        }
    }


}

