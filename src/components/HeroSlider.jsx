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
    <div className="relative w-full min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 md:space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <GraduationCap size={16} className="text-orange-400" />
                <span className="text-sm font-medium">Education Platform</span>
              </div>

              {/* Main Title */}
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {slides[currentSlide].title}
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto lg:mx-0">
                  {slides[currentSlide].subtitle}
                </p>

                <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed mx-auto lg:mx-0">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8">
                {Object.entries(slides[currentSlide].stats).map(
                  ([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-orange-400">
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
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                  <span>{slides[currentSlide].cta}</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <button className="group flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg border border-white/20 hover:border-white/40 transition-all duration-300">
                  <Play
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

            {/* Right Content - Search Section */}
            <div className="w-full max-w-md mx-auto lg:max-w-none lg:ml-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      Start Your Journey
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      Search from thousands of colleges and courses
                    </p>
                  </div>

                  {/* Search Form */}
                  <div className="space-y-4">
                    <div className="relative">
                      <Search
                        className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        placeholder="Search for colleges, exams, courses..."
                        className="w-full pl-10 md:pl-12 pr-4 py-3 md:py-4 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-lg md:rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500 text-sm md:text-base"
                      />
                    </div>

                    <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 md:py-4 rounded-lg md:rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      Search Now
                    </button>
                  </div>

                  {/* Quick Links */}
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {[
                      { icon: Building, label: "Engineering" },
                      { icon: Award, label: "Medical" },
                      { icon: BookOpen, label: "MBA" },
                      { icon: Users, label: "Arts" },
                    ].map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        className="flex items-center justify-center space-x-1 md:space-x-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 md:py-3 rounded-lg transition-all duration-200 group"
                      >
                        <Icon
                          size={14}
                          className="group-hover:scale-110 transition-transform"
                        />
                        <span className="text-xs md:text-sm">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Need Counselling Button */}
              <div className="mt-4 md:mt-6 text-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg md:rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Need Counselling?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3 md:space-x-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-2 md:p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 group"
          >
            <ChevronLeft
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-orange-500 w-6 md:w-8"
                    : "bg-white/30 hover:bg-white/50 w-2 md:w-3"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-2 md:p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full border border-white/20 hover:border-white/40 transition-all duration-200 group"
          >
            <ChevronRight
              size={18}
              className="group-hover:scale-110 transition-transform"
            />
          </button>
        </div>
      </div>

      {/* Current Slide Info */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-20 hidden sm:block">
        <div className="bg-white/10 backdrop-blur-sm text-white px-3 md:px-4 py-2 rounded-lg border border-white/20">
          <div className="flex items-center space-x-2 text-xs md:text-sm">
            <MapPin size={14} className="text-orange-400" />
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
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-white/20 rounded-full animate-pulse"
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
