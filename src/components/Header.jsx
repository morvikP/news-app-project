import categoryIcon1 from"../assets/images/logo.png";
import categoryIcon2 from"../assets/images/icon/User.svg";
import categoryIcon3 from"../assets/images/icon/Group.png";
import categoryIcon4 from"../assets/images/icon/Login.png";
import categoryIcon5 from"../assets/images/icon/Burger.svg";
import categoryIcon6 from"../assets/images/icon/Burger.svg";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header class="green">
            <div class="container body__header">
                <div class="header__logo">
                    <img src={categoryIcon1} alt="" />
                </div>
                <nav class="header__nav">
                    <ul class="nav__under">
                        <li class="under__list"><Link to={"/"} href="#" class="list__link">главные</Link></li>
                        <li class="under__list"><Link to={"/Happen"} href="#hapen" class="list__link">происшествия</Link></li>
                        <li class="under__list"><Link to={"/Politic"} href="#politic" class="list__link">политика</Link></li>
                        <li class="under__list"><Link to={"/Finance"} href="#money" class="list__link">финансы</Link></li>
                        <li class="under__list"><Link to={"/Crime"} href="#crime" class="list__link">криминал</Link></li>
                    </ul>
                </nav>
                <div class="header__icon">
                    <div class="icon__icon">
                        <img class="icon__user" src={categoryIcon2} alt="" />
                        <div class="header__login">
                            <h1 class="login__txt">ВОЙТИ ИЛИ СОЗДАТЬ АККАУНТ</h1>
                            <div class="login__pol">
                                <p class="pol__txt">Email</p>
                                <input type="text" class="pol__pas" />
                            </div>
                            <div class="login__con">
                                <p class="con__txt">Продолжить</p>
                            </div>
                        </div>
                    </div>
                    <div class="icon__icon2">
                        <img class="icon__search" src={categoryIcon3} alt="" />
                        <div class="icon2__search">
                            <div class="search__in">
                                <input type="text" placeholder="Поиск" />
                                <button class="in__btn">найти</button>
                            </div>
                        </div>
                    </div>
                    <div class="icon__icon3">
                        <img class="icon__burger" src={categoryIcon4} alt="" />
                        <div class="icon3__burger">
                            <div class="burger__in">
                                <h1 class="in__txt">Вы правда хотите выйти из аккаунта?</h1>
                                <div class="in__btn2">
                                    <button class="btn1">Да</button>
                                    <button class="btn2">Нет</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="icon__icon4">
                        <img class="icon__group" src={categoryIcon5} alt="" />
                        <div class="icon4__group">
                            <div class="icon4__txt1">
                                <p class="txt1__txt">Главное</p>
                            </div>
                            <div class="icon4__txt2">
                                <p class="txt2__txt">Происшествия</p>
                            </div>
                            <div class="icon4__txt3">
                                <p class="txt3__txt">Политика</p>
                            </div>
                            <div class="icon4__txt4">
                                <p class="txt4__txt">Финансы</p>
                            </div>
                            <div class="icon4__txt5">
                                <p class="txt5__txt">Криминал</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="burger">
                    <img class={categoryIcon6} src="images/icon/Burger.svg" alt=""  />
                </div>
            </div>
        </header>
    );
}

export default Header;