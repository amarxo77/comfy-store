import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handelPageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            const prevPage = page - 1 < 1 ? pageCount : page - 1;
            handelPageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`btn btn-xs md:btn-md border-none join-item ${
              pageNumber === page && 'bg-base-300 border-base-300'
            }`}
            onClick={() => handelPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        <button
          className='btn btn-xs sm:btn-md join-item'
          onClick={() => {
            const nextPage = page + 1 > pageCount ? 1 : page + 1;
            handelPageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
