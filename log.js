const wrapper= document.querySelector('.wrapper');
const loginLink= document.querySelector('.login-link');
const regLink= document.querySelector('.register-link');
const iconClose= document.querySelector('.icon-close')
regLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
/*let forml= document.getElementById('forml')
if(localStorage.getItem('user')){
    //document.getElementById('email').value=localStorage.getItem('email');
    //document.getElementById('password').value=localStorage.getItem('password');
    let obj= JSON.parse(localStorage.getItem('user'))
    document.getElementById('email').value=obj.email;
    document.getElementById('password').value=obj.password
}
forml.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let user={
        email:email,
        password:password
    }
    //local storage
    localStorage.setItem('user',JSON.stringify(user));
    //localStorage.setItem('password',password);
    alert("Your details are saved in local storage")
})*/

function savedata(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    console.log(name+email+password)
    /*localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)*/
    let user_rec=new Array();
    user_rec=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
    if(user_rec.some((v)=>{
        return v.email==email
    })){
        alert("Duplicate Data")
    }
    else{
        user_rec.push({
            'name':name,
            'email':email,
            'password':password
        })
        alert("Registration Successfull !!")
        localStorage.setItem('users',JSON.stringify(user_rec));
    }

}    
function saves(){
    let lemail=document.getElementById('lemail').value;
    let lpassword=document.getElementById('lpassword').value;
    let user_reco=new Array();
    user_reco=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[]
    if(user_reco.some((v)=>{
        return v.email==lemail && v.password==lpassword
    })){
        alert("Login Successfull!!")
        window.location.href = "todo.html";
    }
    else{
        alert("Login Failed, Try to register!!")
    }
}