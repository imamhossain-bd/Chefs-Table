

const SingleProduct = ({product, handelCart}) => {
    
    return (
        <div>
            <div className="">
           
                <div className="w-[380px] h-[675px] border-2 border-gray-400 rounded-lg">
                        <div className="px-6 py-5 ">
                            <img className="rounded-2xl h-[215px] w-full"  src={product.recipe_image} alt=""/>
                        </div>
                        <div className="px-6 mt-2">
                            <h2 className="text-2xl font-bold">{product.recipe_name}</h2>
                            <p className="mt-3 text-base mb-3 text-[#878787]">{product.short_description}</p>
                            <hr/>
                            <div className="mb-3">
                                <h2 className="mt-3 text-2xl font-semibold">Ingredients:</h2>
                                <ul className="pl-5 mt-3 text-[#878787]">
                                    {
                                        product.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
                                    }
                                </ul>
                            </div>
                            <hr/>
                            <div>
                                <div className="flex gap-10 pl-3 mt-5">
                                    <p className="text-lg text-[#878787]"> {product.preparing_time}</p>
                                    <p className="text-lg text-[#878787]"> {product.calories}</p>
                                </div>
                                <button onClick={() => handelCart(product)} className="bg-[#0BE58A] mt-4 px-6 py-3 rounded-full text-base font-medium" type="button">Want to Cook</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};


export default SingleProduct;