// let pos = document.querySelector('#tit');
// console.log(pos);
var vm = new Vue({
    el: '#app',
        data: { 
            lis:[],
            header_show:true,
            out_show:false,
            select1:false,
            select2:false,
            select3:false,
            select4:false,
            grey_show:false,
            pos_:false,
        },
        
        methods:{
            
            getData(){
                axios.get('http://192.168.31.211:8080/rental.json',{
                    params:{}
                }).then(res=>{
                    this.lis = res.data;
                    // console.log(this.lis);
                })
            },
            jump(){
                window.location='../html/rentalDetails.html'
            },
            fn1(){
                this.header_show=false;
                this.select2=false;
                this.select3=false;
                this.select4=false;
                this.pos_=true;
                this.out_show=true;
                this.select1=true;
                this.grey_show=true;
            },
            fn2(){
                this.header_show=false;
                this.select1=false;
                this.select3=false;
                this.select4=false;
                this.pos_=true;
                this.out_show=true;
                this.select2=true;
                this.grey_show=true;
            },
            fn3(){
                this.header_show=false;
                this.select1=false;
                this.select2=false;
                this.select4=false;
                this.pos_=true;
                this.out_show=true;
                this.select3=true;
                this.grey_show=true;
            },
            fn4(){
                this.header_show=false;
                this.select1=false;
                this.select2=false;
                this.select3=false;
                this.pos_=true;
                this.out_show=true;
                this.select4=true;
                this.grey_show=true;
            },
            none(){
                this.header_show=true;
                this.out_show=false;
                this.pos_=false;
                this.select1=false;
                this.select2=false;
                this.select3=false;
                this.select4=false;
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
    window.location = '../html/mine.html'
}

