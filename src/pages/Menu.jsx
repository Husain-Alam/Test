import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

const menuItems = [
  {
    id: 1,
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken and special spices',
    image: '/biryani.png',
    servingOptions: [
      { size: '1 Person', price: 400 },
      { size: 'Full', price: 1200 }
    ],
    spiceLevels: ['Mild', 'Medium', 'Spicy'],
  },
  {
    id: 2,
    name: 'Special Kheer',
    description: 'Traditional rice pudding made with milk, sugar, and aromatic cardamom, garnished with nuts.',
    image: '/kheer.jpg',
    servingOptions: [
      { size: '1 Person', price: 200 },
      { size: 'Full', price: 600 }
    ],
    spiceLevels: ['Low', 'Medium', 'High'],
  },
];

const MenuItem = ({ item, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(item.servingOptions[0]);
  const [selectedSpice, setSelectedSpice] = useState(item.spiceLevels[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({
      ...item,
      selectedSize,
      selectedSpice,
      quantity,
      totalPrice: selectedSize.price * quantity
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Serving Size
            </label>
            <select
              value={JSON.stringify(selectedSize)}
              onChange={(e) => setSelectedSize(JSON.parse(e.target.value))}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none"
            >
              {item.servingOptions.map((option) => (
                <option key={option.size} value={JSON.stringify(option)}>
                  {option.size} - Rs. {option.price}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Spice/Sweetness Level
            </label>
            <select
              value={selectedSpice}
              onChange={(e) => setSelectedSpice(e.target.value)}
              className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none"
            >
              {item.spiceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Quantity
            </label>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="text-lg font-bold text-primary">
            Total: Rs. {selectedSize.price * quantity}
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

function Menu() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const { user } = useAuth();

  const handleAddToCart = (item) => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }
    
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Added to cart!');
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>

      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-primary mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">
              Please login or create an account to add items to your cart.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="flex-1 border border-primary text-primary py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
              >
                Sign Up
              </button>
            </div>
            <button
              onClick={() => setShowLoginPrompt(false)}
              className="mt-4 text-gray-500 hover:text-gray-700 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4">
          <button
            onClick={() => navigate('/checkout')}
            className="bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors flex items-center space-x-2"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span>View Cart ({cart.length})</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
