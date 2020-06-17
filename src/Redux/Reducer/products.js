import { SELECTED_LAMINATE } from '../Actions/laminate'

const initialState = {
  data: [
    {
      id: 1,
      name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
      img_url: 'https://www.discountflooringdepot.co.uk/images/living-6mm-laminate-flooring-light-grey-north-cape-p1562-10175_thumb.jpg',
      url: 'http://localhost:3000/product',
      price: '530',
      type: 'Product'
    },
    {
      id: 2,
      name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
      img_url: 'https://www.discountflooringdepot.co.uk/images/glossy-varnished-8mm-high-gloss-laminate-flooring-grey-wood-p1689-11172_thumb.jpg',
      url: 'http://localhost:3000/product',
      price: '530',
      type: 'Product'
    },
    {
      id: 3,
      name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
      img_url: 'https://www.discountflooringdepot.co.uk/images/sydney-7mm-laminate-flooring-grey-oak-p1025-6613_thumb.jpg',
      url: 'http://localhost:3000/product',
      price: '530',
      type: 'Product'
    },
    {
      id: 4,
      name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
      img_url: 'https://www.discountflooringdepot.co.uk/images/wood-step-8mm-laminate-flooring-snow-white-oak-p1885-9093_thumb.jpg',
      url: 'http://localhost:3000/product',
      price: '530',
      type: 'Product'
    },
    {
      id: 5,
      name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
      img_url: 'https://www.discountflooringdepot.co.uk/images/signature-8mm-herringbone-laminate-flooring-light-oak-p1772-9733_thumb.jpg',
      url: 'http://localhost:3000/product',
      price: '530',
      type: 'Product'
    },
    {
      id: 6,
      name: 'Woodland Click - 14mm x 130mm Engineered Wood Flooring - Country Oak Matt Lacquered',
      img_url: 'https://www.discountflooringdepot.co.uk/images/premier-elite-8mm-laminate-flooring-black-smoked-oak-p1032-4701_thumb.jpg',
      url: 'http://localhost:3000/product',
      price: '530',
      type: 'Product'
    }
  ],
  Laminate: null
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_LAMINATE: {
      return {
        ...state,
        Laminate: action.products
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default products
