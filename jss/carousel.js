var images = ["images/banner1.jpg",
"images/banner2.jpg","images/banner3.jpg"];

var img = document.getElementById("carousel");
img.src = images[0];
let position = 0;
const moveRight = () =>{
    if (position >= images.length - 1) {
        position = 0
        img.src = images[position];
        return;
    }
    img.src = images[position + 1];
    position++;
}
const moveLeft = () => {
    if (position < 1) {
        position = images.length - 1;
        img.src = images[position];
        return;
    }
    img.src = images[position - 1];
    position--;
}
document.getElementById("left-arrow").addEventListener("click",moveLeft);
document.getElementById("right-arrow").addEventListener("click",moveRight);