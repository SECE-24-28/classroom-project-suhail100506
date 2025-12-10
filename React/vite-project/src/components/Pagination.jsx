import { useContext } from 'react';
import GlobalContext from '../contexts/GlobalContext';

const Pagination = () => {
    const { currentPage, setCurrentPage } = useContext(GlobalContext);
    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
        localStorage.setItem('page', currentPage - 1);
    }
    const handleNext = () => {
        setCurrentPage(currentPage + 1);
        localStorage.setItem('page', currentPage + 1);
    }

    return (
        <div className="w-[300px] mx-auto bg-yellow-50 m-4 p-4 rounded-md flex justify-center gap-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlePrevious}>{"<"}</button>
            <div className="text-xl bg-yellow-200 rounded-md px-4 py-2">{currentPage}</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNext}>{">"}</button>
        </div>
    )
}
export default Pagination;