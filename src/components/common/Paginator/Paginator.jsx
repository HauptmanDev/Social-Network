import React, {useState} from 'react';
import s from './Paginator.module.css';
import cn from 'classnames'

let Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    const clickLeft = () => {
        setPortionNumber(portionNumber - 1)
    };
    const clickRight = () => {
        setPortionNumber(portionNumber + 1)
    };
    return <div className={s.modulePaginator}>
        {portionNumber > 1 && <button onClick={clickLeft}>L</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={cn({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber && <button onClick={clickRight}>R</button>}
    </div>
};
export default Paginator;