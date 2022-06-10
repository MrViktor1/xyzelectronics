class ItemsController {

    constructor(currentId=0){
        this.items = [];
        this.currentId = currentId;
    }
    //Step 3: Adding A New Item Programmatically
    ItemsController() {

    }
    addItem(name,description,price,img){
        const item = {
            id: this.currentId++,
            name: name,
            description: description,
            price:price,
            img: img
        }

       
        // Push the item to the items property
    this.items.push(item);   

    }
}

let tv = new ItemsController();
tv.addItem('samsung','tv samsung',2000,'src')
tv.addItem('LG','Lg TV',1500,'src')
//addItem is used to add item in the items array
console.log(tv.items);


