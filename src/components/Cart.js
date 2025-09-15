import { useDispatch, useSelector } from "react-redux";
import AccordionList from "./AccordionList";
import { clearCart } from "../utils/cartSlice";

const Cart= () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
           <button className="font-bold p-2 m-2 bg-black text-white rounded-lg hover:bg-gray-300 hover:text-black" onClick={handleClearCart}>Clear Cart</button>
           {cartItems.length === 0 && (<p className="text-lg text-gray-700">Your Cart Is Empty ☹ <br/> Please Add Items In Your Cart</p>
        )}
            <AccordionList items= {cartItems} />
            </div>
        </div>
    );
};

export default Cart;