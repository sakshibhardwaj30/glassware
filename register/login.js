const form1=document.getElementById('form');
const username=document.getElementById('user');
const password11=document.getElementById('password1');
const small=document.querySelector('s');

form1.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernamevalue=username.value.trim();
    
    if(usernamevalue===''){
        showError(username,"UserNAME can not be blank");
    }
    else if(!isUservalid(usernamevalue)){
        showError(username,"Please Enter a Valid username ")
    }
    else{
        showSuccess(username);
    }

    const password11value=password11.value.trim();
    
    if(password11value===''){
        showError(password11,"Password can not be blank");
    }
    else{
        showSuccess(password11);
    }
}

function showError(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 error';
    const small=formControl.querySelector('small');
    small.innerHTML=message;
}

function showSuccess(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 success';

}

function blankError(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 error';
    const small=formControl.querySelector('small');
    small.innerHTML=message;
}

function isUservalid(username){
    return /^([a-z0-9_\.\-\ ]+)$/.test(username)
}