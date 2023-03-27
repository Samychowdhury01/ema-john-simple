import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
    return (
        <div className='md:grid md:grid-cols-12'>
            <div className='md:col-span-9 w-full mt-16 p-10'>
              <div className='grid md:grid-cols-3 gap-5'>    
              {
                    products.slice(0,5).map(product => <Card {...product} key={product.id}></Card>)
                }
              </div>
            </div>


            <div className='bg-secondary bg-opacity-50 md:col-span-3 w-full'>
                <h2 className='text-2xl text-center'>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shop;