import navbar from "../components/navbar.js";

document.getElementById('navbar').innerHTML=navbar();

import {srach,append} from "./fetch.js";

import {srach1,append1} from "./fetch1.js";


let csrach1=(e)=>{
    if(e.key==="Enter"){
        let query=document.getElementById('search_box').value;
        srach1(query).then(function(data){
            console.log("data:",data);
            let result=document.getElementById('news_result');
        result.innerHTML=null;
        append1(data,result);
        });
    }
}
document.getElementById('search_box').addEventListener('keydown',csrach1);

// let query=document.getElementById('search_box').value;

let cat=document.getElementById('country_links').children;
// console.log(cat);

function tscrach(){
    
    console.log(this.id);
    srach(this.id).then(function(data){
        console.log("data:",data);
        let result=document.getElementById('news_result');
    result.innerHTML=null;
    append(data,result);
    });
}

for(let el of cat){
    el.addEventListener('click',tscrach);
}

// window.location.href="news.html";



