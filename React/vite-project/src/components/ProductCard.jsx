import { Link } from "react-router";

const ProductCard = (props) => {
    const { name, price, image, id } = props;
    return (
        <Link to={`/product/${id}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={image} alt={name} className="w-full h-70 object-fit" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600 font-bold">₹{price.toFixed(2)}</p>
                </div>
            </div>
        </Link>
    );
}
export default ProductCard;