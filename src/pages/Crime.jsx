import categoryIcon1 from "../assets/images/crime.png";

function Crime(){
    return(
        <div class="container">
            <section class="main__hot">
                <div class="hot__line">
                    <h1 class="hot__title">Схрон с огнестрельным оружием обнаружили в Талдыкоргане</h1>
                </div>
                <div class="hot__down">
                    <img class="down__photo" src={categoryIcon1} alt="" />
                </div>
            </section>
            <section class="main__news">
                <div class="news__main">
                    <p class="main__txt">ТАЛДЫКОРГАН, 27 окт – Sputnik. На окраине одного из дачных массивов Талдыкоргана полицейские региона совместно с оперативниками ДКНБ выявили крупный оружейный схрон.
                        По информации полиции, на месте изъяты карабин "Сайга", обрез комбинированного ружья "ИЖ-56", сигнальный револьвер и сигнальный пистолет, а также более 100 патронов различного калибра, 13 гильз, наручники и кобура.
                        "По факту начато уголовное расследование. Оружие направлено на экспертизу", - сообщили в пресс-службе департамента полиции Жетысуской области.</p>
                </div>
            </section>
        </div>
    );
}

export default Crime;