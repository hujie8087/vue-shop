import Mock from 'mockjs'

let getNewsData = Mock.mock({
    'data|40': [ // 生成5条数据 数组
        {
            'newsId|+1': 1, // 生成商品id，自增1
            'newsMsg': '@cparagraph(100)', // 生成商品信息，长度为10个汉字
            'newsTitle': '@ctitle', // 生成商品名 ， 都是中国人的名字
            'newsDate': '@date(yyyy-MM-dd)',
            'newsParise': '@integer(0, 50)',
            'newsImage': '@dataImage(300x250)' // 生成随机图片，大小/背景色/字体颜色/文字信息
        }
    ]
})

let productdata = Mock.mock({
    'data|100': [ // 生成100条数据 数组
        {
            'shopId|+1': 1, // 生成商品id，自增1
            'shopMsg': '@cparagraph(100)', // 生成商品信息，长度为10个汉字
            'shopName': '@ctitle', // 生成商品名 ， 都是中国人的名字
            'shopTel': /^1(5|3|7|8)[0-9]{9}$/, // 生成随机电话号
            'shopAddress': '@county(true)', // 随机生成地址
            'shopStar|1-5': '', // 随机生成1-5个星星
            'salesVolume|30-1000': 30, // 随机生成商品价格 在30-1000之间
            'shopLogo': '@image(200x200)', // 生成随机图片，大小/背景色/字体颜色/文字信息
            'food|7': [ // 每个商品中再随机生成七个food
                {
                    'foodName': '@cname', // food的名字
                    'foodPic': '@image(100x100)', // 生成随机图片，大小/背景色/字体颜色/文字信息
                    'foodPrice|1-100': 20, // 生成1-100的随机数
                    'aname|14': [{
                        'aname': '@cname',
                        'aprice|30-60': 20
                    }]
                }
            ]
        }
    ]
})

let getLunbo = Mock.mock({
    'data|5': [ // 生成5条数据 数组
        {
            'newsId|+1': 1, // 生成商品id，自增1
            'newsMsg': '@cparagraph(10)', // 生成商品信息，长度为10个汉字
            'newsName': '@ctitle', // 生成商品名 ， 都是中国人的名字
            'newsTel': /^1(5|3|7|8)[0-9]{9}$/, // 生成随机电话号
            'newsStar|1-5': '', // 随机生成1-5个星星
            'newsImage': '@image(750x450)' // 生成随机图片，大小/背景色/字体颜色/文字信息
        }
    ]
})

let getPhotos = Mock.mock({
    'data|4': [ // 生成5条数据 数组
        {
            'categoryId|+1': 1, // 生成商品id，自增1
            'Title': '@cTitle(4)' // 生成商品名 ， 都是中国人的名字
        }
    ]
})

let getPhotosList = Mock.mock({
    'data|10': [{
        'photosId|+1': 1, // 生成商品id，自增1
        'photosMsg': '@cparagraph(100)', // 生成商品信息，长度为10个汉字
        'photosTitle': '@ctitle', // 生成商品名 ， 都是中国人的名字
        'photosDate': '@date(yyyy-MM-dd)',
        'photosImage': '@dataImage(300x250)' // 生成随机图片，大小/背景色/字体颜色/文字信息
    }]
})

Mock.mock('/api/getNewsData', 'post', getNewsData) // 三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
Mock.mock('/api/getNewsData/detail/:newsId', 'post', getNewsData)
Mock.mock('/api/productData', 'post', productdata)
Mock.mock('/api/getLunbo', 'post', getLunbo)
Mock.mock('/api/getPhotos', 'post', getPhotos)
Mock.mock(RegExp('/api/getPhotosList' + '.*'), 'post', (options) => {
    // 最佳实践，将请求和参数都打印出来，以便调试
    console.log(options)
    return Mock.mock(getPhotosList)
})