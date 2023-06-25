//filter method
function shoppingFilter(Visible,...hidden){
    console.log(hidden);
    for(let i = 0; i < Visible.length; i++){
        Visible[i].style.display = 'block';
    }
    for(let j = 0; j < hidden.length; j++){
        // return hidden[j] j html collections
        for(let i = 0; i < hidden[j].length; i++){
            hidden[j][i].style.display = 'none';
        }
    }
}

//view all method
function viewAll(...visible){
    for(let j = 0; j < visible.length; j++){
        for(let i = 0; i < visible[j].length; i++){
            visible[j][i].style.display = 'block';
        }
    }}