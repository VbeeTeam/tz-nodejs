const https = require('https')
const http = require('http')
const cheerio = require('cheerio')
//也是请求网址模块，只不过下载图片的函数比较简单，所以用这个
//const request = require("request")
let url = 'https://www.meizu.com/'
http.createServer((req, res) => {
  res.writeHead(200, {
    'content-type': 'application/json;charset=utf-8'
  })
  https.get(url, (res) => {
    res.setEncoding('utf-8') //防止中文乱码
    let data = ''
    res.on('data', (chunk) => {
      data += chunk
    })

    res.on('end', () => {
      filterData(data)
    })
  })

  function filterData(data) {
    //console.log(data)
    let $ = cheerio.load(data)
    let $product = $('.section-box-row').find(".index-center-wrapper").find(".clearfix").find("li")
    let products = []

    $product.each((index, value) => {
      products.push({
        imgUrl: $(value).find('.goods-img').attr('data-src'),
        name: $(value).find('.goods-name').text(),
      })
      //下载图片
      //let image = $(value).find('.goods-img').attr('data-src');
      //request($(value).find('.goods-img').attr('data-src')).pipe(fs.createWriteStream( path.join(__dirname, `public/downImg/${index + 1}.png`)));
    })
    //console.log(products)
    res.end(JSON.stringify(products))
  }
}).listen(9000)
