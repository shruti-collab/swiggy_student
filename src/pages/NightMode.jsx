import React from 'react';
import { Button, Card, CardContent } from '../components/ui';
import { Moon } from 'lucide-react';

const NightMode = () => {
  const nightItems = [
    { id: 1, name: 'Midnight Pizza', price: 90, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop' },
    { id: 2, name: 'Late Night Burger', price: 100, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop' },
    { id: 3, name: 'Noodles Bowl', price: 110, img: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=250&fit=crop' },
    { id: 4, name: 'Sandwich Combo', price: 120, img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=250&fit=crop' },
    { id: 5, name: 'Pasta Special', price: 130, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=250&fit=crop' },
    { id: 6, name: 'Wraps & Rolls', price: 140, img: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=250&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 justify-center">
          <Moon className="w-5 h-5 sm:w-6 sm:h-6" /> Swiggy Night Mode
        </h3>
        <p className="text-sm sm:text-base text-gray-300 text-center max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
          Order after 11 PM with exclusive late-night menus and discounts!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {nightItems.map((item) => (
            <Card key={item.id} className="bg-gray-800 text-white overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="w-full h-40 sm:h-48 object-cover" 
                />
                <div className="p-4 sm:p-6">
                  <h4 className="text-base sm:text-lg font-semibold mb-1">{item.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mb-3">
                    Exclusive ₹20 off combos for students!
                  </p>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs sm:text-sm text-yellow-400">🌙 Night Special</span>
                    <span className="text-sm sm:text-base text-swiggy-400 font-semibold">₹{item.price}</span>
                  </div>
                  <Button className="bg-swiggy-500 hover:bg-swiggy-600 w-full text-sm sm:text-base">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-swiggy-400">Night Mode Benefits</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🕚</div>
              <h5 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">11 PM - 6 AM</h5>
              <p className="text-sm sm:text-base text-gray-300">Extended delivery hours for night owls</p>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💸</div>
              <h5 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Special Discounts</h5>
              <p className="text-sm sm:text-base text-gray-300">Extra ₹20 off on all night orders</p>
            </div>
            <div className="p-4">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🍕</div>
              <h5 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Night Menu</h5>
              <p className="text-sm sm:text-base text-gray-300">Exclusive late-night food options</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NightMode;