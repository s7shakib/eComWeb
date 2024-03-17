import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { useAppSelector } from "../redux/hooks";

const Navbar = ({ setShowCart }) => {


        const cartCount =  useAppSelector((state) => state.cartReducer.length)

  return (
    <div className="pt-4 bg-white top-0 sticky px-12">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">Logo</h1>

          <div className="lg:flex hidden w-full max-w-[500px]">
            <input
              className="border-2 border-blue-400 px-6 py-2 w-full"
              type="text"
              placeholder="Search for products..."
            />
            <div className="bg-blue-400 text-white text-[26px] grid place-items-center px-4">
              <BsSearch />
            </div>
          </div>
          <div className="flex gap-4 md:gap-8 items-center">
            <div className="md:flex gap-3 hidden">
              <div className="rounded-full border-2 border-gray-300 text-gray-500 text-[32px] w-[50px] h-[50px] grid place-items-center">
                <AiOutlineUser />
              </div>

              <div>
                <p className="text-gray-500">Hello, Sign in</p>
                <p className="font-medium">Your Acount</p>
              </div>
            </div>

            <div className="text-gray-500 text-[32px] relative" onClick={() => setShowCart(true)}>
              <AiOutlineShoppingCart />

              <div className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] rounded-full text-white text-[14px] grid place-items-center">
                {cartCount}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-200 pt-4"/>
      </div>
    </div>
  );
};

export default Navbar;
