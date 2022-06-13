const nav = document.querySelector(".container");
const btnNav = document.querySelector(".menu");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");


btnNav.addEventListener('click',()=>{
if(nav.classList.contains('hide')){
    nav.classList.toggle('display')
}
if(one.classList.contains('bloc')){
    one.classList.toggle('one');
    two.classList.toggle('two');
    three.classList.toggle('three');
}
})

function contact (){
    const body = document.querySelector('#body')
    const html = document.querySelector('#html')
    const btnTriangle = document.querySelector(".btnTriangle");
    const display1 = document.querySelector('#display1');
    const display2 = document.querySelector('#display2');
    const display3 = document.querySelector('#display3');
    const contactHide= document.querySelector('#contactHide')
    btnTriangle.addEventListener('click' , ()=>{
     if(
        display1.classList.contains("hide") 
        &&
        display2.classList.contains("hide")
        &&
        display3.classList.contains("hide")
     ){
       display1.classList.toggle("justify")
       display2.classList.toggle("justify")
       display3.classList.toggle("justify")
       body.classList.remove('over')
       html.classList.remove('over')
       body.classList.add('flow')
       html.classList.add('flow')


     }
     else if(body.classList.contains('flow') && html.classList.contains('flow')){
        body.classList.remove('flow')
        html.classList.remove('flow')
        body.classList.add('over')
        html.classList.add('over')
     }
    })
}
contact()