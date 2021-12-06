var vm = new Vue({
    el: '#app',
        data: { 
            lis:[],
            // todo  关闭下载广告
            isShow:true
        },
        methods:{
            getData(){
                axios.get('http://192.168.31.211:8080/index.json',{
                    params:{}
                }).then(res=>{
                    this.lis = res.data;
                    // console.log(this.lis);
                })
            },
            close(){
                this.isShow =false
            }
        },
        // 挂载前调用axios获取数据
        beforeMount () {
            this.getData();
        },
})


