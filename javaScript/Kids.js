/** filter for kids page **/
//filter for girls
let G_pants = document.getElementsByClassName('G_pants');
let G_skirts = document.getElementsByClassName('G_skirts');
let G_dresses = document.getElementsByClassName('G_dresses');
let G_jump = document.getElementsByClassName('G_jump');
let G_full = document.getElementsByClassName('G_full');
let G_winter = document.getElementsByClassName('G_winter');

document.getElementById('Gpants').addEventListener("click",function () {
    shoppingFilter(G_pants,G_skirts,G_dresses,G_jump,G_full,G_winter);
});
document.getElementById('Gskirts').addEventListener("click",function () {
    shoppingFilter(G_skirts,G_pants,G_dresses,G_jump,G_full,G_winter);
});
document.getElementById('Gdresses').addEventListener("click",function () {
    shoppingFilter(G_dresses,G_pants,G_skirts,G_jump,G_full,G_winter);
});
document.getElementById('Gjump').addEventListener("click",function () {
    shoppingFilter(G_jump,G_pants,G_skirts,G_dresses,G_full,G_winter);
});
document.getElementById('Gfull').addEventListener("click",function () {
    shoppingFilter(G_full,G_pants,G_skirts,G_dresses,G_jump,G_winter);
});
document.getElementById('Gwinter').addEventListener("click",function () {
    shoppingFilter(G_winter,G_pants,G_skirts,G_dresses,G_jump,G_full);
});
document.getElementById('Gall').addEventListener("click",function () {
    viewAll(G_pants,G_skirts,G_dresses,G_jump,G_full,G_winter);
});

//filter for boys
let B_pants = document.getElementsByClassName('B_pants');
let B_shirt = document.getElementsByClassName('B_shirt');
let B_full = document.getElementsByClassName('B_full');
let B_winter = document.getElementsByClassName('B_winter');

document.getElementById('Bfull').addEventListener("click",function () {
    shoppingFilter(B_full,B_shirt,B_pants,B_winter);
});
document.getElementById('Bpants').addEventListener("click",function () {
    shoppingFilter(B_pants,B_full,B_shirt,B_winter);
});
document.getElementById('Btshirts').addEventListener("click",function () {
    shoppingFilter(B_shirt,B_full,B_winter,B_pants);
});
document.getElementById('Bwinter').addEventListener("click",function () {
    shoppingFilter(B_winter,B_full,B_shirt,B_pants);
});
document.getElementById('Ball').addEventListener("click",function () {
    viewAll(B_winter,B_full,B_shirt,B_pants);
});

//filter for baby
let Y_full = document.getElementsByClassName('Y_full');
let Y_dress = document.getElementsByClassName('Y_dress');
let Y_pyjama = document.getElementsByClassName('Ypyjama');

document.getElementById('Yfull').addEventListener("click",function () {
    shoppingFilter(Y_full,Y_dress,Y_pyjama);
});
document.getElementById('Ydresses').addEventListener("click",function () {
    shoppingFilter(Y_dress,Y_full,Y_pyjama);
});
document.getElementById('Ypyjama').addEventListener("click",function () {
    shoppingFilter(Y_pyjama,Y_full,Y_dress);
});
document.getElementById('Yall').addEventListener("click",function () {
    viewAll(Y_pyjama,Y_full,Y_dress);
});

//filter for shoes
let SH_girls = document.getElementsByClassName('SH_girls');
let SH_boyss = document.getElementsByClassName('SH_boyss');

document.getElementById('Shgirls').addEventListener("click",function () {
    shoppingFilter(SH_girls,SH_boyss);
});
document.getElementById('Shboys').addEventListener("click",function () {
    shoppingFilter(SH_boyss,SH_girls);
});
document.getElementById('Shall').addEventListener("click",function () {
    viewAll(SH_girls,SH_boyss);
});

//filter for socks
let S_girls = document.getElementsByClassName('S_girls');
let S_boyss = document.getElementsByClassName('S_boyss');

document.getElementById('Sgirls').addEventListener("click",function () {
    shoppingFilter(S_girls,S_boyss);
});
document.getElementById('Sboys').addEventListener("click",function () {
    shoppingFilter(S_boyss,S_girls);
});
document.getElementById('Sall').addEventListener("click",function () {
    viewAll(S_girls,S_boyss);
});

//filter for accessories
let hair = document.getElementsByClassName('hair');
let hand = document.getElementsByClassName('hand');

document.getElementById('hair').addEventListener("click",function () {
    shoppingFilter(hair,hand);
});
document.getElementById('hand').addEventListener("click",function () {
    shoppingFilter(hand,hair);
});
document.getElementById('Hall').addEventListener("click",function () {
    viewAll(hair,hand);
});