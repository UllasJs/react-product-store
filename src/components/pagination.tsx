import { useMemo } from "react";

interface PaginationProps {
    page: number;
    setPage: (page: number) => void;
    paginate: number;
    setPaginate: (paginate: number) => void;
    totalPage: number;
}
const Pagination = ({ page, setPage, totalPage, setPaginate, paginate }: PaginationProps) => {

    const paginationSelect = [5, 10, 15, 20];

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPaginate(Number(e.target.value));
        setPage(1);
    };

    const pages = useMemo(() => {
        const pages = [];
        for (let i = 1; i <= totalPage; i++) {
            pages.push(i);
        }
        return pages
    }, [totalPage]);

    return (
        <div className="pagination-container">
            <div className="left-side">
                <select className="pagination-select" value={paginate} onChange={onChange}>
                    {paginationSelect.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <div className="pagination-info">
                    showing {page} of {totalPage}
                </div>
            </div>
            <div className="right-side">
                <button className="pagination-btn" onClick={() => setPage(page - 1)} disabled={page === 1}>
                    <i className="icon-left"></i>
                </button>
                {pages.map((item) => (
                    <button key={item} className={`pagination-btn ${page === item ? 'active' : ''}`} onClick={() => setPage(item)}>
                        {item}
                    </button>
                ))}
                <button className="pagination-btn" onClick={() => setPage(page + 1)} disabled={page === totalPage}>
                    <i className="icon-right"></i>
                </button>
            </div>
        </div>
    );
};

export default Pagination;