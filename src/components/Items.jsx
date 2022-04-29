import React from "react";
import styled from "styled-components";
import {MdAddCircleOutline, MdRemoveCircleOutline} from "react-icons/md";

function Items(itemData) {
    return (
        <>
            <Item>
                <ProductDetails>
                    <div>
                        <div
                            className="img"
                            dangerouslySetInnerHTML={{__html: itemData.img}}
                        />
                        <div className="stockNumber">
                            <MdAddCircleOutline />
                            <span>1</span>
                            <MdRemoveCircleOutline />
                        </div>
                    </div>
                    <div className="productDetails">
                        <div className="itemName">{itemData.name}</div>
                        <div className="itemPrice">
                            <img
                                className="rupee"
                                src="https://img.icons8.com/material-outlined/24/000000/rupee.png"
                            />
                            {itemData.price}
                        </div>
                        <div className="itemColor">
                            <b>Color:</b>
                            {itemData.color}
                        </div>
                        <div
                            className={itemData.stock ? "inStock" : "outStock"}
                        >
                            {itemData.stock ? "In Stock" : "Out Of Stock"}
                        </div>
                        <ShopSettings>
                            <input
                                type="button"
                                value="Delete"
                                className="deleteBtn"
                            />
                            <input
                                type="button"
                                value="See more like this"
                                className="seeMoreBtn"
                            />
                        </ShopSettings>
                    </div>
                </ProductDetails>
                <hr />
            </Item>
        </>
    );
}

export default Items;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    hr{
        width: 90%;
      margin-top: -5px;
        border: 1px solid rgba(196, 196, 196, 0.4);
    }
`;
const ProductDetails = styled.div`
    width: 90%;
    padding: 20px;
    display: flex;
 
    justify-content: center;
    gap: 20px;
    .img {
        img {
            width: 100px;
            height: 100px;
        }
    }
    .stockNumber {
        margin-left: 50%;
        transform: translateX(-50%);
        width: 90%;
        display: flex;
        justify-content: space-between;
        background: rgba(196, 196, 196, 0.19);
        border-radius: 2px;
        svg {
            margin-top: 0;
        }
        span {
            font-size: 12px;
        }
    }
    .productDetails {
        position: relative;
        .inStock {
            font-size: 13px;
            color: green;
        }
        .outStock {
            font-size: 13px;
            color: red;
        }

        .itemName {
            font-weight: bold;
            font-size: 15px;
            line-height: 16px;
        }
        .itemPrice {
            position: relative;
            margin-left: 10px;
            padding-left: 14px;
            font-weight: 400;
            font-size: 20px;
            img {
                width: 12px;
                top: 2px;
                position: absolute;
                left: 0;
            }
        }
        .itemStock {
        }
    }
`;
const ShopSettings = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    gap: 10px;
    justify-content: space-between;
    .deleteBtn {
        font-size: 10px;
        padding: 2px 13px;
        color: #db4700;
        border: 2px solid #f77000;
        box-sizing: border-box;
        border-radius: 15px;
        outline: none;
    }
    .seeMoreBtn {
        font-size: 10px;
        padding: 2px 13px;
        background: #f77000;
        border: none;
        color: white;
        border-radius: 15px;
        outline: none;
    }
`;
