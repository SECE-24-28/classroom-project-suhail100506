import Pagination from "./Pagination";

const Footer = (props) => {
    const { currentPage, setCurrentPage } = props;
    return (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    )

}
export default Footer;