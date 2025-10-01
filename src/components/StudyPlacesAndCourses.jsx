import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  MapPin,
  Clock,
  Users,
  GraduationCap,
  Banknote,
  BookOpen,
} from "lucide-react";

const TopStudyPlaces = () => {
  const scrollRef = useRef(null);

  const studyPlaces = [
    {
      id: 1,
      name: "Delhi NCR",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      colleges: "450+ Colleges",
    },
    {
      id: 2,
      name: "Bangalore",
      color: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      colleges: "320+ Colleges",
    },
    {
      id: 3,
      name: "Hyderabad",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      colleges: "280+ Colleges",
    },
    {
      id: 4,
      name: "Pune",
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      colleges: "250+ Colleges",
    },
    {
      id: 5,
      name: "Mumbai",
      color: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      colleges: "380+ Colleges",
    },
    {
      id: 6,
      name: "Chennai",
      color: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      colleges: "290+ Colleges",
    },
    {
      id: 7,
      name: "Kolkata",
      color: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      colleges: "220+ Colleges",
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
              Top Study Places
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Explore the best educational destinations across India
            </p>
          </div>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 hidden md:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {studyPlaces.map((place) => (
            <div
              key={place.id}
              className={`
                flex-shrink-0 w-44 md:w-52 h-32 md:h-36 ${place.color} rounded-xl border border-gray-200 
                cursor-pointer hover:shadow-lg hover:border-gray-300 transition-all duration-300 transform hover:scale-105
                flex flex-col items-center justify-center text-center p-4 group
              `}
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 ${place.iconBg} rounded-lg flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300`}
              >
                <MapPin size={20} className={place.iconColor} />
              </div>
              <h3 className="font-bold text-gray-800 text-sm md:text-base mb-1">
                {place.name}
              </h3>
              <p className="text-xs text-gray-600">{place.colleges}</p>
            </div>
          ))}
        </div>

        {/* Mobile scroll indicator */}
        <div className="md:hidden mt-4 text-center">
          <p className="text-xs text-gray-500">← Scroll to see more cities →</p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

const ExploreCourses = () => {
  const [activeLevel, setActiveLevel] = useState("Bachelors");
  const scrollRef = useRef(null);

  const levels = [
    "Bachelors",
    "Masters",
    "Doctorate",
    "Diploma",
    "Certification",
  ];

  const courseData = {
    Bachelors: [
      {
        id: 1,
        name: "B.Com General",
        duration: "3 Years",
        avgFees: "77.30 K",
        colleges: "6896",
        type: "Full Time",
      },
      {
        id: 2,
        name: "B.Ed General",
        duration: "2 Years",
        avgFees: "87.26 K",
        colleges: "5611",
        type: "Full Time",
      },
      {
        id: 3,
        name: "BCA General",
        duration: "3 Years",
        avgFees: "1.57 L",
        colleges: "5481",
        type: "Full Time",
      },
      {
        id: 4,
        name: "BA General",
        duration: "3 Years",
        avgFees: "56.40 K",
        colleges: "4195",
        type: "Full Time",
      },
    ],
    Masters: [
      {
        id: 1,
        name: "MBA General",
        duration: "2 Years",
        avgFees: "2.50 L",
        colleges: "4500",
        type: "Full Time",
      },
      {
        id: 2,
        name: "M.Tech CSE",
        duration: "2 Years",
        avgFees: "1.80 L",
        colleges: "3200",
        type: "Full Time",
      },
      {
        id: 3,
        name: "M.Com General",
        duration: "2 Years",
        avgFees: "65.20 K",
        colleges: "2800",
        type: "Full Time",
      },
      {
        id: 4,
        name: "MA English",
        duration: "2 Years",
        avgFees: "45.60 K",
        colleges: "2100",
        type: "Full Time",
      },
    ],
    Doctorate: [
      {
        id: 1,
        name: "Ph.D Computer Science",
        duration: "3-5 Years",
        avgFees: "2.20 L",
        colleges: "1200",
        type: "Full Time",
      },
      {
        id: 2,
        name: "Ph.D Management",
        duration: "3-5 Years",
        avgFees: "3.80 L",
        colleges: "800",
        type: "Full Time",
      },
    ],
    Diploma: [
      {
        id: 1,
        name: "Diploma Engineering",
        duration: "3 Years",
        avgFees: "85.50 K",
        colleges: "2500",
        type: "Full Time",
      },
      {
        id: 2,
        name: "Diploma Pharmacy",
        duration: "2 Years",
        avgFees: "95.20 K",
        colleges: "1800",
        type: "Full Time",
      },
    ],
    Certification: [
      {
        id: 1,
        name: "Digital Marketing",
        duration: "6 Months",
        avgFees: "25.50 K",
        colleges: "500",
        type: "Full Time",
      },
      {
        id: 2,
        name: "Data Analytics",
        duration: "1 Year",
        avgFees: "45.80 K",
        colleges: "350",
        type: "Full Time",
      },
    ],
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const currentCourses = courseData[activeLevel] || [];

  return (
    <div className="w-full bg-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
            Explore Courses
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6">
            Find the perfect course for your career goals
          </p>

          {/* Level Tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`
                  flex-shrink-0 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${
                    activeLevel === level
                      ? "bg-gray-800 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }
                `}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards with Navigation */}
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 hidden md:flex"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-2 md:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {currentCourses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-72 md:w-80 bg-gray-50 rounded-xl border border-gray-200 p-4 md:p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-3">
                    <Clock size={12} />
                    {course.type}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {course.name}
                  </h3>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gray-500" />
                      <span className="text-gray-600 text-sm">Duration</span>
                    </div>
                    <span className="font-semibold text-gray-800">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <div className="flex items-center gap-2">
                      <Banknote size={14} className="text-gray-500" />
                      <span className="text-gray-600 text-sm">Avg. Fees</span>
                    </div>
                    <span className="font-semibold text-gray-800">
                      ₹{course.avgFees}
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-2 bg-white rounded-lg">
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-gray-500" />
                      <span className="text-gray-600 text-sm">Colleges</span>
                    </div>
                    <span className="font-semibold text-gray-800">
                      {course.colleges}
                    </span>
                  </div>
                </div>

                <button className="flex items-center justify-center w-full gap-2 text-gray-700 hover:text-white hover:bg-gray-800 font-medium text-sm py-2 px-4 rounded-lg transition-all duration-300 border border-gray-300 hover:border-gray-800">
                  <BookOpen size={16} />
                  <span>Course Overview</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 hidden md:flex"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Mobile scroll indicator */}
        <div className="md:hidden mt-4 text-center">
          <p className="text-xs text-gray-500">
            ← Scroll to see more courses →
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

// Combined component
const StudyPlacesAndCourses = () => {
  return (
    <div className="bg-gray-50">
      <TopStudyPlaces />
      <ExploreCourses />
    </div>
  );
};

export default StudyPlacesAndCourses;
