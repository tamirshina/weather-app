
import ReactPaginate from 'react-paginate';
const PaginationComp = ({ postPerPage, totalPosts, currentPage, pageCount, paginationHandler }) => {

    const pageNumber = []

    for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
        pageNumber.push(index)
    }
    return (
        <nav>
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}

                initialPage={currentPage - 1}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={paginationHandler}
            />
        </nav>
    )
}
export default PaginationComp;