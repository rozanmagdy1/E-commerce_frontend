//filter for MakeUp Brushes
let BrushesSets = document.getElementsByClassName('BrushesSets');
let EyeAndLipBrushes = document.getElementsByClassName('EyeAndLipBrushes');
let FaceBrushesAndBrushesAccessories = document.getElementsByClassName('FaceBrushesAndBrushesAccessories');

document.getElementById('BrushesSet').addEventListener("click",function () {
    shoppingFilter(BrushesSets,EyeAndLipBrushes,FaceBrushesAndBrushesAccessories);
});
document.getElementById('EyeAndLipBrush').addEventListener("click",function () {
    shoppingFilter(EyeAndLipBrushes,BrushesSets,FaceBrushesAndBrushesAccessories);
});
document.getElementById('FaceBrushesAndBrushesAccessory').addEventListener("click",function () {
    shoppingFilter(FaceBrushesAndBrushesAccessories,BrushesSets,EyeAndLipBrushes);
});
document.getElementById('ALLMakeUpBrush').addEventListener("click",function () {
    viewAll(BrushesSets,EyeAndLipBrushes,FaceBrushesAndBrushesAccessories);
});

//filter for EyeLashes
let FalseEyeLashes = document.getElementsByClassName('FalseEyeLashes');
let EyeLashesTools = document.getElementsByClassName('EyeLashesTools');

document.getElementById('FalseEyeLashes').addEventListener("click",function () {
    shoppingFilter(FalseEyeLashes,EyeLashesTools);
});
document.getElementById('EyeLashesTools').addEventListener("click",function () {
    shoppingFilter(EyeLashesTools,FalseEyeLashes);
});
document.getElementById('AllEyeLashes').addEventListener("click",function () {
    viewAll(FalseEyeLashes,EyeLashesTools);
});

// filter for Nail Art & Tools
let PressOnNails = document.getElementsByClassName('PressOnNails');
let NailArtEquipments = document.getElementsByClassName('NailArtEquipments');
let NailArtTools = document.getElementsByClassName('NailArtTools');

document.getElementById('PressOnNails').addEventListener("click",function () {
    shoppingFilter(PressOnNails,NailArtEquipments,NailArtTools);
});
document.getElementById('NailArtEquipments').addEventListener("click",function () {
    shoppingFilter(NailArtEquipments,PressOnNails,NailArtTools);
});
document.getElementById('NailArtTools').addEventListener("click",function () {
    shoppingFilter(NailArtTools,PressOnNails,NailArtEquipments);
});
document.getElementById('ALLNail').addEventListener("click",function () {
    viewAll(PressOnNails,NailArtEquipments,NailArtTools);
});

//filter Tattoos & Body Arts
let TemporaryTattoos = document.getElementsByClassName('TemporaryTattoos');
let TattoosStencilsAndAccessories = document.getElementsByClassName('TattoosStencilsAndAccessories');

document.getElementById('TemporaryTattoos').addEventListener("click",function () {
    shoppingFilter(TemporaryTattoos,TattoosStencilsAndAccessories);
});
document.getElementById('TattoosStencilsAndAccessories').addEventListener("click",function () {
    shoppingFilter(TattoosStencilsAndAccessories,TemporaryTattoos);
});
document.getElementById('AllBODY').addEventListener("click",function () {
    viewAll(TemporaryTattoos,TattoosStencilsAndAccessories);
});

//filter MakeUp Bags & Tools
let MakeUpBags = document.getElementsByClassName('MakeUpBags');
let SpongesAndBlenders = document.getElementsByClassName('SpongesAndBlenders');
let MakeUpOrganizers = document.getElementsByClassName('MakeUpOrganizers');

document.getElementById('MakeUpBags').addEventListener("click",function () {
    shoppingFilter(MakeUpBags,SpongesAndBlenders,MakeUpOrganizers);
});
document.getElementById('SpongesAndBlenders').addEventListener("click",function () {
    shoppingFilter(SpongesAndBlenders,MakeUpBags,MakeUpOrganizers);
});
document.getElementById('MakeUpOrganizers').addEventListener("click",function () {
    shoppingFilter(MakeUpOrganizers,MakeUpBags,SpongesAndBlenders);
});
document.getElementById('ALLMakeUpBags').addEventListener("click",function () {
    viewAll(MakeUpBags,SpongesAndBlenders,MakeUpOrganizers);
});

//filter Personal Care
let OralCare = document.getElementsByClassName('OralCare');
let SkinCareTools = document.getElementsByClassName('SkinCareTools');
let HairTools = document.getElementsByClassName('HairTools');

document.getElementById('OralCare').addEventListener("click",function () {
    shoppingFilter(OralCare,SkinCareTools,HairTools);
});
document.getElementById('SkinCareTools').addEventListener("click",function () {
    shoppingFilter(SkinCareTools,OralCare,HairTools);
});
document.getElementById('HairTools').addEventListener("click",function () {
    shoppingFilter(HairTools,OralCare,SkinCareTools);
});
document.getElementById('ALLPersonalCare').addEventListener("click",function () {
    viewAll(OralCare,SkinCareTools,HairTools);
});

//filter Hair Wigs
let SyntheticWovenWigs = document.getElementsByClassName('SyntheticWovenWigs');
let ToolsAndWigCaps = document.getElementsByClassName('ToolsAndWigCaps');

document.getElementById('SyntheticWovenWigs').addEventListener("click",function () {
    shoppingFilter(SyntheticWovenWigs,ToolsAndWigCaps);
});
document.getElementById('ToolsAndWigCaps').addEventListener("click",function () {
    shoppingFilter(ToolsAndWigCaps,SyntheticWovenWigs);
});
document.getElementById('ALLHairWigs').addEventListener("click",function () {
    viewAll(SyntheticWovenWigs,ToolsAndWigCaps);
});