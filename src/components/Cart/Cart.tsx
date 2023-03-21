import React from 'react';
import styles from "./Cart.module.scss";
import { HiOutlineCheckCircle } from "react-icons/hi";
import Card from "../Card/Card";

const Cart = () => {
    return (
        <div className={styles.cart__container}>
            <h1>Pedido efetuado com sucesso!</h1>
            <div className={styles.cart__ticketCode}>
                <div>
                    <p>Nº DO PEDIDO</p>
                    <b>JNK6G0R</b>
                </div>
                <div>
                    <HiOutlineCheckCircle size={50} color="gray" />
                    <span>
                        Confirmado
                    </span>
                </div>
            </div>

            <Card />
        </div>
    );
}

export default Cart;