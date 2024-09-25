function MemeCard({meme}){
    return(
        <div class="add__meme">
                        <img src={meme.photo} alt="" class="meme__img" />
                        <p class="meme__txt">{meme.txt}</p>
        </div>
    );
}

export default MemeCard;