
import("./index.css");
 import img from './file.jpg';

function add(first, seccond){
    return first + seccond;
}



function mult(first, seccond){
    return first * seccond;
}

console.log(add(3,8))


const image = document.createElement("img")
image.src=img
document.getElementById("root").appendChild(image);

const h1 = document.createElement("h1");
h1.innerText= "take your notes";
h1.classList.add("redcolor");

const textarea = document.createElement("textarea")
document.getElementById("root").appendChild(h1);
document.getElementById("text").appendChild(textarea);
textarea.classList.add("text");




