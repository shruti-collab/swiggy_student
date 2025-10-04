import React from 'react';
import { Button } from '../components/ui';
import { Link } from 'react-router-dom';

const Home = () => {
  const studentProblems = [
    {
      problem: 'Expensive Delivery Fees',
      image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=400&h=300&fit=crop',
      solution: 'Free delivery with Student Plan'
    },
    {
      problem: 'Late Night Hunger',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
      solution: 'Night Mode - Order till 6 AM'
    },
    {
      problem: 'Limited Budget',
      image: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=400&h=300&fit=crop',
      solution: 'Mess Food from ₹49 only'
    },
    {
      problem: 'Missing Home Food',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      solution: 'Verified Tiffin Services'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 text-gray-800">
      {/* Hero Section with Background Image and Glassmorphism */}
      <section className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.pinimg.com/1200x/fc/e2/22/fce2226cb5985ecec5772dd0d225dd5e.jpg" 
            alt="Food Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-swiggy-500/90 to-swiggy-600/90"></div>
        </div>

        {/* Glassmorphism Content Card */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full">
          <div className="backdrop-blur-xl bg-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
            <div className="flex justify-center mb-4 sm:mb-6">
              <img 
                src="https://i.pinimg.com/1200x/73/97/04/739704de9f9f307063de2e94e45d4f89.jpg" 
                alt="Swiggy" 
                className="h-12 sm:h-16 lg:h-20"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white drop-shadow-lg">
              Swiggy Student 🎓
            </h2>
            <p className="text-base sm:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 drop-shadow-md">
              Built for students, by understanding students
            </p>
            <Link to="/student-plan">
              <Button className="bg-white text-swiggy-500 font-semibold hover:bg-gray-100 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg lg:text-xl shadow-xl hover:scale-105 transition-transform w-full sm:w-auto">
                Join Now - Only ₹99/month
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems vs Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 text-swiggy-600">
          We Get Student Life
        </h3>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 lg:mb-16 text-sm sm:text-base lg:text-lg">
          Common problems? We've got solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {studentProblems.map((item, idx) => (
            <div key={idx} className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={item.image} 
                    alt={item.problem}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-lg">❌ {item.problem}</p>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-swiggy-500 to-swiggy-600">
                  <p className="text-white font-semibold text-center">✅ {item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-swiggy-600">
          Exclusive Student Features
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          <Link to="/mess" className="group">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🍛</div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2 text-swiggy-600">Mess & Tiffin</h4>
              <p className="text-sm sm:text-base text-gray-600">Home-style meals starting ₹49</p>
            </div>
          </Link>
          
          <Link to="/night" className="group">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-white">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🌙</div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2">Night Mode</h4>
              <p className="text-sm sm:text-base text-gray-300">Order anytime, even at 3 AM</p>
            </div>
          </Link>
          
          <Link to="/rewards" className="group">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">🏆</div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2 text-swiggy-600">Rewards</h4>
              <p className="text-sm sm:text-base text-gray-600">Earn coins & get free food</p>
            </div>
          </Link>
          
          <Link to="/student-plan" className="group">
            <div className="bg-gradient-to-br from-swiggy-500 to-swiggy-600 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 text-white">
              <div className="text-6xl mb-4">🎓</div>
              <h4 className="text-2xl font-bold mb-2">Student Plan</h4>
              <p>Unlimited benefits at ₹99/month</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-swiggy-500 to-swiggy-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            Trusted by Students
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
            <div className="backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">50K+</div>
              <div className="text-sm sm:text-base lg:text-xl">Active Students</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">500+</div>
              <div className="text-sm sm:text-base lg:text-xl">Partner Restaurants</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">₹500</div>
              <div className="text-sm sm:text-base lg:text-xl">Avg. Savings/Month</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-4 sm:p-6 rounded-xl border border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">4.8★</div>
              <div className="text-sm sm:text-base lg:text-xl">Student Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-swiggy-600">
          Ready to Save Money?
        </h3>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Join thousands of students already enjoying hassle-free food delivery
        </p>
        <Link to="/student-plan">
          <Button className="bg-swiggy-500 text-white font-semibold hover:bg-swiggy-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-base sm:text-lg lg:text-xl rounded-xl shadow-lg hover:scale-105 transition-transform w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
            Get Student Plan Now →
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;