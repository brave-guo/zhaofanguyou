var lic = document.getElementsByClassName('login-cl');
var mine_login = document.getElementsByClassName('mine-login')[0];
var login_code2 = document.getElementsByClassName('login-code2')[0];
var login = document.getElementsByClassName('login')[0];
var button = document.getElementsByClassName('button')[0];

function lic1() {
    // border-bottom: .04rem solid #FF8A00;
    // border-bottom: .015rem solid #ccc;
    // font-weight: bold;
    lic[0].style.borderBottom = '.04rem solid #FF8A00';
    lic[0].style.fontWeight = '600';
    lic[1].style.borderBottom = '.04rem solid #ccc';
    lic[1].style.fontWeight = '500';

    mine_login.style.display = 'block';
    login_code2.style.display = 'none';
}
// lic[1].onclick = 
function lic2() {
    // border-bottom: .04rem solid #FF8A00;
    // border-bottom: .015rem solid #ccc;
    lic[1].style.borderBottom = '.04rem solid #FF8A00';
    lic[1].style.fontWeight = '600';
    lic[0].style.borderBottom = '.04rem solid #ccc';
    lic[0].style.fontWeight = '500';

    login_code2.style.display = 'block';
    mine_login.style.display = 'none';

}

// var mine_box = document.getElementsByClassName('mine-box')[0];
// var login_box = document.getElementsByClassName('login-box')[0];

function ok() {
    var ok = document.getElementById('ok');
    var phone = document.getElementsByClassName('phone')[0].value;
    var pass = document.getElementById('pass').value;
    // var loginP = document.getElementsByClassName('loginP')[0];
    localStorage.setItem('phone', phone);
    localStorage.setItem('pass', pass);
    if(localStorage.getItem('phone')!=''){
        // window.localStorage = '../html/index.html';
        ok.href='../html/mine befor.html';
    }
    

    // if (phone == phoneb && pass == passb) {
    //     // <a id="ok">立即登录</a>
    //     ok.href='../html/mine befor.html';
    //     // ok.href = '../html/mine.html';
    //     // login_box.style.display = 'none';
    //     // mine_box.style.display = 'block';
    //     loginP.style.display = 'none';
    //     login.innerHTML = phone;
    // } else {
    //     loginP.style.display = 'block';
    // }
    // window.localStorage='../html/mine.html';
}
function logincode(){
    alert(3553);
}

function ok2(){
    var phone=document.getElementsByClassName('phone')[0];
    var code=document.getElementById('code').value;
    var loginP=document.getElementsByClassName('loginP')[0];
    var loginPy=document.getElementsByClassName('loginPy')[0];
    
    if(!phone==localStorage.getItem('phone')){
        loginP.style.display='block';
    }else if(code!=3553){
        loginPy.style.display='block';
    }else{
        window.location='../html/mine befor.html';
    }

    
}



















// var phone=document.getElementById('phone'); 
// var pass=document.getElementById('pass'); 
// // console.log(phone);
// phone.onblur=function(){
//     // console.log(phone.value);
//     var loginP=document.getElementsByClassName('loginP')[0];
//     // console.log(loginP);
//     var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
//     if(!reg.test(phone.value)){
//         loginP.style.display='block';
//         // console.log('有哎');
//     }else{
//         loginP.style.display='none';
//     }
// }
// pass.onblur=function(){
//     // console.log(pass.value);
//     var loginPw=document.getElementsByClassName('loginPw')[0];
//     // console.log(loginPw);
//     var reg=/^[a-z0-9]+$/i;
//     if(!reg.test(pass.value)){
//         loginPw.style.display='block';
//         // console.log('有哎');
//     }else{
//         loginPw.style.display='none';
//     }
// }