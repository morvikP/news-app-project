function CinCard({cin}){
    return(
        <div class="add__cin">
            <img src={cin.photo} alt="" class="cin__img" />
            <p class="cin__main">{cin.title}</p>
            <p class="cin__txt">{cin.txt}</p>
        </div>
    );
}

export default CinCard;