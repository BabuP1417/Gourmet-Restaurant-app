import images from './images';

const wines = [
{
    title: 'Kerala Chicken Fry',
    price: '625',
    tags: 'POULTRY',
  },
  {
    title: 'Andhra Chilli Chicken ',
    price: '625',
    tags: 'POULTRY',
  },
  {
    title: 'Rava Fried Fish',
    price: '650',
    tags: 'SEAFOOD',
  },
  {
    title: 'Tawa Fried Karuveppilai Fish',
    price: '650',
    tags: 'SEAFOOD',
  },
  {
    title: 'North Indian Style Egg Curry',
    price: '350',
    tags: 'EGG',
  },
  {
    title: 'Hyderabadi Mutton Biryani',
    price: '675',
    tags: 'RICE',
  },
  {
    title: 'Ambur Chicken Biryani ',
    price: '650',
    tags: 'RICE',
  },

];

const cocktails = [
  {
    title: 'Malai Paneer Tikka',
    price: '500',
    tags: 'APPETIZERS',
  },
  {
    title: 'Assorted Vegetable Pakoras',
    price: '400',
    tags: 'APPETIZERS',
  },
  {
    title: 'Baked Broccoli ',
    price: '550',
    tags: 'VEG',
  },
  {
    title: 'Variety Rice',
    price: '375',
    tags: 'VEG',
  },
  {
    title: 'Four Cheese',
    price: '550',
    tags: 'PIZZA',
  },
  {
    title: 'Vegetable Club ',
    price: '400',
    tags: 'SANDWICH',
  },
  {
    title: 'Caramel Custard',
    price: '325',
    tags: 'DESSERTS',
  },
  
  {
    title: 'Tea / Coffee',
    price: '100',
    tags: 'BEVERAGES ',
  },
  
  
];

const awards = [
  {
    imgUrl: images.award1,
    title: 'Outstanding Restaurant',
    subtitle: '',
  },
  {
    imgUrl: images.award2,
    title: 'Best New Restaurant',
    subtitle: '',
  },
  {
    imgUrl: images.award3,
    title: 'Outstanding Chef',
    subtitle: '',
  },
  {
    imgUrl: images.award4,
    title: 'Rising Star',
    subtitle: '',
  },
  {
    imgUrl: images.award5,
    title: 'James Beard Awards',
    subtitle: '',
  },
];

export default { wines, cocktails, awards };
