
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAuthDispatch, useAuthState } from "../Context";
import { AiOutlineClose } from "react-icons/ai";
import { IoTrashBinOutline } from "react-icons/io5";
import { actionType } from "../Context/reducer";
import { Link } from "react-router-dom";

function KorbIcon() {

    const [show, setShow] = useState(false);
    const { card, count, price } = useAuthState();

    const dispatch = useAuthDispatch();

    const handleDelete = (data) => {
        dispatch({ type: actionType.DELETEPRODUCT, payload: { data } });
        dispatch({ type: actionType.COUNTANDPRICE, payload: { data } })

    }

    const handleDeleteAll = (data) => {
        dispatch({ type: actionType.DELETEALL, payload: { data } });
        dispatch({ type: actionType.COUNTANDPRICE, payload: { data } })
    }

    return (
        <>
            <div onClick={() =>  setShow(!show)} className="shopping-icon">
                <FaShoppingCart />
                <span className="card-sum">{count}</span>
            </div>

            {
                show && <div className="Korb-menu">
                    <div className="korb-header">
                        <Link to={"cart"} className="payment">Go to payment </Link>
                        <div className="korb-sum-delete">
                            <p>Sum</p>
                            <button title="Delete all" onClick={() => handleDeleteAll("ok")} className="trash"><IoTrashBinOutline /></button>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="sum">{price} $</div>
                    <div className="korb-body">
                        {(card.length !== 0) && card.map((data, index) => {

                            return (

                                <div key={index} className="korb-product">
                                    <div className="img">
                                        <img src={data.images[0]} alt="" />
                                        <span className="count">{data.count}</span>
                                    </div>
                                    <div className="text">
                                        <p className="text-1">{data.title}</p>
                                        <p className="text-2">{data.price} $</p>
                                        <AiOutlineClose onClick={() => handleDelete(data)} className="trash" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </>
    );
}

export default KorbIcon;