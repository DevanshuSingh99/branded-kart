import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {items} from "../items";
import {HiMenu, HiSearch, HiOutlineCamera} from "react-icons/hi";
import Items from "./Items";

function Shoppingkart() {
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].price;
        }
        setTotalPrice(sum);
    }, []);
    return (
        <>
            <ShoppingkartPage>
                <Header>
                    <HiMenu />
                    <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-flat-vitaly-gorbachev.png" />
                </Header>
                <Search>
                    <HiSearch className="search-icon" />
                    <input type="text" placeholder="Search" />
                    <span>|</span>
                    <HiOutlineCamera className="camera-icon" />
                </Search>
                <CartItems>
                    {items.map((item, key) => {
                        return (
                            <Items
                                key={key}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                color={item.color}
                                stock={item.stock}
                            />
                        );
                    })}
                </CartItems>
                <Checkout>
                    <SubTotal>
                        Subtotal{" "}
                        <img
                            className="rupee"
                            src="https://img.icons8.com/material-outlined/24/000000/rupee.png"
                        />{" "}
                        {totalPrice}
                    </SubTotal>
                    <CheckoutBtn>
                        <input
                            type="button"
                            value={
                                "Proceed to buy (" + items.length + " items)"
                            }
                        />
                    </CheckoutBtn>
                </Checkout>
            </ShoppingkartPage>
        </>
    );
}
export default Shoppingkart;
const Checkout = styled.div`
    position: relative;
`;
const CheckoutBtn = styled.div`
    position: absolute;
    left: 50%;
    top: 35px;
    transform: translateX(-50%);
    input {
        color:white;
        font-weight: 400;
        font-size: 14px;
        line-height: 40px;
        width: 255px;
        height: 44px;
        left: calc(50% - 255px / 2);
        top: 595px;
        border: none;
        background: #db4700;
        box-shadow: -3px -6px 4px rgba(220, 220, 220, 0.4),
            3px 6px 4px rgba(196, 196, 196, 0.4);
        border-radius: 15px;
    }
`;
const ShoppingkartPage = styled.div``;
const Header = styled.div`
    color: #db4700;
    font-size: 35px;
    display: flex;
    padding: 15px;
    justify-content: space-between;
    top: 10px;
    left: 10px;
    img {
        width: 35px;
        height: 35px;
    }
`;
const Search = styled.div`
    margin: 0 15px;
    position: relative;
    .search-icon {
        position: absolute;
        color: #3c3c3c99;
        top: 3px;
        left: 8px;
        font-size: 20px;
    }
    .camera-icon {
        position: absolute;
        color: #3c3c3c99;
        right: 8px;
        top: 3px;
        font-size: 20px;
    }
    span {
        position: absolute;
        color: #3c3c3c99;
        font-weight: bolder;
        right: 30px;
        top: 3px;
    }
    input {
        width: 100%;
        padding: 5px 30px;
        border: none;
        background: rgba(196, 196, 196, 0.19);
        border-radius: 5px;
        :focus {
            outline: none;
        }
    }
`;
const CartItems = styled.div``;

const SubTotal = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 40px;
    img {
        width: 10px;
    }
`;
