import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { useAuthDispatch, useAuthState } from "../../Components/Context";
import { actionType } from '../Context/reducer';
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Basket() {

    const { card, count, price } = useAuthState();
    const dispatch = useAuthDispatch();


    const addPlus = (data) => {

        dispatch({ type: actionType.ADDTOCARD, payload: { data } })
        dispatch({ type: actionType.COUNTANDPRICE, payload: { data } })


    }

    const funMinus = (data) => {
        dispatch({ type: actionType.DELETEPRODUCT, payload: { data } });
        dispatch({ type: actionType.COUNTANDPRICE, payload: { data } })

    }
    const shipping = (price > 300) ? 0 : 30;

    return (
        <>

            <Link to="/"><IoReturnDownBack className='pageBack' /></Link>
            {(card.length == 0) && <div className='card-empty'>Your cart ist empty</div>}
            <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="h5">Shopping Bag</th>
                                            <th scope="col"></th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {(card.length !== 0) && card.map((data) => {

                                            return (

                                                <tr key={data.id}>
                                                    <th key={data.id} scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <img src={data.images[0]} className="img-fluid rounded-3"
                                                                style={{ width: 120 + "px" }} alt="Book" />
                                                            <div className="flex-column ms-4">
                                                                <p className="mb-2">{data.title}</p>
                                                                {/* <p className="mb-0">Daniel Kahneman</p> */}
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="align-middle">
                                                        <p className="mb-0" style={{ fontWeight: 500 }}></p>
                                                    </td>
                                                    <td className="align-middle">
                                                        <div className="d-flex flex-row">
                                                            <button className="btn btn-link px-2"
                                                                onClick={() => funMinus(data)}>
                                                                <AiOutlineMinus />
                                                            </button>

                                                            <input value={data.count} id="form1" min="0" name="quantity" type="number"
                                                                onChange={(e) => console.log(e.target.value)} className="form-control form-control-sm" style={{ width: 50 + "px" }} />

                                                            <button className="btn btn-link px-2"
                                                                onClick={() => addPlus(data)}>
                                                                <BsPlusLg />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="align-middle">
                                                        <p className="mb-0" style={{ fontWeight: 500 }}>{data.price}  $</p>
                                                    </td>
                                                </tr>

                                            )
                                        })}



                                    </tbody>
                                </table>
                            </div>

                            <div className="card shadow-2-strong mb-5 mb-lg-0" style={{ borderRadius: 16 + "px" }}>
                                <div className="card-body p-4">

                                    <div className="row">
                                        <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                                            <form>
                                                <div className="d-flex flex-row pb-3">
                                                    <div className="d-flex align-items-center pe-2">
                                                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1v"
                                                            value="" aria-label="..." />
                                                    </div>
                                                    <div className="rounded border w-100 p-3">
                                                        <p className="d-flex align-items-center mb-0">
                                                            <i className="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>Credit
                                                            Card
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row pb-3">
                                                    <div className="d-flex align-items-center pe-2">
                                                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2v"
                                                            value="" aria-label="..." />
                                                    </div>
                                                    <div className="rounded border w-100 p-3">
                                                        <p className="d-flex align-items-center mb-0">
                                                            <i className="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>Debit Card
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row">
                                                    <div className="d-flex align-items-center pe-2">
                                                        <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3v"
                                                            value="" aria-label="..." />
                                                    </div>
                                                    <div className="rounded border w-100 p-3">
                                                        <p className="d-flex align-items-center mb-0">
                                                            <i className="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>PayPal
                                                        </p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-6">
                                            <div className="row">
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                            placeholder="John Smith" />
                                                        <label className="form-label" htmlFor="typeName">Name on card</label>
                                                    </div>

                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <input type="text" id="typeExp" className="form-control form-control-lg" placeholder="MM/YY"
                                                            size="7" id="exp" minLength="7" maxLength="7" />
                                                        <label className="form-label" htmlFor="typeExp">Expiration</label>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-xl-6">
                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                                            placeholder="1111 2222 3333 4444" minLength="19" maxLength="19" />
                                                        <label className="form-label" htmlFor="typeText">Card Number</label>
                                                    </div>

                                                    <div className="form-outline mb-4 mb-xl-5">
                                                        <input type="password" id="typeText" className="form-control form-control-lg"
                                                            placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                                        <label className="form-label" htmlFor="typeText">Cvv</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-xl-3">
                                            <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                                                <p className="mb-2">Subtotal</p>
                                                <p className="mb-2">{price} $</p>
                                            </div>

                                            <div className="d-flex justify-content-between" style={{ fontWeight: 500 }}>
                                                <p className="mb-0">Shipping</p>
                                                <p className="mb-0"> {shipping} $</p>
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4" style={{ fontWeight: 500 }}>
                                                <p className="mb-2">Total (tax included)</p>
                                                <p className="mb-2">{price} $</p>
                                            </div>

                                            <button type="button" className="btn btn-primary btn-block btn-lg">
                                                <div className="d-flex justify-content-between">
                                                    <span>Checkout: {price} $</span>

                                                    {/* <span>{price}$</span> */}
                                                </div>
                                            </button>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Basket;
