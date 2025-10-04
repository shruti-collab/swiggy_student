import React from 'react';
import { Button, Card, CardContent } from '../components/ui';
import { Award } from 'lucide-react';

const Rewards = () => {
  const rewards = [
    { 
      title: 'Daily Streak Bonus', 
      desc: 'Order 3 days in a row and get ₹100 DineCash.',
      icon: '🔥',
      value: '₹100'
    },
    { 
      title: 'Refer & Earn', 
      desc: 'Invite your friends and earn 50 coins each.',
      icon: '👥',
      value: '50 coins'
    },
    { 
      title: 'Weekly Challenge', 
      desc: 'Complete 5 orders in a week and unlock special discounts.',
      icon: '🎯',
      value: '25% off'
    },
    { 
      title: 'Student Badge', 
      desc: 'Verify your student status and get exclusive perks.',
      icon: '🎓',
      value: 'Exclusive deals'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 text-gray-800">
      <section className="py-16 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold mb-6 text-swiggy-700 flex justify-center items-center gap-2">
          <Award /> Student Rewards Zone
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Earn coins, streaks, and DineCash for every order. Redeem for free food, discounts, or coupons!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {rewards.map((reward, idx) => (
            <Card key={idx} className="p-6 shadow-lg border border-swiggy-100 hover:shadow-xl transition-shadow">
              <CardContent>
                <div className="text-4xl mb-4">{reward.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{reward.title}</h4>
                <p className="text-sm text-gray-500 mb-3">{reward.desc}</p>
                <div className="text-swiggy-600 font-bold text-lg mb-3">{reward.value}</div>
                <Button className="bg-swiggy-500 text-white hover:bg-swiggy-600">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-gradient-to-r from-swiggy-500 to-swiggy-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-6">Your Current Status</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-xl">
              <div className="text-3xl mb-2">🪙</div>
              <div className="text-2xl font-bold">250</div>
              <div className="text-sm">Coins Earned</div>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm">Day Streak</div>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-xl">
              <div className="text-3xl mb-2">💰</div>
              <div className="text-2xl font-bold">₹75</div>
              <div className="text-sm">DineCash Balance</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-6 text-swiggy-700">How to Earn More?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-2xl mb-2">📱</div>
              <div className="font-semibold">Order Daily</div>
              <div className="text-sm text-gray-600">+10 coins per order</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-2xl mb-2">⭐</div>
              <div className="font-semibold">Rate Orders</div>
              <div className="text-sm text-gray-600">+5 coins per rating</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-2xl mb-2">📝</div>
              <div className="font-semibold">Write Reviews</div>
              <div className="text-sm text-gray-600">+15 coins per review</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="text-2xl mb-2">🎉</div>
              <div className="font-semibold">Special Events</div>
              <div className="text-sm text-gray-600">Bonus rewards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rewards;