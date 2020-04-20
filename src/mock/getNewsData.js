import Mock from 'mockjs'
let data = Mock.mock({
    'data|10': [ // 生成5条数据 数组
        {
            'newsId|+1': 1, // 生成商品id，自增1
            'newsMsg': '@ctitle(100)', // 生成商品信息，长度为10个汉字
            'newsTitle': '@cname', // 生成商品名 ， 都是中国人的名字
            'newsDate': '@date(yyyy-MM-dd)',
            'newsParise': '@integer(0, 3000)',
            'newsImage': '@image(300x250)' // 生成随机图片，大小/背景色/字体颜色/文字信息
        }
    ]
})
Mock.mock('/api/getNewsData', 'post', () => { // 三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
    return data
})