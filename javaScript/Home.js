/** filter for Home page **/
//filter for home decor
let pillows = document.getElementsByClassName('pillows');
let carpets = document.getElementsByClassName('carpets');
let wall = document.getElementsByClassName('wall');

document.getElementById('Pillows').addEventListener("click",function () {
    shoppingFilter(pillows,carpets,wall);
});
document.getElementById('Carpets').addEventListener("click",function () {
    shoppingFilter(carpets,pillows,wall);
});
document.getElementById('wall').addEventListener("click",function () {
    shoppingFilter(wall,pillows,carpets);
});
document.getElementById('decorAll').addEventListener("click",function () {
    viewAll(pillows,carpets,wall);
});

//filter for bedding
let bedSkirts = document.getElementsByClassName('bedSkirts');
let bedCovers = document.getElementsByClassName('bedCovers');
let blankets = document.getElementsByClassName('blankets');

document.getElementById('bedSkirt').addEventListener("click",function () {
    shoppingFilter(bedSkirts,bedCovers,blankets);
});
document.getElementById('bedCover').addEventListener("click",function () {
    shoppingFilter(bedCovers,bedSkirts,blankets);
});
document.getElementById('blankets').addEventListener("click",function () {
    shoppingFilter(blankets,bedSkirts,bedCovers);
});
document.getElementById('allBeds').addEventListener("click",function () {
    viewAll(bedSkirts,bedCovers,blankets);
});

//filter for kitchen
let tables = document.getElementsByClassName('tables');
let aprons = document.getElementsByClassName('aprons');
let mats = document.getElementsByClassName('mats');

document.getElementById('Table').addEventListener("click",function () {
    shoppingFilter(tables,aprons,mats);
});
document.getElementById('apron').addEventListener("click",function () {
    shoppingFilter(aprons,tables,mats);
});
document.getElementById('mat').addEventListener("click",function () {
    shoppingFilter(mats,tables,aprons);
});
document.getElementById('allKitchen').addEventListener("click",function () {
    viewAll(tables,aprons,mats);
});

//filter for lighting
let indoors = document.getElementsByClassName('indoors');
let Novelties = document.getElementsByClassName('Novelties');

document.getElementById('Novelty').addEventListener("click",function () {
    shoppingFilter(indoors,Novelties);
});
document.getElementById('inDoor').addEventListener("click",function () {
    shoppingFilter(Novelties,indoors);
});
document.getElementById('allLights').addEventListener("click",function () {
    viewAll(indoors,Novelties);
});

//filter for dinning
let dinningSets = document.getElementsByClassName('dinningSets');
let plates = document.getElementsByClassName('plates');

document.getElementById('set').addEventListener("click",function () {
    shoppingFilter(dinningSets,plates);
});
document.getElementById('plate').addEventListener("click",function () {
    shoppingFilter(plates,dinningSets);
});
document.getElementById('dinningAll').addEventListener("click",function () {
    viewAll(dinningSets,plates);
});

//filter for garden
