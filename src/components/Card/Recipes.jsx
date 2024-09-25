
import { useEffect, useState } from "react";
import SingleProduct from "../single-product/SingleProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Recipes = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const showToastMessage = () => {
        toast.warning("Already Exist!");
    };

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const handelCart = (p) => {
        const isExist = cart.find(item => item.recipe_id === p.recipe_id); 
    if (isExist) {
        showToastMessage();
    } else {
        setCart([...cart, p]);
    }
        
    }


    return (
        <div>
            <div className="main-container flex justify-between px-28 mb-9 mt-20">
                <div>
                <ToastContainer />
                </div>
                <div className="card-container grid grid-cols-2 gap-10 ">
                    {
                        products.map(pd => <SingleProduct key={pd.id}  handelCart={handelCart} product={pd}></SingleProduct>)
                    }
                </div>
                <div className="cart-container w-[470px] h-auto rounded-2xl shadow-2xl">
                    <div className="px-14 text-center mt-8">
                        <h3 className="text-2xl font-semibold mb-4">Want to cook: <span> {cart.length} </span></h3>
                        <hr />
                    </div>
                    <div className="flex gap-8 justify-between mt-6 px-7 mb-4">
                        <div>
                            <div>
                                <table>
                                    <tr className="flex gap-14 text-lg font-semibold">
                                        <th>Name</th>
                                        <th>Time</th>
                                        <th>Calorie</th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between px-7 items-center mb-7">
                        <div>
                            {cart.map((item) => (
                                <div className="flex justify-between gap-8 items-center" key={item.id}>
                                    <div>
                                        <table>
                                            <tr className="flex gap-14">
                                                <td>{item.recipe_name}</td>
                                                <td>{item.preparing_time}</td>
                                                <td>{item.calories}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div>
                                        <button className="bg-[#0BE58A] py-1 px-4 rounded-full ">Preparing</button>
                                    </div>
                                </div>  
                            ))}
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div className="mt-5 text-center px-3">
                            <h2 className="text-2xl font-semibold mb-5">Currently cooking: <span></span></h2>
                            <hr />
                        </div>
                        <div className="text-center px-8">
                            <ul className="flex justify-around gap-14 text-lg font-semibold">
                                <li>Name</li>
                                <li>Time</li>
                                <li>Calorie</li>
                            </ul>
                            <ul className="flex justify-around gap-14 text-base mb-5">
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;