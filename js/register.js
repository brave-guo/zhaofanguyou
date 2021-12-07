var phone = document.getElementById('phone');
var code = document.getElementById('code');
var pass = document.getElementById('pass');
var pass2 = document.getElementById('pass2');
var loginP = document.getElementsByClassName('loginP')[0];
var loginPy = document.getElementsByClassName('loginPy')[0];
var loginPw = document.getElementsByClassName('loginPw')[0];
var loginPw2 = document.getElementsByClassName('loginPw2')[0];
var loginCode = document.getElementsByClassName('login-code')[0];
phone.onblur = function () {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
    if (!reg.test(phone.value)) {
        loginP.style.display = 'block';
        loginCode.style.top = '.4rem'
    } else {
        loginP.style.display = 'none';
        loginCode.style.top = '.08rem'
    }
}
pass.onblur = function () {
    var reg = /^[a-z0-9]+$/i;
    if (!reg.test(pass.value)) {
        loginPw.style.display = 'block';
    } else {
        loginPw.style.display = 'none';
    }
}
pass2.onblur = function () {
    // var reg = /^[a-z0-9]+$/i;
    if (pass2.value!=pass.value) {
        loginPw2.style.display = 'block';
    } else {
        loginPw2.style.display = 'none';
    }
}
//验证码
loginCode.onclick = function () {
    alert('3553');

}
code.onblur = function () {
    var code = document.getElementById('code').value;
    console.log(code);
    // var reg = /^[a-z0-9]+$/i;
    var reg = 3553;
    // if (!reg.test(pass.value)) {
    if (code != reg) {
        loginPy.style.display = 'block';
    } else {
        loginPy.style.display = 'none';
    }
}
var register = document.getElementById('register');

register.onclick = function () {
    console.log(localStorage.getItem('phone'));
    var getphone=localStorage.getItem('phone');
    
    var phone = document.getElementById('phone').value;
    var pass = document.getElementById('pass').value;
    if(getphone==phone){
       alert('该号码已被注册')
    } else if (phone == '') {
        loginP.style.display = 'block';
    } else if (code == '') {
        loginPy.style.display = 'block';
    } else if (pass == '') {
        loginPw.style.display = 'block';
    } else {
        localStorage.setItem('phone', phone);
        localStorage.setItem('pass', pass);
        alert('注册成功')
        // console.log(localStorage.getItem('phone'));
    }

}


