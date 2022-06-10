const itemsController = new ItemsController(0);
itemsController.addItem('samsung','tv samsung',2000,'https://image.shutterstock.com/image-photo/tv-flat-screen-lcd-plasma-260nw-314401364.jpg')
itemsController.addItem('LG','Lg TV',1500,'src')
 //let item;

const addItemCard = function(){
    let itemsArr = itemsController.items;
    const itemsContainer = document.getElementById("list-items");
    for(let i=0;i<itemsArr.length;i++){
        const itemHTML = `<div class='row'>
               <div class='col'>
           <div class="card" style="width: 20rem;">
           <img src= ${itemsArr[i].img} width="300" height="250"  alt="product image">
            <div class="card-body">
              <h5 class="card-title"> ${itemsArr[i].name}</h5>

              <p class="card-text"> ${itemsArr[i].description} </p>
              <p class="card-text"> <span>$</span> ${itemsArr[i].price} </p>
                  
                <a href="#" class="btn btn-primary">Add</a>
            </div>\
        </div>
        </div>
        </div>`;
        itemsContainer.innerHTML += itemHTML;
    }
    
    
    //itemsContainer.innerHTML += itemHTML

}
addItemCard();