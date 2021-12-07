var exit=document.getElementById('exit');
exit.onclick=function(){
    var body_=document.getElementsByTagName('body')[0];
    // 使用dom 创建 蒙版
    // document.createElement('名字')  名字 创建元素的标签名 
   var mk=document.createElement('div');
    var str='';
    str+='<dl>';
    str+='<dt class="dt1">';
    str+='<p>退出登录</p>';
    str+='<p>是否确认退出登录？</p>';
    str+='</dt>';
    str+='<dt class="dt2"><span class="span1">取消</span><span class="span2"><a href="../html/mine.html">确认</a></span></dt>';
    str+='</dt>';

   mk.className='mmk';
   mk.innerHTML=str;
  // 向body中 添加 蒙版
   body_.appendChild(mk);
  


   // 点击取消时 使用dom 删除mk
   var span1=document.getElementsByClassName('span1')[0];
   span1.onclick=function(){
    //   body_.removeChild(img_);
     body_.removeChild(mk);

} 
}
