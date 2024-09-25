function CarCard({car}){
    return(
        <div class="add__car">
            <img src={car.photo} alt="" class="car__img" />
            <p class="car__txt">{car.txt}</p>
        </div>
    );
}

export default CarCard;