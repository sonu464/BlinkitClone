import React, { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import { BsClock } from "react-icons/bs";
import { FaList, FaBicycle, FaShoppingBag } from "react-icons/fa";

export default function Cart({ onSendData }) {
  const [itemsPrice, setItemPrice] = useState(0);
  const [deliveryCharges, setDeliveryCharges] = useState(15);
  const [grandTotal, setGrandTotal] = useState(0);
  const CARTITEM_DATA = [
    {
      id: "i1",
      itemName: "Harvest Gold - White Bread",
      weight: "350g",
      price: 28,
      img: "/homepics/widget4item.avif",
    },
    {
      id: "i2",
      itemName: "Harvest Gold - White Bread",
      weight: "350g",
      price: 28,
      img: "/homepics/widget4item.avif",
    },
    {
      id: "i3",
      itemName: "Harvest Gold - White Bread",
      weight: "350g",
      price: 28,
      img: "/homepics/widget4item.avif",
    },
    {
      id: "i4",
      itemName: "Harvest Gold - White Bread",
      weight: "350g",
      price: 28,
      img: "/homepics/widget4item.avif",
    },
  ];

  function closeCartDialog() {
    onSendData(false);
  }

  useEffect(() => {
    const totalPrice = CARTITEM_DATA.reduce(
      (total, item) => total + item.price,
      0
    );
    setItemPrice(totalPrice);

    if (itemsPrice >= 99) {
      setDeliveryCharges(0);
    }

    const totalAmount = itemsPrice + deliveryCharges + 2;
    setGrandTotal(totalAmount);
  }, [CARTITEM_DATA]);

  return (
    <div className={classes.cartBox}>
      <div className={classes.cartUpperBox}>
        <p>My cart</p>
        <p onClick={closeCartDialog}>X</p>
      </div>

      <div className={classes.userCartItem}>
        <div className={classes.noOfItem}>
          <div className={classes.cartTiming}>
            <BsClock className={classes.cartTimingClock} />
          </div>
          <div className={classes.cartTimeNo}>
            <h4>Delivery in 10 minutes</h4>
            <p>Shipment of {CARTITEM_DATA.length} items</p>
          </div>
        </div>

        {CARTITEM_DATA.map((item, index) => (
          <div key={index} className={classes.selectedCartItem}>
            <div className={classes.cartItemImg}>
              <img src={item.img} alt={item.itemName} />
            </div>
            <div className={classes.cartItemInfo}>
              <h6>{item.itemName}</h6>
              <p>{item.weight}</p>
              <span>Rs {item.price}</span>
            </div>
            <div className={classes.cartPlusMinusBtn}>
              <button>-</button>
              <p>3</p>
              <button>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.billDetails}>
        <h3>Bill Details</h3>
        <div className={classes.itemChargesInfo}>
          <div className={classes.itemCharges}>
            <p>
              <FaList className={classes.itemChargesIcon} /> Items total
            </p>
            <p>Rs {itemsPrice}</p>
          </div>
          <div className={classes.itemCharges}>
            <p>
              <FaBicycle className={classes.itemChargesIcon} /> Delivery charge
            </p>
            {itemsPrice >= 99 && (
              <div className={classes.deliveryChargesFree}>
                <p> Rs 15 </p> <span>FREE</span>
              </div>
            )}
            {itemsPrice < 99 && <p>{deliveryCharges}</p>}
          </div>
          <div className={classes.itemCharges}>
            <p>
              <FaShoppingBag className={classes.itemChargesIcon} />
              Handling charge
            </p>
            <p>Rs 2</p>
          </div>
        </div>
        <div className={classes.itemCharges}>
          <h5>Grand total</h5>
          <span>Rs {grandTotal}</span>
        </div>
      </div>

      <div className={classes.cancelOrder}>
        <h6>Cancellation Policy</h6>
        <p>
          Orders cannot be cancelled once packed for delivery. In case of
          unexpected delays, a refund will be provided, if applicable.
        </p>
      </div>

      <div className={classes.placeOrder}>
        <div className={classes.orderInfo}>
          <div className={classes.orderAmount}>
            <h5>Rs {grandTotal}</h5>
            <p>Total</p>
          </div>
          <p>Login to proceed</p>
        </div>
      </div>
    </div>
  );
}
