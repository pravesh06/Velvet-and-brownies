import { Product, ServiceItem, BakerItem, GalleryItem, Testimonial, FaqItem } from '../types';

export const HERO_CAKE_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuC2vSfOlAX7h_bB2EUdOP2D6ILbBvH5yfTlbtYJ6ErvNHIJRRLN3Rds3s0Qc7JNx7-3uQ75r93khh-Ku4YLH13Hhy90KNsjZ3-szmX-ghtA6VENqlD8f_x5_zE79CQPJ6ChQZYYH1iG_laea-ZGJh9SOIOw7NrLwkRy1Cg16N45ACM3BIaxfk-WaFfrXkItq1yvsEEblrzL2Q7FGh9Ey6PsXbyck5xTXzDazrsE4Nx9tpYGQQVunsmC';

export const SALON_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA2y620PNxtr3hJmqxD8x0aEzPT8WtGOJJNAJBYLSSF0-35eBUbQsIjtj3XF8s4SmtGKUfxD-Hn9a8GXOwr_23WC3iHFe48cTrB6xGb8Rk9-CTtRdrhk-EtMPyKe4KDwOsVoXeThLo-GpwbKpUKKh0AgG_YA07GX6INhq14zOp90SXOFyDn75c76gtgnRl2w6ipTZF9NEBOEYjUzaCblAq1r_tytku32_rhx7ZsMB5TFX5tqW61Mh1T';

