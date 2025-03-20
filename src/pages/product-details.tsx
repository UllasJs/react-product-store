import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const ProductDetails = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const params = useParams<{ id: string }>();
    const id = params.id;
    useEffect(() => {
        const getDetails = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data: ProductType = await response.json();
            setProduct(data);
            setLoading(false);
        }

        getDetails();
    }, []);

    const stars = Array.from({ length: 5 }, (_, index) => {
        let starClass = 'icon-star-outline';

        if (index < Math.floor(product?.rating.rate || 0)) {
            starClass = 'icon-star-filled';
        } else if (index < (product?.rating?.rate || 0)) {
            starClass = 'icon-star-half';
        }

        return <i key={index} className={starClass}></i>;
    });

    return (
        <div className="container">
            <div className="container-title">
                <h1>Product Details</h1>
            </div>
            {loading ? (
                <div className="product-details-loader"></div>
            ) : (
                <div className="product-container">
                    <div className="left-container">
                        <img src={product?.image} alt={product?.title} />
                    </div>
                    <div className="right-container">
                        <div className="product-details">
                            <h1 className="product-title">{product?.title}</h1>
                            <p className="product-description">{product?.description}</p>
                            <p className="product-price">Price: ${Math.floor(product?.price || 0).toFixed(2)}</p>

                            <div className="product-rating">
                                <p>{stars}</p>
                                <p>({product?.rating?.count})</p>
                            </div>
                        </div>
                        <button onClick={() => navigate('/')} className="product-go-back">GO BACK</button>
                    </div>
                </div>
            )
            }
        </div>
    );
}

export default ProductDetails;