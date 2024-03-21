import { useState } from 'react';
import { Button, IconButton } from '@material-tailwind/react';
// import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export function DefaultPagination(props: { totalPages: number, currentPage: number, onPageChange: Function, visiblePages: number | 5 }) {
  const {totalPages, currentPage, onPageChange, visiblePages} = props;
  const [active, setActive] = useState(currentPage);

  const next = () => {
    if (active === totalPages) return;

    setActive(active + 1);
    onPageChange(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
    onPageChange(active - 1);
  };

  const getPageItems = () => {
    const pageItems = [];
    const startPage = Math.max(1, active - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageItems.push(
        <IconButton
          key={i}
          variant={active === i ? 'filled' : 'text'}
          className='text-sm'
          color="gray"
          onClick={() => handlePageClick(i)}
          placeholder=""
        >
          {i}
        </IconButton>
      );
    }

    return pageItems;
  };

  const handlePageClick = (page: number | any) => {
    setActive(page);
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <Button
        variant="text"
        className="flex items-center smMobile:gap-1 tablet:gap-2 text-sm"
        onClick={prev}
        disabled={active === 1}
        placeholder=""
      >
        {/* <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> */}
         Previous
      </Button>
      <div className="flex items-center gap-2">{getPageItems()}</div>
      <Button
        variant="text"
        className="flex items-center gap-2 text-sm"
        onClick={next}
        disabled={active === totalPages}
        placeholder=""
      >
        Next 
        {/* <ArrowRightIcon strokeWidth={2} className="h-4 w-4" /> */}
      </Button>
    </div>
  );
}
