import cakeImage from '../images/cake.jpg';
import chickenImage from '../images/chicken.jpg';
import lemonrisoto from "../images/lemon-risotto.jpg";
import avocadotoast from "../images/avocado-toast.jpg";
import lemon_pasta from "../images/lemon-pasta.jpg";
import lemon_smoothie from "../images/lemon-drinkjpg.jpg";

const cardData = [
  {
    id: 1,
    image: cakeImage,
    title: 'Lemon Cake',
    description:
      'Our Lemon Cake is made with the freshest lemons and a rich, buttery batter. Topped with a tangy lemon glaze and garnished with zest and lemon slices, this dessert is both refreshing and indulgent.',
    price: 8.99,
  },
  {
    id: 2,
    image: chickenImage,
    title: 'Chicken Lemon with Herbs',
    description:
      'Our Chicken Lemon with Herbs features tender chicken marinated in a zesty lemon marinade. It’s grilled to perfection, ensuring a smoky flavor balanced with the brightness of fresh herbs. ',
    price: 14.99,
  },
  {
    id: 3,
    image: lemonrisoto, 
    title: 'Lemon Zest Risotto',
    description:
      'A creamy, flavorful risotto infused with fresh lemon zest, creating a perfect balance of richness and citrusy freshness. Topped with parmesan for an extra layer of flavor.',
    price: 12.99,
  },
  {
    id: 4,
    image: avocadotoast, 
    title: 'Lemon Avocado Toast',
    description:
      'Our Lemon Avocado Toast features fresh avocado spread on toasted whole-grain bread, topped with a drizzle of lemon juice and a sprinkle of sea salt for a light and refreshing snack.',
    price: 9.99,
  },
  {
  id: 5,
  image: lemon_pasta,
  title: 'Lemon Garlic Pasta',
  description:
    'A light and zesty pasta dish featuring a lemon-infused garlic sauce, tossed with perfectly cooked spaghetti and garnished with fresh parsley and parmesan. The citrusy flavor adds a refreshing kick.',
  price: 13.99,
},
{
  id: 6,
  image: lemon_smoothie,
  title: 'Citrus Lemon Smoothie',
  description:
    'A refreshing smoothie made with fresh lemon juice, a hint of honey, and a blend of citrus fruits. Smooth and tangy, it’s the perfect drink to brighten your day.',
  price: 8.99,
}

];

export default cardData;
