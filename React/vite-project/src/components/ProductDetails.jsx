import { useParams } from "react-router";

const ProductDetails = () => {
    const { id } = useParams();
    return (

        <div>Product ID: {id}</div>
    )
}
export default ProductDetails;