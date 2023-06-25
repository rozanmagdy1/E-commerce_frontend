// filter for  casual
let MenSuits = document.getElementsByClassName('MenSuits');
let MensBlazers = document.getElementsByClassName('MensBlazers');
let suitPants = document.getElementsByClassName('suitPants');

document.getElementById('MenSuit').addEventListener("click",function () {
    shoppingFilter(MenSuits,MensBlazers,suitPants);
});
document.getElementById('MensBlazer').addEventListener("click",function () {
    shoppingFilter(MensBlazers,MenSuits,suitPants);
});
document.getElementById('suitPant').addEventListener("click",function () {
    shoppingFilter(suitPants,MenSuits,MensBlazers);
});
document.getElementById('CasualAll').addEventListener("click",function () {
    viewAll(MenSuits,MensBlazers,suitPants);
});

// filter for sports
let sportJackets = document.getElementsByClassName('sportJackets');
let SportTShirts = document.getElementsByClassName('SportTShirts');
let sportPants = document.getElementsByClassName('sportPants');

document.getElementById('sportJacket').addEventListener("click",function () {
    shoppingFilter(sportJackets,SportTShirts,sportPants);
});
document.getElementById('sportTShirt').addEventListener("click",function () {
    shoppingFilter(SportTShirts,sportJackets,sportPants);
});
document.getElementById('sportPajamas').addEventListener("click",function () {
    shoppingFilter(sportPants,sportJackets,SportTShirts);
});
document.getElementById('allSports').addEventListener("click",function () {
    viewAll(sportJackets,SportTShirts,sportPants);
});

// filter for swimming
let swimmingShorts = document.getElementsByClassName('swimmingShorts');
let beachShorts = document.getElementsByClassName('beachShorts');

document.getElementById('swimmingShort').addEventListener("click",function () {
    shoppingFilter(swimmingShorts,beachShorts);
});
document.getElementById('beachShort').addEventListener("click",function () {
    shoppingFilter(beachShorts,swimmingShorts);
});
document.getElementById('allSwimming').addEventListener("click",function () {
    viewAll(swimmingShorts,SportTShirts);
});

// filter for coats
let raincoats = document.getElementsByClassName('raincoats');
let jacket = document.getElementsByClassName('jacket');

document.getElementById('jacket').addEventListener("click",function () {
    shoppingFilter(raincoats,jacket);
});
document.getElementById('raincoats').addEventListener("click",function () {
    shoppingFilter(jacket,raincoats);
});
document.getElementById('coatsAll').addEventListener("click",function () {
    viewAll(raincoats,jacket);
});

// filter for home clothes
let pajamas = document.getElementsByClassName('pajamas');
let robe = document.getElementsByClassName('robe');

document.getElementById('robe').addEventListener("click",function () {
    shoppingFilter(pajamas,robe);
});
document.getElementById('pajama').addEventListener("click",function () {
    shoppingFilter(robe,pajamas);
});
document.getElementById('allHomeClothes').addEventListener("click",function () {
    viewAll(pajamas,robe);
});