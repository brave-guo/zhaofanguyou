var vm = new Vue({
    el: '#app',
        data: { 
            lis:[],
        },
        methods:{
            getData(){
                axios.get('http://192.168.31.211:8080/second.json',{
                    params:{}
                }).then(res=>{
                    this.lis = res.data;
                    // console.log(this.lis);
                })
            },
            jump(){
                window.location='../html/secondHandDetails.html'
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
    window.location = '../html/login.html'
}