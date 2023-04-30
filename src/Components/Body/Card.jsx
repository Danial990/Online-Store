import { useAuthDispatch, useAuthState } from '../Context';
import { actionType } from '../Context/reducer';
import Toast from '../Toast';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import './index.css';

function Card() {

    const [toast, setToast] = useState({ type: '', message: '', id: 0 });

    const { cardPerPage, FilteredProducts, products } = useAuthState();
    const dispatch = useAuthDispatch();

    function handleAddToCard(data) {
        dispatch({ type: actionType.ADDTOCARD, payload: { data } })
        dispatch({ type: actionType.COUNTANDPRICE, payload: { data } })
    }

    let prods = [];
    if (FilteredProducts.length !== 0) {
        if (cardPerPage === 'All') {
            prods = [...FilteredProducts[0]]
        } else {
            prods = [...FilteredProducts[0]].splice(0, cardPerPage)
        }
    } else {
        if (cardPerPage === 'All') {
            prods = [...products];
        }
        else {
            prods = [...products].splice(0, cardPerPage)
        }
    }


    const successBar = () => {
        setToast({ type: 'success', message: 'Added to Card', id: toast.id + 1 })
    }

    return (
        <>
            {
                prods.length !== 0 && prods.map((data) => {
                    return (
                        <div key={data.id} className="card-container">
                            <img src={data.images[0]} alt="" />
                            <div className="card-text">
                                <h4 className="title">{data.title}</h4>
                                <p>{data.price} $</p>
                            </div>
                            <div className="line"></div>
                            <div className="card-footer">
                                <button onClick={() => { successBar(); handleAddToCard(data) }}>Add to Card</button>
                            </div>
                        </div>
                    )
                })
            }
            <Toast type={toast.type} message={toast.message} id={toast.id} />
        </>
    );
}

export default Card;
