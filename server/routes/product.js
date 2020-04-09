module.exports = [
  {
    method: 'GET',
    path: '/product',
    controller: (req, res) => {
      res.send('All products')
    }
  },
  {
    method: 'GET',
    path: '/product/:id',
    controller: (req, res) => {
      res.send('One product')
    }
  }

]
