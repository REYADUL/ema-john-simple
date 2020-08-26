import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    const total=cart.reduce((total,prd)=>total+prd.price,0);
    // let total =0;
    // for(let i=0;i<i.length;i++){
    //     const product = cart[i];
    //     total= total+product.price;
    // }

    let shipping = 0.00;
    if(total>35){
        shipping=0;
    }
    if(total>15){
        shipping =4.99
    }
    else if(total>0){
        shipping=4.99;
    }
    const tax = Math.round(total/10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    const formatNumber = num=>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    
    return (
        <div>
            <h4>order summary</h4>
            <p>Item ordered:{cart.length}</p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p><small>Tax+VAT:{tax}</small></p>
            <p>total price:{grandTotal}</p>
            
        </div>
    );
};

export default Cart;