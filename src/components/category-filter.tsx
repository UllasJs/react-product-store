import { useSelector } from "react-redux"
import { AppDispatch, RootState } from "../state/store";
import { useDispatch } from "react-redux";
import { searchFilter } from "../state/slice/product";

const FilterSelect = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { categories, search } = useSelector((state: RootState) => state.product);

    return (
        <select className="filter-select" onChange={(e) => dispatch(searchFilter({ search: search, category: e.target.value }))}>
            <option value="">All</option>
            {categories?.map((category) => (
                <option key={category.value} value={category.value}>{category.label}</option>
            ))}
        </select>
    )
}

export default FilterSelect