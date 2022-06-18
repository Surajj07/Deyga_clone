arr1=[{id:"1", name:"Charcol Detox Face mask",review:"7 reviews",mrp:"MRP ₹ 600.00",del:"",image:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/Charcoal-Detoxmas_400x.jpg?v=1647862612",image2:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/Charcoal-Detoxmas_400x.jpg?v=1647862612"},
{id:"2", name:"Rose Scrub",review:"9 reviews",mrp:"MRP ₹ 570.00",del:"",image:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/Rose_1_400x.jpg?v=1647863167",image2:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/J8A6222_400x.jpg?v=1647863167"},
{id:"3", name:"Mint Lip Scrub",review:"8 reviews",mrp:"MRP ₹ 249.00",del:"₹290.00",image:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/Mint_400x.jpg?v=1647863062",image2:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/J8A6498_400x.jpg?v=1647863062"},
{id:"4", name:"Anti Aging Serum",review:"11 reviews",mrp:"MRP ₹730.00",del:"",image:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/Anti-Ageing_400x.jpg?v=1647864574",image2:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/J8A5067_400x.jpg?v=1647864574"},

];
arr2=[ {id:"5", name:"Neem and Turmeric Bath Bar",review:"10 reviews",mrp:"MRP ₹ 270.00",del:"₹320.00",image:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/NeemandTurmericBathBar_400x.jpg?v=1647863923",image2:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/Untitled-2_5857b203-f8e2-447f-879e-b2c279bd44cd_400x.png?v=1647863923"},
{id:"6", name:"Tea Tree Essential Oil",review:"13 reviews",mrp:"MRP ₹ 350.00",del:"",image:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/TeaTree_1_400x.jpg?v=1647865211",image2:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/J8A6545_400x.jpg?v=1647865211"},
{id:"7", name:"Lemon Mist",review:"9 reviews",mrp:"MRP ₹ 490.00",del:"",image:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/Lemon_400x.jpg?v=1647862222",image2:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/J8A5458_400x.jpg?v=1647862222"},
{id:"8", name:"Chocolate Body Butter",review:"7 reviews",mrp:"MRP ₹ 550",del:"",image:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/CHOCOLATE_20BODY_20BUTTER_400x.jpg?v=1641031450",image2:"https://cdn.shopify.com/s/files/1/0034/7901/1441/products/J8A5646_400x.jpg?v=1641031450"},]



parent=document.querySelector("#one")
parent2=document.querySelector("#two")

arr1.forEach(function(elem){
    divs=document.createElement("div");
    divs.setAttribute("class","oness");

    image=document.createElement("img")
    image.src=elem.image;
    image.setAttribute("id","picsss")

    // $(image).hover(function () {
       
    //    image.src = elem.image2;
    //        }, function () {
    //            // out
    //             image.src = elem.image;
    //        }
    //     );
//            $("#pics").hover(function () {
//     //stuff to do on mouse enter
//     image.src = elem.image2;
// }, 
// function () {
//     //stuff to do on mouse leave
//     image.src = elem.image;
// });
    names=document.createElement("p")
    names.innerText=elem.name;
    names.setAttribute("class","names")

    let rate=document.createElement("span")
    rate.setAttribute("class","fa fa-star checked");

    let rate2=document.createElement("span")
    rate2.setAttribute("class","fa fa-star checked");

    let rate3=document.createElement("span")
    rate3.setAttribute("class","fa fa-star checked");

    let rate4=document.createElement("span")
    rate4.setAttribute("class","fa fa-star checked");

    let rate5=document.createElement("span")
    rate5.setAttribute("class","fa fa-star checked");

    // let div2=document.createElement("div")
    // div2.setAttribute("id","priceAndDel")

    let reivs=document.createElement("p")
    reivs.innerText=elem.review;
    reivs.style.display="inline-block";
    reivs.style.marginLeft="10px"

    let dels=document.createElement("del")
    dels.innerText=elem.del;
    dels.style.marginLeft="15px"
    dels.style.display="inline-block"

    let mrps=document.createElement("p")
    mrps.innerText=elem.mrp;
    mrps.style.display="inline-block"

    let div2=document.createElement("div")
    let div3=document.createElement("div")
    let div4=document.createElement("div")
    div3.setAttribute("class","div3")
    div4.setAttribute("class","div4")

    let wish=document.createElement("i")
    wish.setAttribute("class","fa fa-heart-o")
    wish.setAttribute("id","suraj")
    wish.style.fontSize="28px";
    wish.style.border="1px solid white"

    let cart=document.createElement("button");

    cart.innerText="Add To Cart";
    cart.setAttribute("class","cart_button")

    div3.append(mrps,dels)
    div2.append(cart)
    div4.append(rate,rate2,rate3,rate4,rate5,reivs,wish)
    divs.append(image,names,div4,div3,div2)
    
    parent.append(divs)
    
})
arr2.forEach(function(elem){
    divs=document.createElement("div")
    divs.setAttribute("class","oness")

    image=document.createElement("img")
    image.src=elem.image;
    image.setAttribute("id","picsss")

    names=document.createElement("p")
    names.innerText=elem.name;

    let rate=document.createElement("span")
    rate.setAttribute("class","fa fa-star checked");

    let rate2=document.createElement("span")
    rate2.setAttribute("class","fa fa-star checked");

    let rate3=document.createElement("span")
    rate3.setAttribute("class","fa fa-star checked");

    let rate4=document.createElement("span")
    rate4.setAttribute("class","fa fa-star checked");

    let rate5=document.createElement("span")
    rate5.setAttribute("class","fa fa-star checked");

    // let div2=document.createElement("div")
    // div2.setAttribute("id","priceAndDel")

    let reiv=document.createElement("p")
    reiv.innerText=elem.review;
    reiv.style.display="inline-block";
    reiv.style.marginLeft="10px";

    let del=document.createElement("del")
    del.innerText=elem.del;
    del.style.marginLeft="20px";
    del.style.display="inline-block"

    let mrp=document.createElement("p")
    mrp.innerText=elem.mrp;
    mrp.style.display="inline-block"

    let div2=document.createElement("div")
    let div3=document.createElement("div")
    let div4=document.createElement("div")
    div3.setAttribute("class","div3")
    div4.setAttribute("class","div4")

    let wish=document.createElement("i")
    wish.setAttribute("class","fa fa-heart-o")
    wish.setAttribute("id","suraj")
    wish.style.fontSize="28px";
    wish.style.border="1px solid white"

    let cart=document.createElement("button");

    cart.innerText="Add To Cart";
    cart.setAttribute("class","cart_button")

    div2.append(cart)
    div3.append(mrp,del)
    div4.append(rate,rate2,rate3,rate4,rate5,reiv,wish)
    divs.append(image,names,div4,div3,div2)
    parent2.append(divs)
})



var sliderappend=document.querySelector("#sliderappend")
var btn11=document.querySelector("#btn1")
var btn22=document.querySelector("#btn2")


btn11.onclick=function(){
    sliderappend.style.transform="translate(0px)";
    
}
btn22.onclick=function(){
    sliderappend.style.transform="translate(-100%)";

}

