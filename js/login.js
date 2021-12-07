var lic=document.getElementsByClassName('login-cl');
var article=document.getElementsByTagName('article')[0];
var login_code2=document.getElementsByClassName('login-code2')[0];
// console.log(lic);
lic[0].onclick=function(){
    // border-bottom: .04rem solid #FF8A00;
    // border-bottom: .015rem solid #ccc;
    // font-weight: bold;
    this.style.borderBottom='.04rem solid #FF8A00';
    this.style.fontWeight='600';
    lic[1].style.borderBottom='.04rem solid #ccc';
    lic[1].style.fontWeight='500';

    article.style.display='block';
    login_code2.style.display='none';
}
lic[1].onclick=function(){
    // border-bottom: .04rem solid #FF8A00;
    // border-bottom: .015rem solid #ccc;
    this.style.borderBottom='.04rem solid #FF8A00';
    this.style.fontWeight='600';
    lic[0].style.borderBottom='.04rem solid #ccc';
    lic[0].style.fontWeight='500';

    login_code2.style.display='block';
    article.style.display='none';

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