

const Navbar = () => {
    return (
        <div className="px-28">
            <div className=" flex items-center justify-between h-[120px] w-full">
                <div>
                    <h1 className="text-3xl font-bold text-[#150B2B]">Recipe Calories</h1>
                </div>
                <div className="text-xl">
                    <ul className="flex gap-9">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Search</a></li>
                    </ul>
                </div>
                <div className='flex items-center gap-7'>
                    <div className="">
                    <input className="px-8 py-3 rounded-2xl bg-slate-100 border-none" type="search" name="" id="" placeholder="Search" />
                    </div>
                    <a href="#"><img src={'https://i.ibb.co/kK7T066/Frame-5.jpg'} alt=""/></a>
                </div>
            </div>
            <section className="hero text-center pt-52">
                <h2 className="text-white text-5xl font-bold">Discover an exceptional cooking <br/> class tailored for you!</h2>
                <p className="text-white mt-4">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br/> problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex gap-5 justify-center mt-8">
                    <button className="bg-[#0BE58A] px-6 py-3 rounded-full text-base font-medium" type="button">Explore Now</button>
                    <button className="border-2 border-[#fff] px-6 py-3 rounded-full text-white text-base font-medium" type="button">Our Feedback</button>
                </div>
            </section>
        </div>
    );
};

export default Navbar;