import React, { useEffect } from 'react'
import styles from './Categories.module.css'
import { getProducts } from '../../store/slices/productsSlices';
import { useDispatch, useSelector } from 'react-redux'

const Categories = () => {
    const { productData } = useSelector((state) => state.products);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getProducts())
    }, []);

    console.log(productData);

    const kategory = "someCategory";

    const categories = productData ? productData.map((el) => el.kategory).filter(el => el !== kategory) : [];
    productData.forEach(product=>{
        if (!list.includes(product.kategory)){
            list.push(product.kategory)
        }
    })

    return (
        <div>
            <h2>Категории</h2>
            <div className={styles.categoryBlocks}>
                {categories.map((category, index) => (
                    <div key={index}>{category}</div>
                ))}
            </div>
        </div>
    )
}

export default Categories;
