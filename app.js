const pics = [
    'url("1.jpg")',
    // 'url("2.jpg")',
    // 'url("3.jpg")',
    // 'url("4.jpg")',
    // 'url("5.jpg")',
];

const pic = document.querySelector('section');

function showImage(){
    var a = Math.floor(Math.random()*pics.length);
    var img = pics[a];
    pic.style.backgroundImage = img;
}