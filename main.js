menu_list_array = ["Veg Margherita Pizza","Chicken Pizza", "Chicken Extravanganza Pizza", "The Four Cheese Pizza"];

function addTop(){
    var newItem = document.getElementById("add_item").value;
    menu_list_array.push("newItem");
    document.getElementById("add_item").innerHTML="";
}

function addItem(){
    addTop();
    document.getElementById("display_addedmenu").innerHTML=menu_list_array;
}

