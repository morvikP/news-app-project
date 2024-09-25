import PostList from "../components/PostList";
import MainList from "../components/MainList";
import CinList from "../components/CinList";
import GameList from "../components/GameList";
import CarList from '../components/CarList';
import MemeList from '../components/MemeList';
import GapList from '../components/GapList';
import {Link} from "react-router-dom";

function Home(){
    return(
        <main>
        <section class="main__hot">
            <div class="hot__color">
                <div class="hot__line">
                    <Link to="/" class="hot__title">
                        ГЛАВНОЕ
                    </Link>
                    <div class="hot__line1"></div>
                    <div class="hot__line2"></div>
                </div>
                <div class="hot__down">
                <div class="down__big">
                    <GapList/>
                </div>
                    <MainList/>
                </div>
            </div>
        </section>
            <div class="news__main">
                <h1 class="main__txt">ЛЕНТА НОВОСТЕЙ</h1>
            </div>
            <div class="news__line">
                <div class="news__line1"></div>
                <div class="news__line2"></div>
            </div>
            <div class="news__block">
            <PostList />
            <div class="news__line3"></div> 
                <div class= "news__add">
                    <CinList />
                    <div class="add__line"></div>
                    <GameList />
                    <div class="add__line"></div>
                    <CarList />
                    <div class="add__line"></div>
                    <MemeList />
                </div>
            </div>
            </main>
    );
}

export default Home;