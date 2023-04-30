import { useAuthDispatch, useAuthState } from "../Context";
import axios from "axios";
import { useEffect, useState } from "react";
import { actionType } from "../Context/reducer";

import Filter from "./Filter";
import KorbIcon from "./KorbIcon";

function Nav() {

    const [filter, setFilter] = useState(true);
    const [cats, setCats] = useState("");

    const dispatch = useAuthDispatch();
    const { categories, products } = useAuthState();

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



    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://api.escuelajs.co/api/v1/categories',
        };

        axios.request(options).then(function (response) {
            setCats(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    const newCatogories = []
    cats && cats.map((data) => {
        newCatogories.push(data.name);
    })

    const newCats = [...new Set(newCatogories)]

    useEffect(() => {
        dispatch({ type: actionType.CATEGORIES, payload: { data: newCats.splice(0, 5) } });
    }, [cats]);

    const handleFilterButton = () => {
        setFilter(!filter)
    }


    return (
        <>
            <div className="filter-button">
                <button onClick={() => setFilter(!filter)}>Filter</button>
                <Filter handleFilterButton={handleFilterButton} filter={filter} />
            </div>

            <ul className="nav-ul">
                <li onClick={(e) => filterItems(e.target.innerHTML)} className="nav-li">All</li>
                
                {
                    categories[0] && categories[0].map((data, index) => {
                        return (
                            <li  onClick={() => filterItems(data)} key={index} className="nav-li">{data}</li>
                        )
                    })
                }

            </ul>

            {/* Korb Icon */}
            <KorbIcon />
        </>


    );
}

export default Nav;