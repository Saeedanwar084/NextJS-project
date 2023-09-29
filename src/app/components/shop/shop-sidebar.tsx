'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import product_data from '@/data/product-data';
import InputRange from '../ui/input-range';
const ShopSidebar = () => {
  const related__products = product_data.slice(0,3);
  const [priceValue,setPriceValue] = useState([0,380]);
  // handleChanges
  const handleChanges = (val: number[]) => {
    setPriceValue(val);
  };
  return (
    <aside className="shop-sidebar">
    <div className="shop__widget">
        <h4 className="shop__widget-title">Related products</h4>
        <div className="shop__widget-inner">
            {related__products.map((item) => (
            <div key={item.id} className="related__products-item">
                <div className="related__products-thumb">
                    <div>
                        <Image src={item.img} alt="img" width={78} height={80} />
                    </div>
                </div>
                <div className="related__products-content">
                    <h4 className="product-name">
                        <p style={{"fontWeight": "bold"}}>{item.title}</p>
                    </h4>
                    <span className="amount">{item.price}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
</aside>
  );
};

export default ShopSidebar;