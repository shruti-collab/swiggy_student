import React from 'react';
import { Button, Card, CardContent } from '../components/ui';

const MessFood = () => {
  const messItems = [
    { id: 1, name: 'South Indian Thali', rating: '4.5', price: 49, img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=250&fit=crop' },
    { id: 2, name: 'North Indian Combo', rating: '4.3', price: 55, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop' },
    { id: 3, name: 'Biryani Special', rating: '4.7', price: 70, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=250&fit=crop' },
    { id: 4, name: 'Gujarati Thali', rating: '4.6', price: 60, img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=250&fit=crop' },
    { id: 5, name: 'Punjabi Meal', rating: '4.4', price: 65, img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=250&fit=crop' },
    { id: 6, name: 'Bengali Thali', rating: '4.8', price: 75, img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=250&fit=crop' },
  ];

  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-orange-50 to-orange-100">
      <section className="px-6 py-16">
        <h3 className="mb-10 text-3xl font-bold text-center text-swiggy-700">
          Mess & Tiffin Services Nearby
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {messItems.map((item) => (
            <Card key={item.id} className="shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img 
                  src={item.img} 
                  alt={item.name}
                  className="object-cover w-full h-48" 
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-1">{item.name}</h4>
                  <p className="mb-3 text-sm text-gray-600">
                    Daily meals starting ₹{item.price} only! Verified by students.
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold text-green-600">⭐ {item.rating}/5</span>
                    <span className="font-semibold text-swiggy-500">₹{item.price}</span>
                  </div>
                  <Button className="w-full text-white bg-swiggy-500 hover:bg-swiggy-600">
                    Order Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="px-6 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="mb-6 text-2xl font-bold text-swiggy-700">Why Choose Our Mess Partners?</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-4">
              <div className="mb-3 text-3xl">✅</div>
              <h5 className="mb-2 font-semibold">Student Verified</h5>
              <p className="text-gray-600">All mess services are verified and rated by fellow students</p>
            </div>
            <div className="p-4">
              <div className="mb-3 text-3xl">💰</div>
              <h5 className="mb-2 font-semibold">Budget Friendly</h5>
              <p className="text-gray-600">Affordable meals starting from just ₹49 per meal</p>
            </div>
            <div className="p-4">
              <div className="mb-3 text-3xl">🚚</div>
              <h5 className="mb-2 font-semibold">Quick Delivery</h5>
              <p className="text-gray-600">Fast delivery to your hostel or college campus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MessFood;