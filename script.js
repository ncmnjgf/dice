var n = Math.floor(Math.random()*6)+1;
var rangeNum = "dice" + n + ".png"
var randomImg = "images/" + rangeNum
var  img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src",randomImg);



var n1 = Math.floor(Math.random()*6)+1;
var rangeNum1 = "dice" + n1 + ".png"
var randomImg1 = "images/" + rangeNum1
var  img2 =document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImg1);

if(randomImg > randomImg1){
    document.querySelector("h1").textContent = "🔥 Player 1 Won "
}
else if (randomImg < randomImg1){
    document.querySelector("h1").textContent = "Player 2 is a winner"

}
else{
    document.querySelector("h1").textContent = "Draw"
}

