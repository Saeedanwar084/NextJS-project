import React, { useState } from 'react';
import Link from 'next/link';
import ShopSidebar from './shop-sidebar';
import product_data from '@/data/product-data';
import ShopItem from './shop-item';

const ShopArea = () => {

    const itemsPerPage = 30;
    const [currentPage, setCurrentPage] = useState<number>(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = product_data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(product_data.length / itemsPerPage);

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className="shop-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-3 col-lg-4 col-md-11 order-2 order-lg-0">
                        {/* sidebar start */}
                        <ShopSidebar />
                        {/* sidebar end */}
                    </div>
                    {/* <div className="col-xl-9 col-lg-8 col-md-11">
                        <div className="shop__top-wrap">
                        </div>
                        <div className="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1">
                            {currentItems.map((item) => (
                                <div key={item.id} className="col">
                                    <ShopItem item={item} />
                                </div>
                            ))}
                        </div>
                    </div> */}
                    <div className="col-xl-9 col-lg-8 col-md-11">
                        <div className="shop__top-wrap"></div>
                        <div className="row justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1">
                            {currentItems.map((item) => (
                                <div key={item.id} className="col">
                                    <ShopItem item={item} />
                                </div>
                            ))}
                        </div>
                        <div className="d-flex justify-content-center mt-20 pagination">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={currentPage === index + 1 ? 'active' : ''}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopArea;