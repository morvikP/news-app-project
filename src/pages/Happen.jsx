import photo from '../assets/images/happen.png';

function Happen(){
    return(
        <div class="container">
            <section class="main__hot">
                <div class="hot__line">
                    <h1 class="hot__title">Жители Экибастуза остались без тепла</h1>
                </div>
                <div class="hot__down">
                    <img class="down__photo" src={photo} alt="" />
                </div>
            </section>
            <section class="main__news">
                <div class="news__main">
                    <p class="main__txt">Как говорится в сообщении компании, 27 ноября в 01.20 произошла остановка котлоагрегата №11. В 01.30 остановились котлоагрегаты №13, 14, 15 из-за большого расхода сетевой воды.
                        "На данный момент производится запуск котлоагрегатов №8 и №14. Организованы ремонтные бригады. В ближайшее время параметры будут восстановлены. Со стороны администрации города, области, АО "Павлодарэнерго" оказывается вся необходимая поддержка для стабилизации ситуации", - говорится в сообщении.
                        В коммунальной службе попросили жителей города не сбрасывать сетевую воду, чтобы не усугублять ситуацию. "Сливать сетевую воду из системы нужно только в том случае, если трубы полностью остыли и дом отключен от общей системы теплоснабжения", - пояснили в "Экибастузтеплоэнерго".</p>
                </div>
            </section>
        </div>
    );
}

export default Happen;