export const LIGHTBOX_DEFAULT_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAZEqXHj0OTH_StUFqyL60GAWYvib65J6XWH4JYXqbSQSTqKz4xJsHiXcZcUaYGEHjkVR3D_OiFKR5etZ1pvWPhzWPaHpu8KUG9ZYAjkmL56NdIBEkoo--Oqt7-lhRo1Ihh-CI6NZO92FKZ_iXQY1twxqMhIWrND0CLSNQ8F_cUrxQKFpZaqFkhTzxJu8YJX8gX8nSNrokNIMr2K8PlWYjz2i0a1fvUdYs3vbrJ6Tq-hBFqTV0FPZUS';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Midnight Belgian Truffle',
    cat: 'cakes',
    price: 1450,
    rating: 4.9,
    dietary: 'Eggless',
    weight: '0.5kg',
    desc: '70% single-origin dark chocolate mousse with mirror glaze and 24k edible gold flakes.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Callebaut 70% Dark Cocoa', 'Organic Dairy Cream', 'Vanilla Pods', 'Pure Cane Sugar', 'Gold Flakes'],
    allergens: 'Dairy, Soy lecithin',
    storage: 'Refrigerate at 4-6°C. Best enjoyed after 15 minutes at room temperature.'
  },
  {
    id: 2,
    name: 'Signature Velvet Cheesecake',
    cat: 'cakes',
    price: 1650,
    rating: 5.0,
    dietary: 'Vegetarian',
    weight: '1kg',
    desc: 'Slow-baked Philadelphia cream cheese custard resting on a crumbly speculoos biscuit crust.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Philadelphia Cream Cheese', 'Speculoos Biscuit', 'Bourbon Vanilla', 'Cultured Sour Cream'],
    allergens: 'Dairy, Gluten',
    storage: 'Keep chilled. Consume within 48 hours for optimal velvety texture.'
  },
  {
    id: 3,
    name: 'Salted Caramel Fudge Brownie',
    cat: 'brownies',
    price: 160,
    rating: 4.9,
    dietary: 'Eggless',
    weight: 'Piece',
    desc: 'Molten dark center drizzled with slow-cooked fleur de sel Breton caramel pearls.',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Single Origin Cocoa', 'Breton Sea Salt Caramel', 'European Brown Butter', 'Dark Choc Chips'],
    allergens: 'Dairy',
    storage: 'Thrives at room temp for 5 days. Warm in microwave 10s for molten core.'
  },
  {
    id: 4,
    name: 'Tahitian Vanilla Mille-Feuille',
    cat: 'pastries',
    price: 280,
    rating: 4.8,
    dietary: 'Vegetarian',
    weight: 'Individual',
    desc: 'Caramelized French puff pastry layered with bourbon vanilla bean diplomat and salted praline veil.',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Laminated Butter Pastry', 'Tahitian Vanilla Pods', 'Egg Yolk Diplomat', 'Caramelized Sugar'],
    allergens: 'Dairy, Gluten, Egg',
    storage: 'Consume same day to preserve crisp layered flakiness.'
  },
  {
    id: 5,
    name: 'Rose Pistachio Eclair',
    cat: 'pastries',
    price: 240,
    rating: 4.9,
    dietary: 'Vegetarian',
    weight: 'Individual',
    desc: 'Golden choux pastry filled with roasted Bronte pistachio cremeux and crowned with rose petals.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Choux Pastry', 'Bronte Pistachio Paste', 'Organic Rose Essence', 'White Chocolate Glaze'],
    allergens: 'Dairy, Tree Nuts, Gluten',
    storage: 'Keep refrigerated until 10 minutes before serving.'
  },
  {
    id: 6,
    name: 'Biscoff Brownie Slab',
    cat: 'brownies',
    price: 650,
    rating: 4.9,
    dietary: 'Eggless',
    weight: 'Box of 4',
    desc: 'Gooey dark brownie slab marbled with melted Lotus speculoos spread and crunchy biscuit shards.',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=800&q=80',
    ingredients: ['70% Cocoa Butter', 'Lotus Biscoff Spread', 'Cinnamon Crumble', 'Dark Choc Chunks'],
    allergens: 'Gluten, Soy',
    storage: 'Room temperature up to 6 days in sealed casket.'
  },
  {
    id: 7,
    name: 'Gluten-Free Berry Tart',
    cat: 'pastries',
    price: 320,
    rating: 4.8,
    dietary: 'Gluten-Free',
    weight: 'Individual',
    desc: 'Crisp toasted almond crust filled with whipped vanilla ganache and fresh forest blackberries.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Almond Flour Crust', 'Whipped White Ganache', 'Fresh Blueberries & Blackberries', 'Mint'],
    allergens: 'Tree Nuts (Almond), Dairy',
    storage: 'Refrigerate. Enjoy chilled within 24 hours.'
  },
  {
    id: 8,
    name: 'Dark Gianduja Hazelnut Cake',
    cat: 'cakes',
    price: 1850,
    rating: 5.0,
    dietary: 'Contains Nuts',
    weight: '1kg',
    desc: 'Piedmont hazelnut praline layered between chocolate sponge, finished with roasted nut feuilletine.',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Piedmont Hazelnuts', 'Gianduja Paste', 'Cocoa Sponge', 'Crispy Feuilletine'],
    allergens: 'Tree Nuts, Dairy, Gluten',
    storage: 'Refrigerate. Let soften 20 minutes before savoring.'
  },
  {
    id: 9,
    name: 'Opera Gateau Classique',
    cat: 'pastries',
    price: 310,
    rating: 4.9,
    dietary: 'Vegetarian',
    weight: 'Slice',
    desc: 'Delicate almond joconde sponge soaked in grand cru espresso, French buttercream, and ganache.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Almond Joconde', 'Arabica Espresso Syrup', 'Dark Ganache', 'French Buttercream'],
    allergens: 'Dairy, Almond, Egg, Gluten',
    storage: 'Keep strictly chilled until presentation.'
  },
  {
    id: 10,
    name: 'Espresso Sea Salt Brownie',
    cat: 'brownies',
    price: 150,
    rating: 4.8,
    dietary: 'Eggless',
    weight: 'Piece',
    desc: 'Double shot extraction blended directly into batter, balanced with flaky sea salt crystals.',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Single-Estate Espresso', 'Callebaut Cocoa', 'Maldon Flake Salt', 'Brown Cane Sugar'],
    allergens: 'Dairy',
    storage: 'Airtight box up to 7 days.'
  },
  {
    id: 11,
    name: 'Golden Passionfruit Cupcake',
    cat: 'cupcakes',
    price: 180,
    rating: 4.7,
    dietary: 'Eggless',
    weight: 'Piece',
    desc: 'Light sponge centered with tangy passionfruit curd and frosted with gold-dusted ivory cream.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Vanilla Sponge', 'Fresh Passion Curd', 'Swiss Frosting', '24k Luster Dust'],
    allergens: 'Dairy',
    storage: 'Chilled or cool room temperature.'
  },
  {
    id: 12,
    name: 'Vegan Raspberry Truffle Cake',
    cat: 'eggless',
    price: 1750,
    rating: 4.9,
    dietary: 'Vegan',
    weight: '0.5kg',
    desc: '100% plant-based cocoa sponge enveloped in dark coconut ganache and fresh raspberry compote.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Flaxseed Meal Emulsion', 'Organic Cocoa Powder', 'Coconut Cream Ganache', 'Wild Raspberries'],
    allergens: 'Soy, Coconut',
    storage: 'Refrigerate. 100% dairy and egg-free.'
  },
  {
    id: 13,
    name: 'Roasted Hazelnut Crunch Brownie',
    cat: 'brownies',
    price: 160,
    rating: 5.0,
    dietary: 'Contains Nuts',
    weight: 'Piece',
    desc: 'Packed with whole slow-roasted Turkish hazelnuts folded into dense bittersweet fudge.',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Roasted Hazelnuts', 'Dark Chocolate 72%', 'Dutch Cocoa', 'Sea Salt'],
    allergens: 'Tree Nuts (Hazelnut), Dairy',
    storage: 'Keep at room temperature for 5 days.'
  },
  {
    id: 14,
    name: 'Pure Red Velvet Classic',
    cat: 'cakes',
    price: 1350,
    rating: 4.8,
    dietary: 'Eggless',
    weight: '0.5kg',
    desc: 'Velvety buttermilk sponge with Madagascar vanilla cream cheese swirl and ruby sponge crumb.',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Cultured Buttermilk', 'Bourbon Vanilla Bean', 'Philadelphia Cream Cheese', 'Cocoa'],
    allergens: 'Dairy, Gluten',
    storage: 'Refrigerate. Serve slightly cool.'
  },
  {
    id: 15,
    name: 'Salted Caramel Cupcake Casket',
    cat: 'cupcakes',
    price: 680,
    rating: 4.9,
    dietary: 'Eggless',
    weight: 'Box of 4',
    desc: 'Four delicate sponge cupcakes stuffed with slow-cooked caramel and crowned with pretzel crunch.',
    image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Light Sponge', 'Slow-cooked Caramel Core', 'Salted Buttercream', 'Crushed Pretzels'],
    allergens: 'Dairy, Gluten',
    storage: 'Store cool in sealed gift casket.'
  },
  {
    id: 16,
    name: 'Matcha Jasmine Choux',
    cat: 'pastries',
    price: 260,
    rating: 4.8,
    dietary: 'Vegetarian',
    weight: 'Piece',
    desc: 'Kyoto ceremonial matcha cream encased in crackly craquelin choux with jasmine white chocolate veil.',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=800&q=80',
    ingredients: ['Ceremonial Uji Matcha', 'Jasmine Flower Essence', 'French Choux Batter', 'Crisp Craquelin'],
    allergens: 'Dairy, Gluten, Egg',
    storage: 'Best consumed same day.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: 'Custom Celebration Cakes',
    price: 'From ₹1,450',
    desc: 'Bespoke themed centerpieces with sculpted sugar floral adornments and gold-leaf monograms.',
    perk: 'Custom sugar inscriptions included',
    icon: 'cake'
  },
  {
    id: 's2',
    title: 'Wedding & Engagement Cakes',
    price: 'From ₹6,500',
    desc: 'Multi-tiered architectural showpieces tailored to bridal aesthetics and venue palette.',
    perk: 'Complimentary structural testing',
    icon: 'favorite'
  },
  {
    id: 's3',
    title: 'Corporate & Bulk Gifting',
    price: 'From ₹450 / casket',
    desc: 'Gold-embossed gift boxes featuring your company monogram, sealed wax, and ribbon ties.',
    perk: 'Customized company sleeve',
    icon: 'apartment'
  },
  {
    id: 's4',
    title: 'Party & Event Catering',
    price: 'From ₹4,500',
    desc: 'Abundant dessert platters curated for cocktail hours, intimate dinners, and VIP galas.',
    perk: 'Includes setup & display wares',
    icon: 'celebration'
  },
  {
    id: 's5',
    title: 'Haute Dessert Tables',
    price: 'From ₹12,000',
    desc: 'Full-scale salon installations with macaron towers, verrines, petit fours, and botanical styling.',
    perk: 'Full styling and florals',
    icon: 'deck'
  },
  {
    id: 's6',
    title: 'Eggless & Vegan Kitchen',
    price: 'No surcharge',
    desc: 'Dedicated allergen-segregated prep station for pure vegan and nut-free dietary requirements.',
    perk: 'Pure dairy-free alternatives',
    icon: 'eco'
  },
  {
    id: 's7',
    title: 'Baking Masterclasses',
    price: '₹2,500 / seat',
    desc: 'Weekend workshops covering laminated choux, dark chocolate temper, and genoise sponges.',
    perk: 'Take-home patisserie box',
    icon: 'school'
  },
  {
    id: 's8',
    title: 'Luxe Gift Boxes & Hampers',
    price: 'From ₹950',
    desc: 'Hand-tied velvet ribbons encasing reserve brownies, single-estate teas, and chocolate bars.',
    perk: 'Calligraphy letter card',
    icon: 'redeem'
  },
  {
    id: 's9',
    title: 'Complimentary Tasting Salons',
    price: 'Free with booking',
    desc: 'Private 4-course sponge & ganache tasting for engaged couples and gala planners.',
    perk: 'Private lounge access',
    icon: 'local_cafe'
  }
];

