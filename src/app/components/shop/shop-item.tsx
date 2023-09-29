import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IProduct } from "@/types/product-type";

const ShopItem = ({ item }: { item: IProduct }) => {
  return (
    <div className="shop__item">
      <div className="shop__item-thumb">
        <div>
          <Image src={item.img} alt="img" style={{width:'auto',height:'auto'}} />
        </div>
        <div className="wishlist-button">
          <i className="far fa-heart"></i>
        </div>
      </div>
      <div className="shop__item-line"></div>
      <div className="shop__item-content">
        <div className="shop__item-content-top">
          <h4 className="title">
            <p style={{fontWeight: "bold", fontSize: "20px"}}>{item.title}</p>
          </h4>
          <div className="shop__item-price">{item.price}</div>
        </div>
        <div className="shop__item-cat">
          <Link href="/shop">{item.category}</Link>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;
