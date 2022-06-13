/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/



function Gt(u,n,e,s){
    this.user=u;
    this.name=n;
    this.email=e;
    this.select=s;
}

let getdata=()=>{

    let user=document.getElementById('user_pic').value;

    let name=document.getElementById('user_name').value;

    let email=document.getElementById('user_email').value;

    let select=document.getElementById('user_country').value;

    // console.log(user,name,email,select);
    let p=new Gt(user,name,email,select);
    console.log("p:",p);


    



localStorage.setItem('user',JSON.stringify(p));

document.getElementById('user_pic').value="";

    document.getElementById('user_name').value="";

    document.getElementById('user_email').value="";

    document.getElementById('user_country').value="";


}

