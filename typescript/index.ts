interface Pizza {
    name: string,
    price: number,
    size: number,
    sizeUnity: string,
    currency: string,
    inStore: boolean
}



const ProductDescription = (pizza: Pizza): string => {

    let valueIncrement: number = 1;

    if (pizza.inStore)
        valueIncrement = 1.5;

    const totalPrice = (pizza.price * valueIncrement) / pizza.size;

    let productDescription: string = '';
    productDescription = `${pizza.name} - ${totalPrice} ${pizza.currency}/${pizza.sizeUnity}`;

    return productDescription;
}

let pizzaData: Array<Pizza> = [{
    name: 'franbacon',
    price: 50, size: 8,
    inStore: true,
    currency: 'R$',
    sizeUnity: 'fatia'
}, {
    name: 'marguerita',
    price: 50, size: 8,
    inStore: false,
    currency: 'R$',
    sizeUnity: 'fatia'
}];
console.log(ProductDescription(pizzaData[0]));
console.log(ProductDescription(pizzaData[1]));