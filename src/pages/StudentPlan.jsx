import React from 'react';
import { Button, Card, CardContent } from '../components/ui';
import { ShoppingCart } from 'lucide-react';

const StudentPlan = () => {
  const planFeatures = [
    { icon: '🚚', title: 'Free Delivery', desc: 'Zero delivery charges on all orders' },
    { icon: '👥', title: 'Group Order Discounts', desc: 'Extra savings when ordering with friends' },
    { icon: '🎯', title: 'Exclusive Deals', desc: 'Student-only offers and discounts' },
    { icon: '⚡', title: 'Priority Support', desc: '24/7 dedicated student support' },
    { icon: '🎓', title: 'Campus Partnerships', desc: 'Special deals with campus vendors' },
    { icon: '💰', title: 'DineCash Rewards', desc: 'Earn 2x rewards on every order' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 text-gray-800">
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-orange-50 text-center">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-swiggy-700 flex justify-center items-center gap-2">
          <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" /> Swiggy Student Plan
        </h3>
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
          Get free delivery, group order discounts, and exclusive student deals. Only ₹99/month.
        </p>
        
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
          <div className="text-4xl sm:text-6xl font-bold text-swiggy-600 mb-2">₹99</div>
          <div className="text-sm sm:text-base text-gray-500 mb-4 sm:mb-6">/month</div>
          <div className="space-y-2 sm:space-y-3 text-left mb-4 sm:mb-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-green-500 text-lg sm:text-xl">✓</span>
              <span className="text-sm sm:text-base">Unlimited free delivery</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-green-500 text-lg sm:text-xl">✓</span>
              <span className="text-sm sm:text-base">Exclusive student discounts</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-green-500 text-lg sm:text-xl">✓</span>
              <span className="text-sm sm:text-base">Group order savings</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-green-500 text-lg sm:text-xl">✓</span>
              <span className="text-sm sm:text-base">Priority customer support</span>
            </div>
          </div>
          <Button className="bg-swiggy-600 text-white hover:bg-swiggy-700 w-full text-base sm:text-lg py-2 sm:py-3">
            Subscribe Now
          </Button>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <h4 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 text-swiggy-700">Plan Benefits</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {planFeatures.map((feature, idx) => (
            <Card key={idx} className="p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h5 className="font-semibold text-base sm:text-lg mb-2">{feature.title}</h5>
                <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h4 className="text-2xl font-bold mb-6 text-swiggy-700">Why Students Love Our Plan</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📊</div>
              <h5 className="font-semibold text-base sm:text-lg mb-2">Save Up to ₹500/month</h5>
              <p className="text-sm sm:text-base text-gray-600">Average savings compared to regular delivery charges</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⭐</div>
              <h5 className="font-semibold text-base sm:text-lg mb-2">4.8/5 Rating</h5>
              <p className="text-sm sm:text-base text-gray-600">Rated by over 10,000 student subscribers</p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
              <h5 className="font-semibold text-base sm:text-lg mb-2">No Minimum Order</h5>
              <p className="text-sm sm:text-base text-gray-600">Order anything, anytime with free delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-gradient-to-r from-swiggy-500 to-swiggy-600 text-white text-center">
        <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Start Saving?</h4>
        <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
          Join thousands of students who are already saving money with Swiggy Student Plan
        </p>
        <Button className="bg-white text-swiggy-600 font-semibold hover:bg-gray-100 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
          Get Started Today
        </Button>
      </section>
    </div>
  );
};

export default StudentPlan;