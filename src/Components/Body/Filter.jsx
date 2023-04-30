import { useEffect, useState } from "react";
import { useAuthDispatch } from '../Context';
import { actionType } from "../Context/reducer";
import { Checkbox } from 'pretty-checkbox-react'
import '@djthoms/pretty-checkbox';

function Filter({ filter, handleFilterButton }) {

    const [down, setDown] = useState(false);
    const [up, setUp] = useState(false);
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(99999);
    const [option, setOption] = useState('All');

    const dispatch = useAuthDispatch();

    const handleOptions = (e) => {
        if (e.target.value === 'All') {
            setOption(e.target.value)
        }
        else {
            setOption(parseInt(e.target.value));
        }
    }


    const handleSortDown = () => {
        setDown(!down)
    }
    const handleSortUp = () => {
        setUp(!up)
    }


    const handleOnKeyDownFrom = (e) => {
        if (e.code === "Enter") {
            setFrom(e.target.value)
        }
    }
    const handleOnKeyDownTo = (e) => {
        if (e.code === "Enter") {
            setTo(e.target.value)
        }
    }

    const handleOnChangeTo = (e) => {
        if (e.target.value === "") {

        }
    }

    useEffect(() => {
        dispatch({ type: actionType.SORTPRICEDOWN, payload: { data: { down, up } } })
    }, [down]);

    useEffect(() => {
        dispatch({ type: actionType.SORTPRICEUP, payload: { data: { down, up } } })
    }, [up]);

    useEffect(() => {
        dispatch({ type: actionType.PRICEFROMTO, payload: { data: { from, to } } })
    }, [from, to]);

    useEffect(() => {
        dispatch({ type: actionType.CARDPERPAGE, payload: { data: option } })
    }, [option]);

    return (
        <div className={filter ? "filter-menu" : "filter-menu active"}>
            <div className="section-1">

                <div className="price">
                    <p>Price:</p>
                    <div className="price-wrapper">

                        <label htmlFor="priceSearch" className="price-search">
                            <span className="price-text-1">From ($)</span>
                            <input
                                onKeyDown={(e) => handleOnKeyDownFrom(e)}
                                min={1}
                                max={99999}
                                placeholder="1 $"
                                type="number"
                                name="number" />
                        </label>

                        <label htmlFor="priceSearch" className="price-search">
                            <span className="price-text-2">To ($)</span>
                            <input
                                onChange={(e) => { handleOnChangeTo(e) }}
                                onKeyDown={(e) => handleOnKeyDownTo(e)}
                                min={1} max={99999}
                                placeholder="99999 $"
                                type="number"
                                name="number" />
                        </label>

                    </div>
                </div>

                <div className="sort">

                    <div className="sort-child">
                        <Checkbox
                            shape="round"
                            onClick={() => handleSortUp()}>
                        </Checkbox>
                        <span className="checkbox-text">Price: heighest first</span>
                    </div>

                    <div className="sort-child">
                        <Checkbox
                            shape="round"
                            onClick={() => handleSortDown()}>
                        </Checkbox>
                        <span className="checkbox-text">Price: lowest first</span>
                    </div>

                </div>

                <div className="Brands">
                    <label htmlFor="brands">Products pro page: </label>
                    <select onChange={(e) => handleOptions(e)} id="brands" name="brandlist" form="brandform">
                        <option value="All">All</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
                <div id="flag"></div>

            </div>

            <div onClick={handleFilterButton} className="section-2"></div>
        </div >
    );
}

export default Filter;
