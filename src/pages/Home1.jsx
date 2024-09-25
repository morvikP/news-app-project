import categoryIcon1 from"../assets/images/image 2.png";

function PostCard() {
    return(
        <section class="main__hot">
            <div class="hot__line">
                <h1 class="hot__title">ГЛАВНОЕ</h1>
                <div class="hot__line1"></div>
                <div class="hot__line2"></div>
            </div>
            <div class="hot__down">
                <div class="down__big">
                    <img src={categoryIcon1} alt="" class="hot__img"/>
                    <p class="hot__maintxt">Всеобщее декларирование: кто будет сдавать декларации о доходах и имуществе в 2023 году</p>
                </div>
                <div class="down__small">
                    <div class="small__news1">
                        <div class="news1__tablet1">
                            <p class="tablet1__tag">КРИМИНАЛ</p>
                            <p class="tablet1__data">21.11.2022, 19:12</p>
                        </div>
                        <p class="news1__txt">В Таразе неизвестные "заминировали" два корпуса колледжа</p>
                    </div>
                    <div class="down__line3"></div>
                    <div class="small__news2">
                        <div class="news2__tablet2">
                            <p class="tablet2__tag">ФИНАНСЫ</p>
                            <p class="tablet2__data">21.11.2022, 17:08</p>
                        </div>
                        <p class="news2__txt">Размеры некоторых соцвыплат повысят в Казахстане</p>
                    </div>
                    <div class="down__line4"></div>
                    <div class="small__news3">
                        <div class="news3__tablet3">
                            <p class="tablet3__tag">КРИМИНАЛ</p>
                            <p class="tablet3__data">21.11.2022, 15:29
                            </p>
                        </div>
                        <p class="news3__txt">Создательница финпирамиды в Караганде обманула вкладчиков на 180 миллионов тенге</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PostCard;