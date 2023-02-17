let items = [];

function AddItems(name, price){
    let newItem = {
        Name: name,
        price: price
    };

    items.push(newItem);
    console.log(items)
}

function DisplayItems(){
    items.forEach((i) => {
        console.log(`${i.Name} - $${i.price}`)
    });
}

function TotalItems(){
    let total = 0;
    items.forEach((t) => {
        total = total + t.price;
    });
    console.log(`$${total}`);
}
