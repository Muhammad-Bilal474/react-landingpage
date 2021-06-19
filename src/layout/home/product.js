import React, { useState } from 'react';

import Card from '../../component/card'



function Product() {
    const [product, setProduct] = useState([
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg',
            title: 'Head Phone',
            description: 'Sound proof',
            price: '442 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1605814228/N40582910A_1.jpg',
            title: 'Tablet',
            description: '32 GB and 4 Gb',
            price: '4643 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1612944610/N44278658A_1.jpg',
            title: 'Laptop',
            description: '54 inch',
            price: '8234 AED'
        },
        {
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1592475344/N38767870A_1.jpg',
            title: 'Air Cooler',
            description: '50 inch',
            price: '3452 AED'
        },{
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1592475344/N38767870A_1.jpg',
            title: 'Fridge',
            description: 'SamSung Brand',
            price: '2000 AED'
        },{
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1618848488/N41253839A_1.jpg',
            title: 'Washing Machine',
            description: 'New And Branded',
            price: '1899 AED'
        },{
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1598000229/N16518934A_1.jpg',
            title: 'Juicer Machine',
            description: 'Fully Copper',
            price: '200 AED'
        },{
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1617603859/N45673424A_1.jpg',
            title: 'Air Cooler',
            description: 'Room cooler',
            price: '1564 AED'
        },{
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1603457358/N17964585A_1.jpg',
            title: 'Branded air Cooler',
            description: '50 inch long',
            price: '1467 AED'
        },{
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1603457358/N17964585A_1.jpg',
            title: 'Branded air Cooler',
            description: '50 inch long',
            price: '1467 AED'
        },{
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1603457358/N17964585A_1.jpg',
            title: 'Branded air Cooler',
            description: '50 inch long',
            price: '1467 AED'
        },{
            imageSrc: 'https://z.nooncdn.com/products/tr:n-t_240/v1603457358/N17964585A_1.jpg',
            title: 'Branded air Cooler',
            description: '50 inch long',
            price: '1467 AED'
        }
    ])



    return <>
        <div className='row p-3 my-3'>
            {product.map((e, i) => {
                return <div key={i} className='col-md-3 my-2'>
                    <Card imageSrc={e.imageSrc} title={e.title} description={e.description} price={e.price} />
                </div>
            })}

        </div>
    </>
}
export default Product;