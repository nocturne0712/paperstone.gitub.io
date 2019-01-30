var user = prompt("剪刀石頭布");
var com = Math.random();
function decide(a){
    if (a < 0.33){
        return "剪刀";
    }
     else if (a< 0.67){
        return "石頭";
    }
     if (a < 1){
        return "布";
    }
}
alert("電腦出"+ decide(com));
if (user == decide(com)){
    alert("平手");
}
else if (user == "剪刀"){
    if (decide(com) == "布"){
        alert("玩家贏");        
    }
    else {
        alert("電腦贏");
    }
}
else if (user == "石頭"){
    if (decide(com) == "剪刀"){
        alert("玩家贏");        
    }
    else {
        alert("電腦贏");
    }
}
else {
    if (decide(com) == "石頭"){
        alert("玩家贏");        
    }
    else {
        alert("電腦贏");
    }
}
    
    