// ここからコードを書きます🤗
// // alert(1);
// console.log("初めてのジャバスクリプト");
// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5")

// const a = "ジーズアカデミー";
// console.log(a);

// const ten = 10;
// const kekka = ten + ten;
// console.log(kekka);

// const aa = 3;

// if (aa===1){
// console.log("大吉");
// } else if (aa===2){
// console.log("中吉");
// } else if (aa===3){
// console.log("小吉");
// } else{
// console.log("吉");
// }

// const point = 60;
// if (point >=80){
// console.log("素晴らしい！おめでとう！");
// } else {
// console.log("もっと頑張りましょう");
// }

// const random = Math.floor(Math.random()*5);
// console.log(random + "が出ました")
// if (random===0){
//     console.log("大吉");
//     } else if (random===1){
//     console.log("中吉");
//     } else if (random===2){
//     console.log("小吉");
//     } else if(random===3){
//     console.log("吉");
//     } else if (random===4){
//     console.log("末吉");    
//     }


// $("h1").on("click", function () {
//     $("h1").css("color", "red");
//   });


$(".random").on("click", function () {
    // クリックされたらしたいことを記述します🤗
    // $("h1").text("押されました!");
const random = Math.floor(Math.random()*5);
console.log(random + "が出ました")
if (random===0){
    console.log("大吉");
    $("h1").text("大吉！");
    $("h1").css("color","red");
    } else if (random===1){
    console.log("中吉");
    $("h1").text("中吉！");
    $("h1").css("color","blue");
    } else if (random===2){
    console.log("小吉");
    $("h1").text("小吉！");
    $("h1").css("color","blue");
    } else if(random===3){
    console.log("吉");
    $("h1").text("吉！");
    $("h1").css("color","blue");
    } else if (random===4){
    console.log("末吉");
    $("h1").text("末吉！");
    $("h1").css("color","blue");
    }
});