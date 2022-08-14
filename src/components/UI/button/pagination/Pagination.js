import { usePagination } from "../../../../hooks/usePagination";


const Pagination =({totalPage,page,changePage})=>{

    const pagesArray=usePagination(totalPage);
    return (
        <div className="page__wraper">
        {pagesArray.map(p=>
          <span 
            key={p}
            onClick={()=>changePage(p)}
            className={page===p ? 'page page__current':'page'}>
            {p}
          </span>
        )}
      </div>
    )
}
export default Pagination;