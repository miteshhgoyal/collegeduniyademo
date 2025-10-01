import React, { useState } from "react";
import {
  Search,
  Bell,
  Menu,
  Grid3X3,
  MapPin,
  Target,
  ChevronDown,
  Star,
  Edit3,
  Home,
  X,
  GraduationCap,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const courses = [
    "B.Tech",
    "MBA",
    "M.Tech",
    "MBBS",
    "B.Com",
    "B.Sc",
    "B.Sc (Nursing)",
    "BA",
    "BBA",
    "BCA",
  ];

  return (
    <div className="w-full bg-black shadow-xl">
      {/* Main Navigation Bar */}
      <div className="w-full border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Left Section: Logo + Selectors */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              {/* Logo */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                  <GraduationCap size={18} className="text-orange-600" />
                </div>
                <span className="text-white font-bold text-xl lg:text-2xl">
                  collegedunia
                </span>
              </div>

              {/* Goal and City Selectors - Desktop Only */}
              <div className="hidden xl:flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-orange-400 cursor-pointer hover:text-orange-300 transition-colors group">
                  <Target
                    size={14}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-medium">Select Goal</span>
                  <ChevronDown
                    size={12}
                    className="group-hover:rotate-180 transition-transform"
                  />
                </div>
                <div className="w-px h-4 bg-gray-600"></div>
                <div className="flex items-center space-x-1 text-orange-400 cursor-pointer hover:text-orange-300 transition-colors group">
                  <MapPin
                    size={14}
                    className="group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm font-medium">Select City</span>
                  <ChevronDown
                    size={12}
                    className="group-hover:rotate-180 transition-transform"
                  />
                </div>
              </div>
            </div>

            {/* Center Section: Search Bar */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <Search
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search for Colleges, Exams, Courses and More."
                  className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-700 placeholder-gray-500 text-base shadow-sm hover:shadow-md transition-all duration-200"
                />
              </div>
            </div>

            {/* Right Section: Actions */}
            <div className="flex items-center space-x-3">
              {/* Write Review Button - Desktop */}
              <button className="hidden lg:flex items-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-2.5 rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                <Edit3 size={14} className="mr-2" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="whitespace-nowrap">Write a Review</span>
                  <span className="text-xs text-orange-100 whitespace-nowrap">
                    Get Upto ₹300*
                  </span>
                </div>
              </button>

              {/* Explore - Desktop */}
              <button className="hidden lg:flex items-center space-x-1 text-white hover:text-orange-400 px-3 py-2 rounded-lg hover:bg-gray-800 transition-all duration-200 group">
                <Grid3X3
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium">Explore</span>
              </button>

              {/* Notifications */}
              <button className="relative p-2 text-white hover:text-orange-400 rounded-lg hover:bg-gray-800 transition-all duration-200 group">
                <Bell
                  size={18}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-orange-400 rounded-lg hover:bg-gray-800 transition-all duration-200 lg:hidden"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              {/* Desktop Menu */}
              <button className="hidden lg:block p-2 text-white hover:text-orange-400 rounded-lg hover:bg-gray-800 transition-all duration-200">
                <Menu size={18} />
              </button>

              {/* Profile Avatar */}
              <div className="w-9 h-9 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-200 shadow-md ring-2 ring-orange-300 ring-opacity-50">
                <span className="text-white font-bold text-base">M</span>
              </div>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative group">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors"
                size={16}
              />
              <input
                type="text"
                placeholder="Search for Colleges, Exams, Courses..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700 placeholder-gray-500 text-sm shadow-sm"
              />
            </div>
          </div>

          {/* Mobile Goal/City Selectors */}
          <div className="xl:hidden pb-4 flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-1 text-orange-400 cursor-pointer text-sm hover:text-orange-300 transition-colors">
              <Target size={14} />
              <span>Select Goal</span>
              <ChevronDown size={12} />
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center space-x-1 text-orange-400 cursor-pointer text-sm hover:text-orange-300 transition-colors">
              <MapPin size={14} />
              <span>Select City</span>
              <ChevronDown size={12} />
            </div>
          </div>
        </div>
      </div>

      {/* Course Navigation */}
      <div className="w-full bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Course Links */}
            <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide">
              <button className="flex items-center space-x-2 text-white hover:text-orange-400 whitespace-nowrap transition-all duration-200 group flex-shrink-0">
                <Home
                  size={16}
                  className="group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium">All Courses</span>
              </button>

              {courses.map((course, index) => (
                <button
                  key={index}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0"
                >
                  {course}
                </button>
              ))}
            </div>

            {/* Course Finder Badge */}
            <div className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 flex-shrink-0">
              <Star size={14} className="animate-pulse" />
              <span className="text-sm font-medium">Course Finder</span>
              <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold animate-bounce">
                NEW
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-4">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between pb-4 border-b border-gray-700">
            <span className="text-white font-bold text-lg">Menu</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200">
              <Edit3 size={16} />
              <span>Write a Review</span>
            </button>

            <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200">
              <Star size={16} />
              <span>Course Finder</span>
              <span className="bg-red-500 text-xs px-2 py-1 rounded-full font-bold">
                NEW
              </span>
            </button>

            <button className="w-full flex items-center justify-center space-x-2 text-white hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors">
              <Grid3X3 size={16} />
              <span>Explore</span>
            </button>

            {/* Mobile Goal/City Selectors */}
            <div className="pt-4 border-t border-gray-700">
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 text-orange-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors">
                  <Target size={16} />
                  <span>Select Goal</span>
                  <ChevronDown size={14} />
                </button>
                <button className="w-full flex items-center justify-center space-x-2 text-orange-400 hover:bg-gray-800 px-4 py-3 rounded-lg transition-colors">
                  <MapPin size={16} />
                  <span>Select City</span>
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Custom scrollbar hiding */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
