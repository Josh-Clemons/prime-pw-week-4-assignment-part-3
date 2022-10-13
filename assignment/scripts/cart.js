console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem( item ) {
    if (isFull() === false) { //checking basket to verify it is not full
        basket.push( item );
        console.log( 'added' , item , 'to basket:', basket );
        return true;
    }
    else {
        console.log( 'Basket is full!' , item , "not added to current basket: ", basket );
        return false;
    }
} //end addItem function


//testing to fill basket and verify contents
console.log( 'addItem test should return true:', addItem( "Shoes" ), `current items in basket: ${basket} ` );
addItem( "socks" );
addItem( "shirt" );
addItem( "pants" );
addItem( "hat" );

function listItems () {
    for ( items of basket ) {
        console.log( items );
    } //end items of basket loop
    return true;
} //end listItems function

console.log( 'listItems should display each basket item on a new line:' );
listItems ();


function empty () {
    basket = [];
    console.log( 'Basket is empty.', basket );
    return true;
} //end empty function

console.log( 'Testing empty function, should return true:' , empty() );


function isFull () {
    if ( (basket.length) < maxItems ) {
        console.log( 'basket is not full,' , basket.length , "items" );
        return false;
    }
    console.log( 'basket is full,' , basket.length , "items" );
    return true;

}//end isFull function
console.log( 'testing isFull, should return false: ' , isFull() );


function removeItem ( item ) {
    
    let index = basket.indexOf( item );

    if ( index >= 0 ) { //removing item from basket if found
        basket.splice( index, 1 );
        console.log( 'Removed ' , item , 'from basket');
        return item;
    }
    else { 
        console.log( item , 'not found in basket' );
        return null;
    }
} //end removeItem function

//adding items, then testing remove item function
addItem( 'shirt' );
addItem( 'glasses' );

console.log( 'testing removeItem, should return "shirt"' , removeItem( 'shirt' ) );