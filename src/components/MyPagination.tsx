import { FC } from "react"

interface PaginationProps {
  total: number,
  current: number,
  onChangePage: CallableFunction
}

const MyPagination: FC<PaginationProps> = ({ total, current, onChangePage }) => {

  const length = Math.ceil(total / Math.max(10, 1));
  let left = Math.max(current - 2, 1);
  const right = Math.min(left + 2 * 2, length);
  left = Math.max(right - 2 * 2, 1);


  let items = [];
  if (current > 1) {
    items.push(
      <button 
        key="prev" 
        className='pagination-btn' 
        onClick={() => onChangePage(current - 1)}
      >
        &laquo;
      </button>
    );
  }
  if (current > 3) {
    items.push(
      <button 
        key={1} 
        className='pagination-btn' 
        onClick={() => onChangePage(1)}
      >
        1
      </button>
    )
    }
  if (left > 2) items.push(null);
  for (let page = left; page <= right; page += 1) {
    items.push(
      <button 
        key={page} 
        className={page === current ? 'pagination-btn pagination-btn_active' : 'pagination-btn'} 
        onClick={() => onChangePage(page)}
      >
        {page}
      </button>
    );
  }
  if (right < length - 1) items.push(null);
  if (current < length - 2) {
    items.push(
      <button 
        key={length} 
        className='pagination-btn' 
        onClick={() => onChangePage(length)}
      >
        {length}
      </button>
    );
  }
  if (current < length) {
    items.push(
      <button 
        key="next" 
        className='pagination-btn' 
        onClick={() => onChangePage(current + 1)}
      >
        &raquo;
      </button>
    );
  }

  return (
    <section className="section">
      <ul className='pagination'>
        {items.length > 1 && items.map((item, index) => (
          <li
            key={index}
          >
            {item
                ? item
                : 
                <button className='pagination-btn'  type="button">
                    ...
                </button>
            }
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MyPagination
