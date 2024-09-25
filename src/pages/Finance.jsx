import photo from '../assets/images/finance.png';

function Finance(){
    return(
        <div class="container">
            <section class="main__hot">
                <div class="hot__line">
                    <h1 class="hot__title">Казахстанцы купили 125 кг золотых слитков в октябре</h1>
                </div>
                <div class="hot__down">
                    <img class="down__photo" src={photo} alt="" />
                </div>
            </section>
            <section class="main__news">
                <div class="news__main">
                    <p class="main__txt">АСТАНА, 25 ноя — Sputnik. Казахстанцы в октябре этого года приобрели 3 130 мерных слитков общим весом 125,66 кг.
                        Программа по продаже и выкупу мерных слитков аффинированного золота для населения была запущена Национальным банком в 2017 году. Всего с начала ее действия продано 108 075 золотых слитков общим весом 3,67 тонны, сообщает Нацбанк.Золотые слитки представлены в пяти разновидностях: 5, 10, 20, 50 и 100 г. Наибольшей популярностью среди покупателей пользуется слиток весом 10 г. Его доля от общего объема продаж составляет 25% – 27 596 штук. Далее следуют 5-граммовые – 23 362 штуки (22%) и 20-граммовые – 22 555 штук (21%), 100-граммовые – 22 075 штук (20%), 50-граммовые – 12 487 штук (12%). В основном мерные слитки пользуются спросом в городах Алматы, Астана, Атырау и Караганда.</p>
                </div>
            </section>
        </div>
    );
}

export default Finance;