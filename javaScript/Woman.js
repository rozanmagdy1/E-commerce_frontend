/** filter for Woman page **/
//filter for Tops
let boatNeck = document.getElementsByClassName('boatneck');
let coldShoulder = document.getElementsByClassName('coldsholder');
let vNeck = document.getElementsByClassName('vneck');

document.getElementById('vNeck').addEventListener("click",function () {
    shoppingFilter(vNeck,boatNeck,coldShoulder);
});
document.getElementById('boat').addEventListener("click",function () {
    shoppingFilter(boatNeck,vNeck,coldShoulder);
});
document.getElementById('cold').addEventListener("click",function () {
    shoppingFilter(coldShoulder,boatNeck,vNeck);
});
document.getElementById('allTops').addEventListener("click",function () {
    viewAll(boatNeck,coldShoulder,vNeck);
});


//filter for dresses
let tallDresses = document.getElementsByClassName('tall');
let shortDresses = document.getElementsByClassName('low');
let backlessDresses = document.getElementsByClassName('backless');

document.getElementById('tall').addEventListener("click",function () {
    shoppingFilter(tallDresses,shortDresses,backlessDresses);
});
document.getElementById('low').addEventListener("click",function () {
    shoppingFilter(shortDresses,backlessDresses,tallDresses);
});
document.getElementById('backless').addEventListener("click",function () {
    shoppingFilter(backlessDresses,tallDresses,shortDresses);
});
document.getElementById('allDresses').addEventListener("click",function () {
    viewAll(tallDresses,shortDresses,backlessDresses);
});

// filter for blouses
let collarBlouses = document.getElementsByClassName('collar');
let highNeckBlouses = document.getElementsByClassName('highnick');
let hoodedBlouses = document.getElementsByClassName('hooded');

document.getElementById('collar').addEventListener("click",function () {
    shoppingFilter(collarBlouses,highNeckBlouses,hoodedBlouses);
});
document.getElementById('highNeck').addEventListener("click",function () {
    shoppingFilter(highNeckBlouses,collarBlouses,hoodedBlouses);
});
document.getElementById('hoody').addEventListener("click",function () {
    shoppingFilter(hoodedBlouses,collarBlouses,highNeckBlouses);
});
document.getElementById('allBlouses').addEventListener("click",function () {
    viewAll(collarBlouses,highNeckBlouses,hoodedBlouses);
});

//filter bags
let ClassicBag = document.getElementsByClassName('Classicbags');
let CasualBag = document.getElementsByClassName('Casualbags');

document.getElementById('classicBag').addEventListener("click",function () {
    shoppingFilter(ClassicBag,CasualBag);
});
document.getElementById('casualBag').addEventListener("click",function () {
    shoppingFilter(CasualBag,ClassicBag);
});
document.getElementById('allBags').addEventListener("click",function () {
    viewAll(ClassicBag,CasualBag);
});

//filter shoes
let ClassicShoes = document.getElementsByClassName('Classicshoes');
let CasualShoes = document.getElementsByClassName('Casualshoes');

document.getElementById('classicShoes').addEventListener("click",function () {
    shoppingFilter(ClassicShoes,CasualShoes);
});
document.getElementById('casualShoes').addEventListener("click",function () {
    shoppingFilter(CasualShoes,ClassicShoes);
});
document.getElementById('allShoes').addEventListener("click",function () {
    viewAll(CasualShoes,ClassicShoes);
});

//filter bottoms
let skirts = document.getElementsByClassName('skirts');
let pants = document.getElementsByClassName('pants');
let shorts = document.getElementsByClassName('short');

document.getElementById('skirt').addEventListener("click",function () {
    shoppingFilter(skirts,pants,shorts);
});
document.getElementById('pant').addEventListener("click",function () {
    shoppingFilter(pants,skirts,shorts);
});
document.getElementById('short').addEventListener("click",function () {
    shoppingFilter(shorts,skirts,pants);
});
document.getElementById('allBottoms').addEventListener("click",function () {
    viewAll(shorts,skirts,pants);
});