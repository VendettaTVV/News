import { setPage } from '../services/stateService';
import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux'




function PaginationComponent() {

    const dispatch = useDispatch();
    const page = useSelector((state) => state.searchParams.page);

    return (
        <Pagination className="mt-4 justify-content-center">
            <Pagination.Prev onClick={() => dispatch(setPage(page - 1))} disabled={page <= 1} />
            <Pagination.Item disabled>{page} / 10</Pagination.Item>
            <Pagination.Next onClick={() => dispatch(setPage(page + 1))} disabled={page >= 10} />
        </Pagination>
    );
}

export default PaginationComponent;