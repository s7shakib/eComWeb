import { useAppDispatch } from "../redux/hooks";
import { RxCross1 } from "react-icons/rx";
import { removeFromCart } from "../redux/features/cartSlice";
import PropTypes from 'prop-types'; // Import PropTypes

const CartProduct = ({ id, img, title, price, quantity }) => {
    const dispatch = useAppDispatch();
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img className="h-[80px]" src={img} alt={title} />
                <div className="space-y-2">
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-gray-600 text-[14px]">
                        {quantity} x ${price}.00
                    </p>
                </div>
            </div>
            <RxCross1 
                className="cursor-pointer"
                onClick={() => dispatch(removeFromCart(id))}
            />
        </div>
    );
};

// Define PropTypes
CartProduct.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
};

export default CartProduct;






// import { useAppDispatch } from "../redux/hooks";
// import { RxCross1 } from "react-icons/rx";
// import { removeFromCart } from "../redux/features/cartSlice";


// interface PropsType {
//   id: number;
//   img: string;
//   title: String;
//   price: string;
//   quantity: number;
// }


// const CartProduct: React.FC<propsType/> = ({
//     id,
//     img,
//     title,
//     price,
//     quantity,
// })  => {
//     const dispatch = useAppDispatch();
//     return (
//         <div className="flex justify-between items-center">
//             <div className="flex items-center gap-4">
//                 <img className="h-[80px]" src={img} alt={title} />
//                 <div className="space-y-2">
//                     <h3 className="font-medium">{title}</h3>
//                     <p className="text-gray-600 text-[14px]">
//                         {quantity} x ${price}.00
//                     </p>
//                 </div>
//             </div>
//             <RxCross1 
            
//                 className="cursor-pointer"
//                 onClick={() => dispatch (removeFromCart(id))}
//             />
//         </div>
//     )
// }


// export default CartProduct