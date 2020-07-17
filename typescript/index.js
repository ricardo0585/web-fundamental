var ProductDescription = function (pizza) {
    var valueIncrement = 1;
    if (pizza.inStore)
        valueIncrement = 1.5;
    var totalPrice = (pizza.price * valueIncrement) / pizza.size;
    var productDescription = '';
    productDescription = pizza.name + " - " + totalPrice + " " + pizza.currency + "/" + pizza.sizeUnity;
    return productDescription;
};
var pizzaData = [{
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
