export const SeriesCard = ({data}) => {
    // destructuring props
    // const { id, img_url,name, rating, genre,discription,cast, watch_url} = props.data;
    const { id, img_url,name, rating, genre,discription,cast, watch_url} = data;
    const ratingClass = rating>=8.5 ? "super_hit" : "average";
    return (
        <li className="card">
            <div>
                <img src={img_url}
                    alt={name} width="40%" height="40%" />
            </div>
            <div className="card-content">
            <h2>Name:{name}</h2>
            <h3>Rating:<span className={`rating ${ratingClass}`}>{rating} </span></h3>
            <p>Cast: {cast}</p>
            <p className="text-red-100">Genre:{genre}</p>
            <a href={watch_url} target="_blank" >
                <button className="btn-box">Watch Now</button>
            </a>
            </div>
        </li>
    );
};
