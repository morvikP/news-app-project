function GameCard({Game}){
    return(
        <div class="add__game">
                        <img src={Game.photo} alt="" class="game__img" />
                        <p class="game__txt">{Game.txt}</p>
        </div>
    );
}

export default GameCard;