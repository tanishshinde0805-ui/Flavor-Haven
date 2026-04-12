const menuData = [
  {
    category: 'Veg Starters',
    items: [
      { name: 'Paneer Tikka', price: 280, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center', desc: 'Succulent cottage cheese cubes marinated in aromatic spices and grilled to perfection.', rating: '⭐ 4.5 (100 reviews)' },
      { name: 'Onion Bhaji', price: 180, image: 'https://images.unsplash.com/photo-1617096700595-3bb87811081b?w=400&h=300&fit=crop&crop=center', desc: 'Crispy onion fritters coated in spiced chickpea flour, fried golden brown.', rating: '⭐ 4.5 (95 reviews)' },
      { name: 'Aloo Tikka', price: 200, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center', desc: 'Spiced potato patties shallow fried, served with tangy tamarind chutney.', rating: '⭐ 4.5 (90 reviews)' },
      { name: 'Hara Bhara Kebab', price: 220, image: 'https://images.unsplash.com/photo-1603048297194-9e91f9e1d989?w=400&h=300&fit=crop&crop=center', desc: 'Green peas and spinach patties blended with Indian spices and shallow fried.', rating: '⭐ 4.5 (85 reviews)' },
      { name: 'Veg Manchurian', price: 240, image: 'https://images.unsplash.com/photo-1601001739743-e9e90f565b93?w=400&h=300&fit=crop&crop=center', desc: 'Crispy vegetable balls tossed in flavorful Indo-Chinese manchurian sauce.', rating: '⭐ 4.5 (80 reviews)' },
      { name: 'Chilli Paneer', price: 290, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center', desc: 'Cottage cheese cubes cooked with green chillies and bell peppers in spicy sauce.', rating: '⭐ 4.5 (75 reviews)' },
      { name: 'Mushroom Tikka', price: 260, image: 'https://images.unsplash.com/photo-1593797358319-082dc1552722?w=400&h=300&fit=crop&crop=center', desc: 'Button mushrooms marinated in yogurt and Indian spices, grilled perfectly.', rating: '⭐ 4.5 (70 reviews)' },
      { name: 'Veg Pakora Platter', price: 210, image: 'https://images.unsplash.com/photo-1618712057042-d843e9341a97?w=400&h=300&fit=crop&crop=center', desc: 'Assorted mixed vegetable fritters including onion, spinach, potato, and chilli.', rating: '⭐ 4.5 (65 reviews)' },
      { name: 'Crispy Baby Corn', price: 230, image: 'https://images.unsplash.com/photo-1611687036720-fce6c1bb8b57?w=400&h=300&fit=crop&crop=center', desc: 'Baby corn coated in spicy batter and deep fried until crispy.', rating: '⭐ 4.5 (60 reviews)' },
      { name: 'Stuffed Mushroom', price: 270, image: 'https://images.unsplash.com/photo-1633991084476-9cf6fa4e1a7a?w=400&h=300&fit=crop&crop=center', desc: 'Mushrooms stuffed with spiced paneer mixture and grilled to perfection.', rating: '⭐ 4.5 (55 reviews)' }
    ]
  },
  {
    category: 'Non-Veg Starters',
    items: [
      { name: 'Paneer Tikka', price: 280, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center', desc: 'Succulent cottage cheese cubes marinated in aromatic spices and grilled to perfection.', rating: '⭐ 4.5 (100 reviews)' },
      { name: 'Onion Bhaji', price: 180, image: 'https://images.unsplash.com/photo-1617096700595-3bb87811081b?w=400&h=300&fit=crop&crop=center', desc: 'Crispy onion fritters coated in spiced chickpea flour, fried golden brown.', rating: '⭐ 4.5 (95 reviews)' },
      // ... remaining from nonveg-starter (same as veg for now)
    ]
  },
{
    category: 'Non-Veg Starters',
    items: [
      { name: 'Paneer Tikka', price: 280, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center', desc: 'Succulent cottage cheese cubes marinated in aromatic spices and grilled to perfection.', rating: '⭐ 4.5 (100 reviews)' },
      { name: 'Onion Bhaji', price: 180, image: 'https://images.unsplash.com/photo-1617096700595-3bb87811081b?w=400&h=300&fit=crop&crop=center', desc: 'Crispy onion fritters coated in spiced chickpea flour, fried golden brown.', rating: '⭐ 4.5 (95 reviews)' },
      { name: 'Aloo Tikki', price: 200, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center', desc: 'Spiced potato patties shallow fried, served with tangy tamarind chutney.', rating: '⭐ 4.5 (90 reviews)' },
      { name: 'Hara Bhara Kebab', price: 220, image: 'https://images.unsplash.com/photo-1603048297194-9e91f9e1d989?w=400&h=300&fit=crop&crop=center', desc: 'Green peas and spinach patties blended with Indian spices and shallow fried.', rating: '⭐ 4.5 (85 reviews)' },
      { name: 'Veg Manchurian', price: 240, image: 'https://images.unsplash.com/photo-1601001739743-e9e90f565b93?w=400&h=300&fit=crop&crop=center', desc: 'Crispy vegetable balls tossed in flavorful Indo-Chinese manchurian sauce.', rating: '⭐ 4.5 (80 reviews)' },
      { name: 'Chilli Paneer', price: 290, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center', desc: 'Cottage cheese cubes cooked with green chillies and bell peppers in spicy sauce.', rating: '⭐ 4.5 (75 reviews)' },
      { name: 'Mushroom Tikka', price: 260, image: 'https://images.unsplash.com/photo-1593797358319-082dc1552722?w=400&h=300&fit=crop&crop=center', desc: 'Button mushrooms marinated in yogurt and Indian spices, grilled perfectly.', rating: '⭐ 4.5 (70 reviews)' },
      { name: 'Veg Pakora Platter', price: 210, image: 'https://images.unsplash.com/photo-1618712057042-d843e9341a97?w=400&h=300&fit=crop&crop=center', desc: 'Assorted mixed vegetable fritters including onion, spinach, potato, and chilli.', rating: '⭐ 4.5 (65 reviews)' },
      { name: 'Crispy Baby Corn', price: 230, image: 'https://images.unsplash.com/photo-1611687036720-fce6c1bb8b57?w=400&h=300&fit=crop&crop=center', desc: 'Baby corn coated in spicy batter and deep fried until crispy.', rating: '⭐ 4.5 (60 reviews)' },
      { name: 'Stuffed Mushroom', price: 270, image: 'https://images.unsplash.com/photo-1633991084476-9cf6fa4e1a7a?w=400&h=300&fit=crop&crop=center', desc: 'Mushrooms stuffed with spiced paneer mixture and grilled to perfection.', rating: '⭐ 4.5 (55 reviews)' }
    ]
  },
  {
    category: 'Main Course',
    items: [
      { name: 'Butter Chicken', price: 420, image: 'https://images.unsplash.com/photo-1578286240405-b7b8c0bb8e8f?w=400&h=300&fit=crop&crop=center', desc: 'Creamy tomato-based chicken curry cooked with butter and aromatic spices.', rating: '⭐ 4.7 (210 reviews)' },
      { name: 'Chicken Biryani', price: 360, image: 'https://images.unsplash.com/photo-1606617622061-8e99f9cd74b7?w=400&h=300&fit=crop&crop=center', desc: 'Fragrant basmati rice cooked with spiced chicken and traditional herbs.', rating: '⭐ 4.6 (195 reviews)' },
      { name: 'Mutton Rogan Josh', price: 480, image: 'https://images.unsplash.com/photo-1590748730883-a962d7a911d4?w=400&h=300&fit=crop&crop=center', desc: 'Rich and flavorful mutton curry cooked in Kashmiri spices.', rating: '⭐ 4.7 (170 reviews)' },
      { name: 'Paneer Butter Masala', price: 340, image: 'https://images.unsplash.com/photo-1593177484506-e0d2d89b7082?w=400&h=300&fit=crop&crop=center', desc: 'Soft paneer cubes cooked in creamy tomato gravy.', rating: '⭐ 4.5 (160 reviews)' },
      { name: 'Veg Biryani', price: 300, image: 'https://images.unsplash.com/photo-1603540867680-d5d9952a5c1e?w=400&h=300&fit=crop&crop=center', desc: 'Aromatic basmati rice cooked with fresh vegetables and spices.', rating: '⭐ 4.4 (150 reviews)' },
      { name: 'Dal Tadka', price: 260, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center', desc: 'Yellow lentils tempered with garlic, cumin, and ghee.', rating: '⭐ 4.3 (120 reviews)' },
      { name: 'Chicken Handi', price: 400, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center', desc: 'Traditional chicken curry cooked in clay pot with rich spices.', rating: '⭐ 4.6 (175 reviews)' },
      { name: 'Mutton Biryani', price: 460, image: 'https://images.unsplash.com/photo-1590748730883-a962d7a911d4?w=400&h=300&fit=crop&crop=center', desc: 'Slow-cooked basmati rice layered with tender mutton and spices.', rating: '⭐ 4.7 (180 reviews)' },
      { name: 'Kadai Paneer', price: 320, image: 'https://images.unsplash.com/photo-1601001739743-e9e90f565b93?w=400&h=300&fit=crop&crop=center', desc: 'Paneer cooked with capsicum and onion in spicy kadai masala.', rating: '⭐ 4.5 (145 reviews)' },
      { name: 'Veg Kolhapuri', price: 310, image: 'https://images.unsplash.com/photo-1603464364458-5f262b6a557b?w=400&h=300&fit=crop&crop=center', desc: 'Spicy Maharashtrian mixed vegetable curry with bold flavors.', rating: '⭐ 4.4 (135 reviews)' }
    ]
  },
  {
    category: 'Italian Fusion',
    items: [
      { name: 'Fusion Margherita Pizza', price: 480, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center', desc: 'A delightful fusion of traditional Margherita pizza with a modern twist.', rating: '⭐ 4.5 (110 reviews)' },
      { name: 'Chicken Alfredo Pasta', price: 450, image: 'https://images.unsplash.com/photo-1617096700595-3bb87811081b?w=400&h=300&fit=crop&crop=center', desc: 'Creamy Alfredo sauce tossed with tender chicken and pasta.', rating: '⭐ 4.5 (105 reviews)' },
      { name: 'Paneer Pesto Pasta', price: 390, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center', desc: 'Rich and aromatic paneer tossed with pesto sauce and pasta.', rating: '⭐ 4.5 (100 reviews)' },
      { name: 'Paneer Butter Masala', price: 320, image: 'https://images.unsplash.com/photo-1603048297194-9e91f9e1d989?w=400&h=300&fit=crop&crop=center', desc: 'Creamy tomato-based curry with tender paneer cubes and aromatic spices.', rating: '⭐ 4.5 (95 reviews)' },
      { name: 'Spicy Chicken Lasagna', price: 440, image: 'https://images.unsplash.com/photo-1601001739743-e9e90f565b93?w=400&h=300&fit=crop&crop=center', desc: 'Layered pasta with spicy chicken and rich tomato sauce.', rating: '⭐ 4.5 (90 reviews)' },
      { name: 'Veg White Sauce Pasta', price: 390, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center', desc: 'Creamy white sauce tossed with fresh vegetables and pasta.', rating: '⭐ 4.5 (85 reviews)' },
      { name: 'Chicken Lasagna', price: 460, image: 'https://images.unsplash.com/photo-1593797358319-082dc1552722?w=400&h=300&fit=crop&crop=center', desc: 'Tender chicken pieces cooked in a rich, creamy tomato-based sauce.', rating: '⭐ 4.5 (80 reviews)' },
      { name: 'Chicken Peri Peri Pizza', price: 410, image: 'https://images.unsplash.com/photo-1618712057042-d843e9341a97?w=400&h=300&fit=crop&crop=center', desc: 'Spicy chicken pieces tossed in peri peri sauce and served on a cheesy pizza base.', rating: '⭐ 4.5 (75 reviews)' },
      { name: 'Chicken Cheese Ravioli', price: 530, image: 'https://images.unsplash.com/photo-1611687036720-fce6c1bb8b57?w=400&h=300&fit=crop&crop=center', desc: 'Soft ravioli stuffed with chicken and cheese in creamy sauce.', rating: '⭐ 4.5 (70 reviews)' },
      { name: 'Mushroom Risotto Fusion', price: 470, image: 'https://images.unsplash.com/photo-1633991084476-9cf6fa4e1a7a?w=400&h=300&fit=crop&crop=center', desc: 'Creamy risotto with sautéed mushrooms and a hint of herbs.', rating: '⭐ 4.5 (65 reviews)' }
    ]
  },
  {
    category: 'Desserts',
    items: [
      { name: 'Tiramisu', price: 380, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center', desc: 'A rich and creamy Italian dessert layered with coffee-soaked ladyfingers.', rating: '⭐ 4.5 (90 reviews)' },
      { name: 'Blueberry Cheesecake', price: 350, image: 'https://images.unsplash.com/photo-1617096700595-3bb87811081b?w=400&h=300&fit=crop&crop=center', desc: 'A creamy cheesecake infused with fresh blueberries.', rating: '⭐ 4.5 (85 reviews)' },
      { name: 'Belgian Chocolate Mousse', price: 390, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center', desc: 'Rich and aromatic chocolate mousse with a velvety texture.', rating: '⭐ 4.5 (80 reviews)' },
      { name: 'Red Velvet Pastry', price: 290, image: 'https://images.unsplash.com/photo-1603048297194-9e91f9e1d989?w=400&h=300&fit=crop&crop=center', desc: 'A moist and rich red velvet pastry with a cream cheese frosting.', rating: '⭐ 4.5 (75 reviews)' },
      { name: 'Caramel Custard', price: 260, image: 'https://images.unsplash.com/photo-1601001739743-e9e90f565b93?w=400&h=300&fit=crop&crop=center', desc: 'A rich and creamy custard with a delightful caramel topping.', rating: '⭐ 4.5 (70 reviews)' },
      { name: 'Chocolate Truffle Cake', price: 390, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center', desc: 'A decadent chocolate cake filled with rich truffle centers.', rating: '⭐ 4.5 (65 reviews)' },
      { name: 'Mango Cheesecake', price: 310, image: 'https://images.unsplash.com/photo-1593797358319-082dc1552722?w=400&h=300&fit=crop&crop=center', desc: 'A refreshing cheesecake infused with the flavors of ripe mangoes.', rating: '⭐ 4.5 (60 reviews)' },
      { name: 'Macarons (Assorted)', price: 330, image: 'https://images.unsplash.com/photo-1618712057042-d843e9341a97?w=400&h=300&fit=crop&crop=center', desc: 'Delicate French macarons filled with various flavors and colors.', rating: '⭐ 4.5 (55 reviews)' },
      { name: 'Ferrero Rocher Cake', price: 380, image: 'https://images.unsplash.com/photo-1611687036720-fce6c1bb8b57?w=400&h=300&fit=crop&crop=center', desc: 'A luxurious cake featuring the beloved Ferrero Rocher chocolates.', rating: '⭐ 4.5 (50 reviews)' },
      { name: 'Nutella Pancake Dessert', price: 370, image: 'https://images.unsplash.com/photo-1633991084476-9cf6fa4e1a7a?w=400&h=300&fit=crop&crop=center', desc: 'Fluffy pancakes topped with creamy Nutella and fresh fruits.', rating: '⭐ 4.5 (45 reviews)' }
    ]
  },
  {
    category: 'Beverages',
    items: [
      { name: 'Blue Lagoon Mocktail', price: 220, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center', desc: 'A refreshing mocktail with a blue color and tropical flavors.', rating: '⭐ 4.4 (80 reviews)' },
      { name: 'Virgin Mojito', price: 200, image: 'https://images.unsplash.com/photo-1617096700595-3bb87811081b?w=400&h=300&fit=crop&crop=center', desc: 'A refreshing cocktail made with fresh mint leaves and lime juice.', rating: '⭐ 4.4 (75 reviews)' },
      { name: 'Strawberry Smoothie', price: 240, image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop&crop=center', desc: 'A delicious blend of fresh strawberries and creamy yogurt.', rating: '⭐ 4.4 (70 reviews)' },
      { name: 'Mango Mint Cooler', price: 210, image: 'https://images.unsplash.com/photo-1603048297194-9e91f9e1d989?w=400&h=300&fit=crop&crop=center', desc: 'A refreshing cooler with a blend of fresh mango and mint.', rating: '⭐ 4.4 (65 reviews)' },
      { name: 'Chocolate Cold Coffee', price: 230, image: 'https://images.unsplash.com/photo-1601001739743-e9e90f565b93?w=400&h=300&fit=crop&crop=center', desc: 'A rich and creamy cold coffee with a hint of chocolate.', rating: '⭐ 4.4 (60 reviews)' },
      { name: 'Watermelon Mojito', price: 220, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop&crop=center', desc: 'A refreshing mojito made with fresh watermelon and mint.', rating: '⭐ 4.4 (55 reviews)' },
      { name: 'Pineapple Punch', price: 210, image: 'https://images.unsplash.com/photo-1593797358319-082dc1552722?w=400&h=300&fit=crop&crop=center', desc: 'A refreshing punch made with fresh pineapple and tropical flavors.', rating: '⭐ 4.4 (50 reviews)' },
      { name: 'Oreo Milkshake', price: 230, image: 'https://images.unsplash.com/photo-1618712057042-d843e9341a97?w=400&h=300&fit=crop&crop=center', desc: 'A creamy milkshake infused with the flavors of Oreo cookies.', rating: '⭐ 4.4 (45 reviews)' },
      { name: 'Green Apple Cooler', price: 220, image: 'https://images.unsplash.com/photo-1611687036720-fce6c1bb8b57?w=400&h=300&fit=crop&crop=center', desc: 'A refreshing cooler made with fresh green apples and a hint of mint.', rating: '⭐ 4.4 (40 reviews)' },
      { name: 'Kiwi Mint Mocktail', price: 230, image: 'https://images.unsplash.com/photo-1633991084476-9cf6fa4e1a7a?w=400&h=300&fit=crop&crop=center', desc: 'A refreshing mocktail made with fresh kiwi and mint leaves.', rating: '⭐ 4.4 (35 reviews)' }
    ]
  }
];

