import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    //const total= cart.reduce((total,prod)=> total + prod.price,0);
    let total=0;
    for (let i=0; i<cart.length; i++){
        const product = cart[i];
        total= total + product.price;
    }
   
    let shipping = 0;
    if (total>50){
        shipping=0;
    }
    else if (total>25){
        shipping=6.25;
    }
    else if (total<25 && total>0){
        shipping=12.50;
    }
    const formateNumber= num =>{
        const precision=num.toFixed(2);
        return Number(precision);
    }

    const tax= (total/10).toFixed(2);
     const totalPrice=(total+Number(tax)+shipping).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {formateNumber(total)}</p>
            <p><small>shipping cost: {shipping}</small></p>
            <p><small>tax + vat : {tax}</small></p>
            <p>Total price: {totalPrice}</p>
        </div>
    );
};

export default Cart;