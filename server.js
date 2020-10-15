const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
app.use('/public', express.static('./public'))
app.use(cors())
router.get('/getList', (req, res) => {
  res.json([
    {
      shop: '三只松鼠旗舰店',
      item: [
        {
          id: 1,
          pic:'http://10.9.64.245:3000/public/img/1.jpg',
          isSelect: false,
          title: '面包面包面包面包面包面包面包面包面包面包面包面包面包面包',
          size: '16*16*3(cm)',
          price: 25,
          num: 1,
          totalPrice: 25
        },
        {
          id: 2,
          pic:'http://10.9.64.245:3000/public/img/1.jpg',
          isSelect: false,
          title: '薯条薯条薯条薯条薯条薯条薯条薯条薯条薯条薯条薯条薯条薯条薯条',
          size: '16*16*3(cm)',
          price: 18,
          num: 1,
          totalPrice: 18
        },
        {
          id: 3,
          pic:'http://10.9.64.245:3000/public/img/1.jpg',
          isSelect: false,
          title: '牛肉干牛肉干牛肉干牛肉干牛肉干牛肉干牛肉干',
          size: '16*16*3(cm)',
          price: 30,
          num: 1,
          totalPrice: 30
        },
        {
          id: 4,
          pic:'http://10.9.64.245:3000/public/img/1.jpg',
          isSelect: false,
          title: '薯片薯片薯片薯片薯片薯片薯片薯片薯片薯片薯片薯片薯片薯片',
          size: '16*16*3(cm)',
          price: 10,
          num: 1,
          totalPrice: 10
        },
      ]
    },
    {
      shop: '华为旗舰店',
      item: [
        {
          id: 5,
          pic:'http://10.9.64.245:3000/public/img/2.jpg',
          isSelect: false,
          title: '华为华为华为华为华为华为',
          size: '16*16*3(cm)',
          price: 2499,
          num: 1,
          totalPrice: 2499
        },
        {
          id: 6,
          pic:'http://10.9.64.245:3000/public/img/2.jpg',
          isSelect: false,
          title: '荣耀荣耀荣耀荣耀荣耀荣耀荣耀',
          size: '16*16*3(cm)',
          price: 2999,
          num: 1,
          totalPrice: 2999
        },
        {
          id: 7,
          pic:'http://10.9.64.245:3000/public/img/2.jpg',
          isSelect: false,
          title: '平板平板平板平板平板平板平板平板平板平板',
          size: '16*16*3(cm)',
          price: 3499,
          num: 1,
          totalPrice: 3499
        },
      ]
    }
  ])
})
app.use(router);
app.listen(3000, '10.9.64.245', () => {
  console.log('server running at port 3000')
})
