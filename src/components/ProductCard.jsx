

import PropTypes from 'prop-types';
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import { useAppDispatch } from "../redux/hooks";
import { addToCart } from "../redux/features/cartSlice";
import toast from "react-hot-toast";

const ProductCard = ({ id, img, category, title, price }) => {
  const dispatch = useAppDispatch();

  const addProductToCart = () => {
    const payload = {
      id,
      img,
      title,
      category,
      price: parseFloat(price),
      quantity: 1,
    };

    dispatch(addToCart(payload));
    toast.success("Added to Cart");
  };
  
    return (
      <div className="border border-gray-200">
        <div className="text-center border-b border-gray-200">
          <img className="inline-block" src={img} alt={title} />
        </div>
  
        <div className="px-8 py-4">
          <p className="text-gray-500 text-[14px] font-medium">{category}</p>
          <h2 className="font-medium ">{title}</h2>
  
          <div className="mt-3 flex text-[#ffb21d] items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
  
            <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
          </div>
  
          <div className="flex justify-between items-center mt-4">
            <h2 className="font-medium text-blue-400 text-xl">${price}</h2>
            <div
              className="flex gap-2 items-center bg-lime-400 text-white px-4 py-2 cursor-pointer hover:bg-blue-400"
              onClick={addProductToCart}
            >
              <AiOutlineShoppingCart /> Add To Cart
            </div>
          </div>
        </div>
      </div>
    );
  };


  ProductCard.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };
  
  export default ProductCard;
  




























// import {
//   AiFillStar,
//   AiOutlineStar,
//   AiOutlineShoppingCart,
// } from "react-icons/ai";

// import { useAppDispatch } from "../redux/hooks";
// import { addToCart } from "../redux/features/cartSlice";
// import toast from "react-hot-toast";

// interface PropsType {
//   id: number;
//   img: string;
//   category: String;
//   title: String;
//   price: String;
// }

// const ProductCard = ({ id, img, category, title, price }: PropsType) => {
//   const dispatch = useAppDispatch();

//   const addProductToCart = () => {
//     const payload = {
//       id,
//       img,
//       title,
//       price: parseFloat(price),
//       quantity: 1,
//     };

//     dispatch(addToCart(payload));
//     toast.success("Added to Cart");
//   };

//   return (
//     <div className="border border-gray-200">
//       <div className="text-center border-b border-gray-200">
//         <img className="inline-block" src={img} alt={title} />
//       </div>

//       <div className="px-8 py-4">
//         <p className="text-gray-500 text-[14px] font-medium">{category}</p>
//         <h2 className="font-medium ">{title}</h2>

//         <div className="mt-3 flex text-[#ffb21d] items-center">
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiOutlineStar />

//           <p className="text-gray-600 text-[14px] ml-2">(3 Review)</p>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <h2 className="font-medium text-blue-400 text-xl">${price}</h2>
//           <div
//             className="flex gap-2 items-center bg-lime-400 text-white px-4 py-2 cursor-pointer hover:bg-blue-400"
//             onClick={addProductToCart}
//           >
//             <AiOutlineShoppingCart /> Add To Cart
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
