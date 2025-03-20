import { CardContainer, Search } from "../components";
import FilterSelect from "../components/category-filter";

const HomePage = () => {
    return (
        <div className="container">
            <div className="container-title">
                <h1>Product Listing</h1>
            </div>
            <div className="filter-cotainer">
                <Search />
                <FilterSelect />
            </div>
            <CardContainer />
        </div>  
    );
}

export default HomePage;