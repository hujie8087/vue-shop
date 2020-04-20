import Mock from 'mockjs'
let data = Mock.mock({
    'data|5': [ // 生成5条数据 数组
        {
            'newsId|+1': 1, // 生成商品id，自增1
            'newsMsg': '@ctitle(10)', // 生成商品信息，长度为10个汉字
            'newsName': '@cname', // 生成商品名 ， 都是中国人的名字
            'newsTel': /^1(5|3|7|8)[0-9]{9}$/, // 生成随机电话号
            'newsStar|1-5': '', // 随机生成1-5个星星
            'newsImage': '@image(750x450)' // 生成随机图片，大小/背景色/字体颜色/文字信息
        }
    ]
})
Mock.mock('/api/topData', 'post', () => { // 三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return data
})