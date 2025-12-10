import ProductCard from "./ProductCard";
import Header from "./Header";

const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 750.00,
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTBJp13MePZrLnoNFeSiPzr5lwxmk1UcC-qlw-Of0HxgWbdB1scUlMBquFtbX42Nr5EP3nu1deOufGN7Vf3S8dKHxVz8Y4WQmkjmqaf3DwoK-jGH9h6p891wQ"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 1200.00,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTtbOkloOtpKJ7QILrdq1y1ZTmXgsfiurc5ocAVzJVz2oS4ltdn_o9O1mbKB1EDJNmy0QE8w7S5dT2OoYFEAStVbF3wd7zfIq9KKnjVO01UM_GRAc74ap0XvA"
        },
        {
            id: 3,
            name: "Laptop Stand",
            price: 450.00,
            image: "https://rukminim2.flixcart.com/image/832/832/xif0q/laptop-stand/l/z/q/500-stainless-steel-laptop-stand-adjustable-and-foldable-silver-original-imagqgeqhsvmqwqe.jpeg?q=70&crop=false"
        },

    ];

    return (
        <>
            <Header />
            <div className="w-[800px] mx-auto mt-10 grid grid-cols-3 gap-4">
                <h1 className="text-3xl col-span-3 mb-4">Product List</h1>
                {products.map((product) => {
                    return (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default ProductList;