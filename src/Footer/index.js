import { setPage } from '../services/stateService';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux'




function PaginationComponent() {

    const dispatch = useDispatch();
    const page = useSelector((state) => state.searchParams.page);
    const totalResults = useSelector((state) => state.totalResults);
    const pageSize = useSelector((state) => state.searchParams.pageSize);

    const totalPages = Math.ceil(totalResults/pageSize);

    return (
        <Pagination className="mt-4 justify-content-center">
            <Pagination.Prev onClick={() => dispatch(setPage(page - 1))} disabled={page <= 1} />
            <Pagination.Item disabled>{page} / {totalPages} </Pagination.Item>
            <Pagination.Next onClick={() => dispatch(setPage(page + 1))} disabled={page >= totalPages} />
        </Pagination>
    );
}

export default PaginationComponent;