export const BAKERS: Record<string, BakerItem[]> = {
  cakes: [
    {
      id: 'b1',
      name: 'Chef Julien Marc',
      title: 'Head Pastry Chef',
      exp: '14 Years',
      spec: 'Mirror Glaze Multi-Tiers',
      rating: '4.9★',
      department: 'cakes',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
      bio: 'Trained at École Ducasse Paris. Specialist in glossy mirror finishes and architectural balance.'
    },
    {
      id: 'b2',
      name: 'Chef Amara Sen',
      title: 'Master Decorator',
      exp: '8 Years',
      spec: 'Handcrafted Sugar Flowers',
      rating: '5.0★',
      department: 'cakes',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=600&q=80',
      bio: 'Former fine arts sculptor who crafts lifelike garden roses and ranunculus from edible gum paste.'
    },
    {
      id: 'b3',
      name: 'Chef Leo Rossi',
      title: 'Viennoiserie Lead',
      exp: '10 Years',
      spec: 'Almond Genoise Architecture',
      rating: '4.9★',
      department: 'cakes',
      image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=600&q=80',
      bio: 'Milan-trained maestro bringing airy crumb and subtle citrus notes to multi-layer sponges.'
    }
  ],
  brownies: [
    {
      id: 'b4',
      name: 'Chef Mateo Vance',
      title: 'Master Chocolatier',
      exp: '12 Years',
      spec: '70% Single-Origin Conching',
      rating: '5.0★',
      department: 'brownies',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=600&q=80',
      bio: 'Cocoa connoisseur obsessed with low-temperature baking to achieve the legendary glossy paper-thin brownie skin.'
    },
    {
      id: 'b5',
      name: 'Chef Priya Nair',
      title: 'Caramel Specialist',
      exp: '7 Years',
      spec: 'Slow Breton Salted Caramels',
      rating: '4.8★',
      department: 'brownies',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'Formulates our signature silky, non-crystallizing salted caramel sauces in traditional copper cauldrons.'
    },
    {
      id: 'b6',
      name: 'Chef Eric Blanc',
      title: 'Oven Brigade Master',
      exp: '9 Years',
      spec: 'Molten Core Temperature Control',
      rating: '4.9★',
      department: 'brownies',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      bio: 'Performs precision temperature logging across small-batch cast irons for foolproof gooey centers.'
    }
  ],
  custom: [
    {
      id: 'b7',
      name: 'Chef Camille Vane',
      title: 'Sculptural Cake Architect',
      exp: '15 Years',
      spec: '5-Tier Heritage Wedding Cakes',
      rating: '5.0★',
      department: 'custom',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      bio: 'Has crafted showstoppers for high society galas, international weddings, and luxury brand launches.'
    },
    {
      id: 'b8',
      name: 'Chef Daniel Cruz',
      title: 'Botanical Colorist',
      exp: '11 Years',
      spec: 'Natural Plant Glazes',
      rating: '4.9★',
      department: 'custom',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
      bio: 'Creates organic color palettes using spirulina, beetroot reductions, and butterfly pea blossoms.'
    },
    {
      id: 'b9',
      name: 'Chef Sarah Lin',
      title: 'Texture Technologist',
      exp: '6 Years',
      spec: 'Structural Stability without Fondant',
      rating: '4.9★',
      department: 'custom',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
      bio: 'Pioneered our proprietary all-natural whipped ganache support system that eliminates heavy fondants.'
    }
  ],
  pastries: [
    {
      id: 'b10',
      name: 'Chef Laurent Duprat',
      title: 'Executive Viennois',
      exp: '16 Years',
      spec: 'Laminated Mille-Feuille',
      rating: '5.0★',
      department: 'pastries',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: '3rd-generation baker from Lyon, France. Oversees the 72-hour cultured butter lamination process.'
    },
    {
      id: 'b11',
      name: 'Chef Nadia K.',
      title: 'Eclair Virtuoso',
      exp: '8 Years',
      spec: 'Craquelin Crisp Shells',
      rating: '4.9★',
      department: 'pastries',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
      bio: 'Crafts uniform 14cm choux batons filled with delicate infused creams and topped with glossy mirror veils.'
    },
    {
      id: 'b12',
      name: 'Chef Otto Weber',
      title: 'Bavarian Cream Specialist',
      exp: '10 Years',
      spec: 'Infused Diplomat Creams',
      rating: '4.8★',
      department: 'pastries',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      bio: 'Zurich pastry school graduate known for featherlight diplomat creams with zero graininess.'
    }
  ]
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: '24k Gold Leaf Midnight Gateau',
    cat: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
    details: '70% Callebaut ganache with hand-applied 24k gold leaf and fresh blackberries.'
  },
  {
    id: 2,
    title: 'Molten Sea Salt Brownie Trio',
    cat: 'brownies',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85',
    details: 'Freshly baked in individual cast pans with Maldon flaky sea salt.'
  },
  {
    id: 3,
    title: 'Gilded Wedding Reception Display',
    cat: 'dessert-tables',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZEqXHj0OTH_StUFqyL60GAWYvib65J6XWH4JYXqbSQSTqKz4xJsHiXcZcUaYGEHjkVR3D_OiFKR5etZ1pvWPhzWPaHpu8KUG9ZYAjkmL56NdIBEkoo--Oqt7-lhRo1Ihh-CI6NZO92FKZ_iXQY1twxqMhIWrND0CLSNQ8F_cUrxQKFpZaqFkhTzxJu8YJX8gX8nSNrokNIMr2K8PlWYjz2i0a1fvUdYs3vbrJ6Tq-hBFqTV0FPZUS',
    details: 'Bespoke multi-tier centerpiece framed by gold macaron towers and floral cascades.'
  },
  {
    id: 4,
    title: 'Single Origin Gianduja Layer',
    cat: 'cakes',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=1000&q=85',
    details: 'Roasted hazelnut praline layered between moist dark chocolate sponge.'
  },
  {
    id: 5,
    title: 'Lotus Speculoos Brownie Stack',
    cat: 'brownies',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=1000&q=85',
    details: 'Fudgy core marbled with warm spiced biscuit butter.'
  },
  {
    id: 6,
    title: 'Tahitian Vanilla Diplomat Mille-Feuille',
    cat: 'cakes',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1000&q=85',
    details: '72-layer caramelized puff pastry with whole bourbon bean cream.'
  },
  {
    id: 7,
    title: 'Pastel Macaron Pyramid Table',
    cat: 'dessert-tables',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=1000&q=85',
    details: 'French macarons arranged in an ombré color tower for salon high tea.'
  },
  {
    id: 8,
    title: 'Rustic Botanical Naked Cake',
    cat: 'cakes',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=85',
    details: 'Semi-naked ivory buttercream adorned with organic eucalyptus, berries, and figs.'
  },
  {
    id: 9,
    title: 'Dark Espresso Fudge Brownies',
    cat: 'brownies',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=1000&q=85',
    details: 'Arabica extract infused through dense single-origin cocoa.'
  },
  {
    id: 10,
    title: 'Rose & Wild Berry Tartlette',
    cat: 'cakes',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=85',
    details: 'Almond crust filled with whipped white chocolate and freshly picked berries.'
  },
  {
    id: 11,
    title: 'Champagne Velvet 3-Tier Centerpiece',
    cat: 'dessert-tables',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=85',
    details: 'Modern architectural tiers finished in ivory stone texture and gold ribbon.'
  },
  {
    id: 12,
    title: 'Bespoke Pistachio Craquelin Choux',
    cat: 'cakes',
    image: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=1000&q=85',
    details: 'Crispy cracked choux encasing roasted pistachio cremeux.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Lady Clarissa Sterling',
    event: 'Grand Wedding Reception',
    rating: 5,
    quote:
      'The 3-tier dark chocolate and raspberry centerpiece was the star of our evening. Not only visually breathtaking, but the crumb was delightfully moist and refined.',
    date: 'Verified Patron · Oct 2025'
  },
  {
    id: 2,
    name: 'Arjun Singhania',
    event: '30th Birthday Gala',
    rating: 5,
    quote:
      'The custom inscription and mirror ganache were sublime. The delivery arrived in an isolated chilled box right to the exact requested minute.',
    date: 'Verified Patron · Nov 2025'
  },
  {
    id: 3,
    name: 'Sophie Van Der Bilt',
    event: 'Corporate Executive Gift',
    rating: 5,
    quote:
      'We dispatched 45 brownie caskets to our executive partners across the state. The feedback was unanimous: the best molten texture they have ever experienced.',
    date: 'Verified Patron · Dec 2025'
  },
  {
    id: 4,
    name: 'Dr. Ethan Wright',
    event: 'Anniversary Dinner',
    rating: 5,
    quote:
      'The eggless velvet cheesecake surprised us completely. Light, rich, and utterly refined. We now order every month for our family milestones.',
    date: 'Verified Patron · Jan 2026'
  },
  {
    id: 5,
    name: 'Mira Kapoor',
    event: 'Baby Shower High Tea',
    rating: 5,
    quote:
      'From the tasting session with Chef Amara to the final display, the care and professionalism were top tier. Perfection in every single bite.',
    date: 'Verified Patron · Feb 2026'
  },
  {
    id: 6,
    name: 'Jean-Paul Laurent',
    event: 'Private Salon Patron',
    rating: 5,
    quote:
      'Reminds me of the legendary patisseries on Rue Saint-Honoré. The mille-feuille layers shatter with authentic artisanal precision.',
    date: 'Verified Patron · Mar 2026'
  }
];

