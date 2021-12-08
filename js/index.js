var vm = new Vue({
    el: '#app',
        data: { 
            lis:[],
            //todo  关闭下载广告
            isShow:true,
            pic_url:'../src/rentalList/xin_n.png',
        },
        methods:{
            getData(){
                axios.get('http://192.168.31.211:8080/index.json',{
                    params:{}
                }).then(res=>{
                    this.lis = res.data;
                })
            },
            close(){
                this.isShow =false
            },
            jump(){
                window.location='../html/secondHandDetails.html'
            },
            pic(){
                if(this.pic_url == '../src/rentalList/xin_n.png'){
                    this.pic_url = '../src/rentalList/xin_y.png'
                }else{
                    this.pic_url = '../src/rentalList/xin_n.png'
                }
            }
        },
        // 挂载前调用axios获取数据
        beforeMount () {
            this.getData();
        },
})

function index(){
    window.location = '../html/index.html'
}
function log(){
    if(localStorage.getItem('phone') ==null){
        window.location = '../html/mine.html'
    }else{
        window.location = '../html/mine befor.html'
    }
}
