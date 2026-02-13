export const autoShopImages = [
  'auto-shops/auto-repair.jpg',
  'auto-shops/autoshops3104652133909756595.JPG',
  'auto-shops/autoshops5281877298612430683.JPG',
  'auto-shops/autoshops6407821688623785025.JPG',
  'auto-shops/autoshops6618384207628147509.JPG',
  'auto-shops/autoshops6890925011999401846.JPG',
  'auto-shops/autoshops8120471870632426023.JPG',
  'auto-shops/repair-vehicle.jpg',
  'auto-shops/track-repairs.PNG'
]

export const carInventory = [
  {
    id: 1,
    year: 2019,
    make: 'Acura',
    model: 'ILX',
    price: 17495,
    mileage: 52000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    imageName: 'cars-for-sale/acura149825824518706552.JPG'
  },
  {
    id: 2,
    year: 2018,
    make: 'Acura',
    model: 'TLX',
    price: 18995,
    mileage: 61000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    imageName: 'cars-for-sale/acura2832183827579887729.JPG'
  },
  {
    id: 3,
    year: 2016,
    make: 'Jeep',
    model: 'Grand Cherokee',
    price: 20995,
    mileage: 88000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    imageName: 'cars-for-sale/jeep1026958247172777947.JPG'
  },
  {
    id: 4,
    year: 2020,
    make: 'Hyundai',
    model: 'Elantra',
    price: 15995,
    mileage: 42000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    imageName: 'cars-for-sale/hyundai5009672880863571494.JPG'
  },
  {
    id: 5,
    year: 2017,
    make: 'Chevrolet',
    model: 'Malibu',
    price: 14995,
    mileage: 67000,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    imageName: 'cars-for-sale/chevrolet7631123642279906894.JPG'
  }
]

export const getImageUrl = (imageName) => `/images/${imageName}`
