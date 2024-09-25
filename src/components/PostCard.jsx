import {Link} from "react-router-dom";

function PostCard({post}){
    return(
        <div>
        <div class="news__block">
            <div class="block__left">
                <img src={post.photo} alt="" class="block__img" />
            </div>
            <div class="block__right">
                <Link to={post.who} class="right__tag">{post.title}</Link>
                <p class="right__txt">{post.txt}</p>
                <div class="block__data">
                    <p class="data__time">{post.date}</p>
                </div>
            </div>
        </div>
        <div class= "block__line"></div>
        </div>
    );
}

export default PostCard;