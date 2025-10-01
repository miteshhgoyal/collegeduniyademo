import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  Star,
  GraduationCap,
  Building,
  Award,
  BookOpen,
  Play,
  ArrowRight,
} from "lucide-react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Find Over 25,000+ Colleges in India",
      subtitle: "Discover your perfect educational journey",
      description:
        "Explore top colleges, universities, and courses across India with expert guidance",
      image: "/api/placeholder/1200/600", // Replace with actual college image
      location: "MIT WPU, Pune",
      stats: { colleges: "25,000+", students: "10M+", courses: "500+" },
      cta: "Explore Colleges",
    },
    {
      id: 2,
      title: "Top Engineering Colleges Await",
      subtitle: "Build your future in technology",
      description:
        "Get into premier engineering institutions with our comprehensive guidance",
      image: "/api/placeholder/1200/600", // Replace with actual engineering college image
      location: "IIT Delhi",
      stats: { colleges: "2,500+", students: "5M+", courses: "200+" },
      cta: "View Engineering",
    },
    {
      id: 3,
      title: "Medical Colleges & NEET Prep",
      subtitle: "Your healthcare career starts here",
      description:
        "Find the best medical colleges and prepare for NEET with expert mentorship",
      image: "/api/placeholder/1200/600", // Replace with actual medical college image
      location: "AIIMS New Delhi",
      stats: { colleges: "800+", students: "2M+", courses: "50+" },
      cta: "Medical Colleges",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Animated Title */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <GraduationCap size={16} className="text-orange-400" />
                  <span className="text-sm font-medium">
                    Education Platform
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-gray-300 font-medium">
                  {slides[currentSlide].subtitle}
                </p>

                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                {Object.entries(slides[currentSlide].stats).map(
                  ([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-orange-400">
                        {value}
                      </div>
                      <div className="text-sm text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                  <span>{slides[currentSlide].cta}</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button className="group flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 hover:border-white/40 transition-all duration-300">
                  <Play
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Right Content - Search Section */}
            <div className="lg:ml-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Start Your Journey
                    </h3>
                    <p className="text-gray-300">
                      Search from thousands of colleges and courses
                    </p>
                  </div>

                  {/* Search Form */}
                  <div className="space-y-4">
                    <div className="relative">
                      <Search
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="text"
                        placeholder="Search for colleges, exams, courses..."
                        className="w-full pl-12 pr-4 py-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500 text-lg"
                      />
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Search Now
                    </button>
                  </div>

                  {/* Quick Links */}
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-all duration-200 group">
                      <Building
                        size={16}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm">Engineering</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-all duration-200 group">
                      <Award
                        size={16}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm">Medical</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-all duration-200 group">
                      <BookOpen
                        size={16}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm">MBA</span>
                    </button>
                    <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-lg transition-all duration-200 group">
                      <Users
                        size={16}
                        className="group-hover:scale-110 transition-transform"
                      />
                      <span className="text-sm">Arts</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Need Counselling Button */}
              <div className="mt-6 text-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Need Counselling?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 group"
          >
            <ChevronLeft
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 group"
          >
            <ChevronRight
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Current Slide Info */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20">
          <div className="flex items-center space-x-2 text-sm">
            <MapPin size={16} className="text-orange-400" />
            <span>{slides[currentSlide].location}</span>
            <span className="text-gray-400">•</span>
            <span>
              {currentSlide + 1} / {slides.length}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