export const FAQS: FaqItem[] = [
  {
    q: 'How much advance notice is required for bespoke cakes?',
    a: 'For custom multi-tier cakes and wedding commissions, we request 3 to 7 days notice. However, signature cakes and brownie boxes are prepared fresh daily and can be ordered with as little as 3 hours notice before the 4:00 PM daily cutoff.'
  },
  {
    q: 'Do you offer pure eggless and vegan pastry formulations?',
    a: 'Yes. Over 70% of our catalogue is naturally eggless, baked in a dedicated preparation station using flax, buttermilk replacers, and dairy-free European emulsions without compromising on decadent moisture.'
  },
  {
    q: 'How are products transported to guarantee flawless arrival?',
    a: 'All confections are placed within shock-absorbing velvet cradles and delivered via our climate-controlled temperature dispatch fleet (14°C - 16°C) to safeguard structural glazes and delicate sugar petals.'
  },
  {
    q: 'Can I customize the sweetness or cocoa percentage in my order?',
    a: 'Absolutely. When placing a bespoke cake inquiry, you may specify your cocoa percentage (54%, 70%, or 85% Callebaut) and request low-sugar Madagascar vanilla bean frostings.'
  },
  {
    q: 'What is your boutique cancellation and rescheduling policy?',
    a: 'Orders may be rescheduled up to 24 hours prior to the dispatch window free of penalty. Same-day cancellations after baking initiation receive a 50% atelier credit.'
  },
  {
    q: 'How should I store my brownies and celebration cakes?',
    a: 'Brownies thrive at room temperature for up to 5 days (heat for 12 seconds in a microwave for an instant molten core). Cakes should be refrigerated and brought to room temperature 20 minutes prior to slicing.'
  },
  {
    q: 'Do you cater bulk celebrations and luxury corporate events?',
    a: 'Yes, our hospitality brigade manages dessert tables, corporate branded hampers, and multi-piece wedding favours. Enquire through our Artisan Services ledger.'
  },
  {
    q: 'Which payment options do you support at delivery and online?',
    a: 'We accept all major luxury credit cards, UPI instant transfers, Apple Pay, and verified cash settlements upon white-glove arrival.'
  }
];

