import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Card from "./card";
import Pagination from "./pagination";
import { useMemo, useState } from "react";

const CardContainer = () => {
    const { products, loading } = useSelector((state: RootState) => state.product);
    const [page, setPage] = useState<number>(1);
    const [paginate, setPaginate] = useState<number>(5);

    const paginatedProducts = useMemo(() => {
        const startIndex = (page - 1) * paginate;
        const endIndex = startIndex + paginate;
        return products.slice(startIndex, endIndex);
    }, [products, page, paginate]);

    const totalPage = useMemo(() => Math.ceil(products.length / paginate), [products, paginate]);

    if (!loading && !products.length) {
        return <div className="no-product-found">
            <h1>No products found</h1>
        </div>
    }

    return (
        <div>
            <div className="card-container">
                {loading ? (
                    Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="card-loader">
                            <div className="loader"></div>
                        </div>
                    ))
                ) : (
                    paginatedProducts.map((product) => (
                        <Card key={product.id} {...product} />
                    ))
                )}
            </div>
            <Pagination page={page} paginate={paginate} setPaginate={setPaginate} setPage={setPage} totalPage={totalPage} />
        </div>
    )
}

export default CardContainer;