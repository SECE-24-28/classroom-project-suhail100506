import { useEffect, useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("Inside useEffect");
    }, [count]);

    const increment = () => {
        console.log("Increment Clicked");
        setCount(count + 1);
    }
    const decrement = () => {
        console.log("Decrement Clicked");
        setCount(count - 1);
    }
    return (<>
        <div className="w-[400px] text-3xl mx-auto flex flex-col justify-center items-center  p-4 rounded-md shadow-md border-2">
            <h1 className="text-2xl mb-2">Counter</h1>
            <p className="text-5xl font-bold">{count}</p>
            <div className="flex gap-3">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={decrement}>Decrement</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={increment}>Increment</button>

            </div>
        </div>
    </>
    );
}
export default Counter;