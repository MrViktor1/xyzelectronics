const itemsController = new ItemsController(0);
const itemsContainer = document.getElementById("list-items");
// itemsController.addItem(
//   "samsung",
//   "tv samsung",
//   2000,
//   "https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-260nw-314401364.jpg"
// );
// itemsController.addItem("LG", "Lg TV", 1500, "./imgfolder/Tv_img/hinsense-qled.jpeg");
// itemsController.addItem("LG", "Lg TV", 1500, "./imgfolder/Tv_img/hinsense-qled.jpeg");
// itemsController.addItem("LG", "Lg TV", 1500, "./imgfolder/Tv_img/hinsense-qled.jpeg");
// //let item;

const addItemCard = function () {
 // let itemsArr = itemsController.items;
 itemsController.loadLocalStorage();
 let item = itemsController.item;
 
  for (let i = 0; i < itemsArr.length; i++) {
    const itemHTML = `
           <div class="card" style="width: 20rem;">
           <img src= ${item[i].img} width="300" height="250"  alt="product image">
           <div class="card-body">
           <h5 class="card-title"> ${item[i].name}</h5>
           <p class="card-text"> ${item[i].description} </p>
           <p class="card-text"> <span>$</span> ${item[i].price} </p>
           <a href="#" class="btn btn-primary">Add</a>
         </div>\
     
     </div>`;
    itemsContainer.innerHTML += itemHTML;
  }
  if(localStorage.getItem("item")){
    itemsController.loadLocalStorage();
    addItemCard()
  //itemsContainer.innerHTML += itemHTML
}
};

addItemCard();
// const storeAtLocalStorage = function(){
//     if(!localStorage.getItem("items")){
//         const sampleItems = [
//         {
//         img:'https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-260nw-314401364.jpg', 
//          'name':'samsung',
//          'description':'tv samsung',
//         'price':2000
//     },
//         {
//         'img':'./imgfolder/Tv_img/hinsense-qled.jpeg',
//         'name':'LG',
//         'description':'LG tv',
//         'price':2000}
//     ];
//         localStorage.setItem("items", JSON.stringify(sampleItems));
//     }
// }
// storeAtLocalStorage()

// const loadItemsFromLocalStorage= function() {
//     const storageItems = localStorage.getItem("items")
//     if (storageItems) {
//         const items = JSON.parse(storageItems)
//         console.log(items);
//         //TODO load the items into the local items structure (this.items) 

//     }
// }

// loadItemsFromLocalStorage()

const loadCardsListFromItemsController = function(){
    for(let i = 0, size = itemsController.items.length; i < size ; i++){
        const item = itemsController.items[i];
        addItemCard(item);
    }
}

storeAtLocalStorage();
//itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();