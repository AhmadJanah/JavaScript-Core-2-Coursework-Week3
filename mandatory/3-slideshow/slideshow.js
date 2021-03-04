// Write your code here
function backImage(){
    let image1 = document.querySelector("img");
    let src1 = image1.src;
    let i = 0;
    if (src1[src1.length-5] == 0)
        i = 4;
    else
        i = Number((src1[src1.length-5]))-1;
    // alert(src1.substring(0,src1.length-5));
    let newSrc = src1.substring(0,src1.length-5)+ i+".jpg";
    image1.src = newSrc;
    console.log(image1);
}

function forwardImage(){
    let image1 = document.querySelector("img");
    let src1 = image1.src;
    let i = 0;
    if (src1[src1.length-5] == 4)
        i = 0;
    else
        i = Number((src1[src1.length-5]))+1;
    // alert(src1.substring(0,src1.length-5));
    let newSrc = src1.substring(0,src1.length-5)+ i+".jpg";
    image1.src = newSrc;
    console.log(image1);
}

var myInterval;

function autoGo(callback){
    clearInterval(myInterval);
    myInterval = setInterval(() => {
        callback();
    }, 3000);
}

function stopIt(){
    clearInterval(myInterval);
}