export const BROWNIE_FLAVORS = [
  {
    key: 'fudge',
    name: 'Double Fudge Molten',
    badge: 'Pinnacle Blend',
    desc: 'Gooey Belgian chocolate center with crackly gloss meringue crust.',
    unitPrice: 140,
    icon: 'cookie',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80'
  },
  {
    key: 'espresso',
    name: 'Espresso Sea Salt',
    badge: 'Nordic Roast',
    desc: 'Single-estate Arabica extraction, Maldon flaky salt, deep chocolate.',
    unitPrice: 150,
    icon: 'local_cafe',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=400&q=80'
  },
  {
    key: 'hazelnut',
    name: 'Roasted Hazelnut Crunch',
    badge: 'Piedmont Classic',
    desc: 'Slow-toasted hazelnuts folded with dark gianduja ganache.',
    unitPrice: 160,
    icon: 'grain',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=80'
  },
  {
    key: 'lotus',
    name: 'Caramel Lotus Swirl',
    badge: 'Spiced Cream',
    desc: 'Speculoos cookie butter marbled through velvety fudge core.',
    unitPrice: 160,
    icon: 'bakery_dining',
    image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=400&q=80'
  }
];

export const OCCASIONS = [
  { name: 'Birthdays', count: '18 collections', icon: 'cake' },
  { name: 'Weddings', count: 'Grand multi-tiers', icon: 'church' },
  { name: 'Anniversary', count: 'Intimate luxe', icon: 'favorite' },
  { name: 'Baby Showers', count: 'Pastel elegance', icon: 'child_care' },
  { name: 'Corporate', count: 'Logo hampers', icon: 'apartment' },
  { name: 'Festivals', count: 'Seasonal batches', icon: 'festival' }
];

export const COUPONS = [
  {
    code: 'FIRST15',
    tag: 'FIRST ORDER',
    title: '15% Off Celebration Cakes',
    condition: 'Valid on all items above ₹999',
    discountPercent: 15,
    minSpend: 999
  },
  {
    code: 'WEEKENDTREAT',
    tag: 'COMPLIMENTARY TREAT',
    title: 'Free Brownie Pair',
    condition: 'On orders surpassing ₹1,500',
    discountAmount: 280,
    minSpend: 1500
  },
  {
    code: 'CORP20',
    tag: 'GALA & CORPORATE',
    title: '20% Bulk Privilege',
    condition: 'Applicable for orders above ₹3,000',
    discountPercent: 20,
    minSpend: 3000
  }
];
