import './index.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { actionType } from "../Context/reducer";
import { useAuthDispatch, useAuthState } from "../Context";
import { AiOutlineClose } from "react-icons/ai";
import { IoTrashBinOutline } from "react-icons/io5";

function Header() {
    const [show, setShow] = useState(false);
    const { categories, products, count, card, price } = useAuthState();
    const [showKorb, setShowKorb] = useState(false);


    const dispatch = useAuthDispatch();

    const handleDelete = (data) => {
        dispatch({ type: actionType.DELETEPRODUCT, payload: { data } });
        dispatch({ type: actionType.COUNTANDPRICE, payload: { data } })
    }

    const filterItems = (categ) => {

        if (categ === 'All') {
            const newProducts = [...products];
            dispatch({ type: actionType.FILTER_DATA, payload: { data: newProducts } })
        }
        else {
            const newProducts = products.filter((item) => item.category.name === categ)
            dispatch({ type: actionType.FILTER_DATA, payload: { data: newProducts } })
        }
    }


    return (
        <>
            <div className="header">
                <Link to={'/'} className="header-text"><h2 className="header-text">D&H Store</h2></Link>

                <button onClick={() => setShow(!show)}>{show ? <FaTimes /> : <FaBars />}</button>
            </div>
            {show && <div className="hamburger-menu">
                <ul className="hamburger-ul">
                    <li onClick={(e) => filterItems(e.target.innerHTML)} className="hamburger-li">All</li>
                    {categories[0] && categories[0].map((data, index) => {

                        return (
                            <li onClick={() => filterItems(data)} key={index} className="hamburger-li">{data}</li>

                        )
                    })}
                </ul>
            </div>
            }
            <div className="korb-icon-mobile">
                <div onClick={() => setShowKorb(!showKorb)} className="shopping-icon">
                    <FaShoppingCart />
                    <span className="card-sum">{count}</span>
                </div>
                {
                    showKorb && <div className="Korb-menu">
                        <div className="korb-header">
                            <Link to={"cart"} className="payment">Go to payment </Link>
                            <div className="korb-sum-delete">
                                <p>Sum</p>
                                <button title="Delete all" className="trash"><IoTrashBinOutline /></button>
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

            </div>
        </>
    );
}

export default Header;