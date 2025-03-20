import { useNavigate } from "react-router";

const Card = ({ title, price, image, rating: { count, rate }, id }: ProductType) => {
    const navigate = useNavigate();

    const stars = Array.from({ length: 5 }, (_, index) => {
        let starClass = 'icon-star-outline';

        if (index < Math.floor(rate)) {
            starClass = 'icon-star-filled';
        } else if (index < rate) {
            starClass = 'icon-star-half';
        }

        return <i key={index} className={starClass}></i>;
    });


    return (
        <div className="card">
            <div>
                <div className="card-image-wrapper">
                    <img className="card-image" src={image} alt={image} />
                </div>
                <div className="card-title">{title}</div>
                <div className="card-price">${Math.floor(price).toFixed(2)}</div>
                <div className="card-rating">
                    <span className="card-rating-rate">{stars}</span>
                    <span className="card-rating-count">({count})</span>
                </div>
            </div>
            <div className="card-button-wrapper">
                <button onClick={() => navigate(`/product-details/${id}`)} className="card-button">
                    details
                </button>
            </div>
        </div>
    );
}

export default Card;