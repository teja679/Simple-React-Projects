import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles.css'

const Main = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood");
                setItems(res.data.meals);
                console.log(items);
            } catch (e) {
                console.error(e)
            }
        }
        getData()
    }, [])


    const itemsData = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section className='card' key={strMealThumb}>
                <img src={strMealThumb} alt='Not found' />
                <section className='content'>
                    <p>{strMeal}</p>
                    <p>#{idMeal}</p>
                </section>
            </section>
        )
    });

    return <div className='items-container'>{itemsData}</div>
}

export default Main
