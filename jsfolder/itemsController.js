class ItemsController {

    constructor(currentId=0){
        this.items = [];
        this.currentId = currentId;
    }
    //Step 3: Adding A New Item Programmatically
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
    setLocalStorage(){
        localStorage.setItem("item", JSON.stringify(this.items));
        localStorage.setItem("currentID", JSON.stringify(this.currentID));
    }
    loadLocalStorage(){
        this.items = JSON.parse(localStorage.getItem("item"))
        this.currentID = JSON.parse(localStorage.getItem('currentID'))
     }
}

//let tv = new ItemsController();
// tv.addItem('samsung','tv samsung',2000,'src')
// tv.addItem('LG','Lg TV',1500,'src')
//addItem is used to add item in the items array
//console.log(tv.items);


