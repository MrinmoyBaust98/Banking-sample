// login button ea click korle email & password Cheek korbe

// login button ea event add
document.getElementById('login-btn').addEventListener('click',function(){
    const emailFeild=document.getElementById('email-info');
    const userEmail=emailFeild.value;

    const passwordFeild=document.getElementById('password-info');
    const userPassword=passwordFeild.value;

    if(userEmail=='bankmrinmoy@roy.com' && userPassword=='roybank'){
        // jodi mile jay tahole banking er file ea niye jabe 
        // banking file ea jaoar jonno(window.location href="")..use kora hoy
        window.location.href='bank.html';
    }
})