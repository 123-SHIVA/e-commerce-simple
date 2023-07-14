
let storeData=[] ;
let yourCard = [];


fetch('https://fakestoreapi.com/products')
.then((result)=>result.json())
.then((data)=>{
    storeData = data;
    let container = document.querySelector('.card-container');
    createCard(storeData,container,"all item");
}) 



function addCard(index)
{
    yourCard.push(storeData[index]);
    let container = document.querySelector('.add-item-container');
    container.innerHTML="";
    createCard(yourCard,container,"added item");
}




function createCard(data, container,from)
{


    let button='';
    data.map((item,index)=>{
        
        if(from=='added item')
        {
            button = `<button id="btn" >Buy</button>`;
        }
        else{
            
            button = `<button id="btn"  onclick=addCard(${index}) >Add to cart</button>`;
        }

        let card=document.createElement('div');
        card.className='card';


        const data = item;
        console.log(data)
    card.innerHTML = `<img onclick=reviwProduct(${index}) id="img" src="${item.image}" alt="">

    <div class="info">
        <p id="category">${item.title.slice(0,30)}</p>
        <p id="price">price:${item.price}</p>
        ${button}
    </div>
`;

container.appendChild(card);


})

}



function reviwProduct(index){

    console.log(storeData[index])
    const data = storeData[index];
    localStorage.setItem("product",JSON.stringify(data));
    location.href ="./product.html";
}