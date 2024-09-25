function MainCard({ main }) {
    const { title, date, txt } = main; // деструктуризация объекта main
    return (
        <div>
            <div className="small__news">
                <div className="news__tablet">
                    <p className="tablet__tag">{title}</p>
                    <p className="tablet__data">{date}</p>
                </div>
                <p className="news__txt">{txt}</p>
            </div>
            <div className="down__line3"></div>
        </div>
    );
}

export default MainCard;