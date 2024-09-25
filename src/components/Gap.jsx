
function Gap({gap}){
    return(
        <div>
                <div class="down__big">
                    <img src={gap.photo} alt="" class="hot__img" />
                    <p class="hot__maintxt">{gap.txt}</p>
                </div>
        </div>
    );
}

export default Gap;