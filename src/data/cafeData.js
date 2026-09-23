export const menuCategories = ["Coffee", "Shakes", "Ice Creams", "Burgers", "Desserts"];

export const menuItems = [
  // Coffee
  { id: 1, category: "Coffee", name: "Classic Cappuccino", description: "Rich espresso, steamed milk, velvet foam.", price: 180 },
  { id: 2, category: "Coffee", name: "Iced Caramel Latte", description: "Cold espresso, caramel, ice. Sweet and smooth.", price: 220 },
  { id: 3, category: "Coffee", name: "Hazelnut Cold Brew", description: "Slow-steeped 18 hours, hazelnut, served cold.", price: 240 },
  { id: 4, category: "Coffee", name: "Double Shot Espresso", description: "Bold, intense, single-origin.", price: 140 },

  // Shakes
  { id: 5, category: "Shakes", name: "Belgian Chocolate Shake", description: "Thick, rich, made with real dark chocolate.", price: 280 },
  { id: 6, category: "Shakes", name: "Strawberry Milkshake", description: "Fresh strawberries, milk, ice cream. Classic.", price: 240 },
  { id: 7, category: "Shakes", name: "Oreo Cookie Shake", description: "Crushed Oreos, vanilla ice cream, whipped cream.", price: 260 },
  { id: 8, category: "Shakes", name: "Mango Smoothie", description: "Fresh mango, yoghurt, honey. Summer in a glass.", price: 250 },

  // Ice Creams
  { id: 9, category: "Ice Creams", name: "Belgian Chocolate Sundae", description: "3 scoops, hot fudge, nuts, cherry on top.", price: 320 },
  { id: 10, category: "Ice Creams", name: "Strawberry Cheesecake Scoop", description: "Creamy cheesecake base, strawberry swirl.", price: 180 },
  { id: 11, category: "Ice Creams", name: "Salted Caramel Cone", description: "Waffle cone, salted caramel, vanilla bean.", price: 200 },
  { id: 12, category: "Ice Creams", name: "Mango Sorbet", description: "Dairy-free, fresh mango, super refreshing.", price: 160 },
  { id: 13, category: "Ice Creams", name: "Cookies & Cream Tub", description: "Family-size tub. For the serious cravings.", price: 480 },

  // Burgers
  { id: 14, category: "Burgers", name: "Classic Cheese Burger", description: "Beef patty, cheddar, lettuce, house sauce.", price: 260 },
  { id: 15, category: "Burgers", name: "Crispy Chicken Burger", description: "Fried chicken fillet, slaw, sriracha mayo.", price: 280 },
  { id: 16, category: "Burgers", name: "Double Patty Beast", description: "Two patties, double cheese, bacon. Not for the faint-hearted.", price: 420 },
  { id: 17, category: "Burgers", name: "Loaded Fries", description: "Cheese, jalapeños, herbs, crispy golden fries.", price: 220 },

  // Desserts
  { id: 18, category: "Desserts", name: "Belgian Waffle", description: "Crispy outside, soft inside, chocolate drizzle.", price: 280 },
  { id: 19, category: "Desserts", name: "New York Cheesecake Slice", description: "Creamy, baked to perfection, berry compote.", price: 260 },
  { id: 20, category: "Desserts", name: "Choco Lava Cake", description: "Warm, gooey, molten center. Served with ice cream.", price: 240 },
  { id: 21, category: "Desserts", name: "Glazed Donut (Pack of 3)", description: "Fresh, warm, glazed. Simple and perfect.", price: 200 },
];

export const signatureDishes = [
  {
    id: 1,
    name: "Belgian Chocolate Sundae",
    description: "Our most-loved dessert. 3 scoops, hot fudge, roasted nuts, and a cherry on top.",
    price: 320,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  },
  {
    id: 2,
    name: "Double Patty Beast",
    description: "Two juicy patties, double cheese, crispy bacon. The burger you'll tell your friends about.",
    price: 420,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    id: 3,
    name: "Iced Caramel Latte",
    description: "Cold espresso, silky caramel, plenty of ice. Perfect on a hot afternoon.",
    price: 220,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Regular since day one",
    quote: "The sundaes here ruined every other dessert for me. And the shakes? Insane.",
    rating: 5,
  },
  {
    id: 2,
    name: "Arjun Mehta",
    role: "Food blogger",
    quote: "Double Patty Beast is legit. I've been to places charging double and serving half the flavour.",
    rating: 5,
  },
  {
    id: 3,
    name: "Neha Kapoor",
    role: "Weekend visitor",
    quote: "My go-to spot for Sunday treats. The staff remembers my order. That says everything.",
    rating: 5,
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80",
  "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80",
  "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
  "https://images.unsplash.com/photo-1502301197179-65228ab57f78?w=800&q=80",
];

export const stats = [
  { value: 800, suffix: "+", label: "Happy Customers" },
  { value: 25000, suffix: "+", label: "Scoops Served" },
  { value: 3, suffix: "", label: "Years Open" },
  { value: 40, suffix: "+", label: "Items on Menu" },
];