let bar= document.getElementById('bar')
let nav= document.getElementById('navbar')
let close= document.getElementById('close')
let button= document.getElementById("btn")
let input= document.getElementById("ipt")
let txt=document.querySelector("#text")



if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active')
    })
}

if(button){
    button.addEventListener('click',()=>{
        input.value= ""
        
    })
}


let MainImg= document.getElementById("mainimg")
let SmallImg= document.getElementsByClassName("small-img")
let Price= document.getElementById("price")
SmallImg[0].addEventListener('click',()=>{
    MainImg.src= SmallImg[0].src
})

SmallImg[1].addEventListener('click',()=>{
    MainImg.src= SmallImg[1].src
    Price.innerHTML= `<h2>&#8377; 1149  </h2>`
})

SmallImg[2].addEventListener('click',()=>{
    MainImg.src= SmallImg[2].src
    Price.innerHTML= `<h2>&#8377; 2049  </h2>`
})

SmallImg[3].addEventListener('click',()=>{
    MainImg.src= SmallImg[3].src
    Price.innerHTML= `<h2>&#8377; 2349  </h2>`
})





