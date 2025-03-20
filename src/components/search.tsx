import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../state/store";
import { searchFilter } from "../state/slice/product";
import { useSelector } from "react-redux";

const Search = () => {
    const { search, category } = useSelector((state: RootState) => state.product);
    const [text, setText] = useState<string>(search);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        setText(search);
    }, [search]);

    const handleSearch = () => {
        if (text.trim() !== search) {
            dispatch(searchFilter({ search: text.trim(), category }));
        }
    };

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;