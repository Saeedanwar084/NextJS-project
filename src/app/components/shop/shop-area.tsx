import React from 'react';
import Link from 'next/link';
import ShopSidebar from './shop-sidebar';
import product_data from '@/data/product-data';
import ShopItem from './shop-item';

const ShopArea = () => {
    return (
        <section className="shop-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-11 order-2 order-lg-0">
                        {/* sidebar start */}
                        <ShopSidebar />
                        {/* sidebar end */}
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-11">
                        <div className="shop__top-wrap">
                        </div>
                        <div className="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1">
                            {product_data.map((item) => (
                                <div key={item.id} className="col">
                                    <ShopItem item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopArea;