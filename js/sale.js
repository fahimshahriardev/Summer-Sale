let price = 0;

///////////// k accessories price////////////
document.getElementById('product-container').addEventListener('click', function(){
 

    const productName = document.getElementById('product-name').innerText;


    //get the price

    const productPriceField = document.getElementById('product-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);

    // const productPrice = productPriceFloat.toFixed(2);



    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);

    




});


///////////// k accessories 2 price////////////



document.getElementById('kaccessories').addEventListener('click', function(){
 

    const productName = document.getElementById('k-accessories2').innerText;


    //get the price

    const productPriceField = document.getElementById('k-accessories2-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);

    



    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);

    

});



///////////// Home Cooker price////////////


document.getElementById('home-cooker').addEventListener('click', function(){
 

    const productName = document.getElementById('home-cooker-title').innerText;


    //get the price

    const productPriceField = document.getElementById('home-cooker-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);


    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);

    

});




///////////// black cap price////////////



document.getElementById('black-cap').addEventListener('click', function(){
 

    const productName = document.getElementById('cap-title').innerText;


    //get the price

    const productPriceField = document.getElementById('cap-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);


    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);



});


/////jersey section/////////


document.getElementById('jersey').addEventListener('click', function(){
 

    const productName = document.getElementById('jersey-title').innerText;


    //get the price

    const productPriceField = document.getElementById('jersey-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);


    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);

    

});



/////cates section/////////


document.getElementById('cates').addEventListener('click', function(){
 

    const productName = document.getElementById('cates-title').innerText;


    //get the price

    const productPriceField = document.getElementById('cates-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);


    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);

    

});


/////chair section/////////


document.getElementById('chair').addEventListener('click', function(){
 

    const productName = document.getElementById('chair-title').innerText;


    //get the price

    const productPriceField = document.getElementById('chair-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);


    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);

    

});



/////children section/////////


document.getElementById('children').addEventListener('click', function(){
 

    const productName = document.getElementById('children-title').innerText;


    //get the price

    const productPriceField = document.getElementById('children-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);


    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);

    

});


/////children section/////////


document.getElementById('sofa').addEventListener('click', function(){
 

    const productName = document.getElementById('sofa-title').innerText;


    //get the price

    const productPriceField = document.getElementById('sofa-price').innerText;

    const productPriceFloat = parseFloat(productPriceField);


    
    //set the price in total

    const totalPriceField = document.getElementById('total').innerText;
    const totalPriceFloat = parseFloat(totalPriceField);
     const totalPrice = totalPriceFloat.toFixed(2);

     price = price + productPriceFloat;

     const priceTwoDigit = price.toFixed(2);

     document.getElementById('total').innerText = priceTwoDigit;



     //set the price in total paid amount

     const totalPaidField = document.getElementById('total-paid').innerText;
     const totalPaidFloat = parseFloat(totalPaidField);

     document.getElementById('total-paid').innerText = priceTwoDigit;
     
     //remove purchase diabled button 
     const purchaseBtn = document.getElementById('purchase-btn');

     if (price > 0){
     
        purchaseBtn.removeAttribute('disabled');
     }

     else{
        purchaseBtn.setAttribute('disabled', true);
     }


     //remove coupon diabled button 
     const couponBtn = document.getElementById('coupon-apply');

     if (price >= 200){
     
        couponBtn.removeAttribute('disabled');
     }

     else{
        couponBtn.setAttribute('disabled', true);
     }


     // set coupon code

     let discountAmount = 0;
     let totalPaid = 0;
     
     document.getElementById('coupon-apply').addEventListener('click', function(){
        const couponField = document.getElementById('coupon-input').value;

        if( couponField =="SELL200"){

            discountAmount = price * 0.2

            const discountAmountTwoDigit = discountAmount.toFixed(2);

            

            const discountField = document.getElementById('discount-field').innerText;

            document.getElementById('discount-field').innerText = discountAmountTwoDigit;


            const afterDiscountAmount = price - discountAmount;

            const afterDiscountAmountTwoDigit = afterDiscountAmount.toFixed(2);

            const totalPaidField = document.getElementById('total-paid').innerText;
            const totalPaidFloat = parseFloat(totalPaidField);
       
            document.getElementById('total-paid').innerText = afterDiscountAmountTwoDigit;

        }

        
     });




    // product entry to calculation area

    const productEntry = document.getElementById('product-entry');

    const count = productEntry.childElementCount;

    const p = document.createElement('p');

    p.classList.add('added-products');

    p.innerHTML = `${count+1} . ${productName}`;
    
    productEntry.appendChild(p);

    

});

document.getElementById('modal-btn').addEventListener('click', function(){

window.location.href = 'index.html';
window.location.reload();

});






