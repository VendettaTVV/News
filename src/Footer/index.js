
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';



function PaginationComponent() {

    const [page, setPage] = useState(1);


    return (
        <Pagination className='mt-4 justify-content-center'>
            <Pagination.Prev onClick={() => setPage(page - 1)} disabled={page === 1} />
            <Pagination.Item disabled>{page} / 10</Pagination.Item>
            <Pagination.Next onClick={() => setPage(page + 1)} disabled={page === 10}  />
        </Pagination>
    );
}

export default PaginationComponent;