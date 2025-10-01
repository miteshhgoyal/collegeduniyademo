import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Building2,
  TrendingUp,
  Calculator,
  Palette,
  Stethoscope,
  Scale,
  GraduationCap,
} from "lucide-react";

const StudyGoalSelector = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const scrollRef = useRef(null);

  const studyGoals = [
    {
      id: "engineering",
      title: "Engineering",
      colleges: "6347 Colleges",
      icon: Building2,
      color: "bg-cyan-50",
      hoverColor: "hover:bg-cyan-100",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      courses: ["BE/B.Tech", "Diploma in Engineering", "ME/M.Tech"],
    },
    {
      id: "management",
      title: "Management",
      colleges: "7965 Colleges",
      icon: TrendingUp,
      color: "bg-green-50",
      hoverColor: "hover:bg-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      courses: ["MBA/PGDM", "BBA/BMS", "Executive MBA"],
    },
    {
      id: "commerce",
      title: "Commerce",
      colleges: "5049 Colleges",
      icon: Calculator,
      color: "bg-blue-50",
      hoverColor: "hover:bg-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      courses: ["B.Com", "M.Com", "CA"],
    },
    {
      id: "arts",
      title: "Arts",
      colleges: "5701 Colleges",
      icon: Palette,
      color: "bg-purple-50",
      hoverColor: "hover:bg-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      courses: ["BA", "MA", "BFA", "BSW"],
    },
    {
      id: "medical",
      title: "Medical",
      colleges: "4523 Colleges",
      icon: Stethoscope,
      color: "bg-red-50",
      hoverColor: "hover:bg-red-100",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      courses: ["MBBS", "BDS", "BAMS", "BHMS"],
    },
    {
      id: "law",
      title: "Law",
      colleges: "2847 Colleges",
      icon: Scale,
      color: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      courses: ["LLB", "LLM", "BA LLB"],
    },
    {
      id: "science",
      title: "Science",
      colleges: "3892 Colleges",
      icon: GraduationCap,
      color: "bg-teal-50",
      hoverColor: "hover:bg-teal-100",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      courses: ["B.Sc", "M.Sc", "Research"],
    },
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 280;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full bg-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-10 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Select Your Study Goal
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Choose from thousands of colleges across various fields
          </p>
        </div>

        {/* Cards Container with Navigation */}
        <div className="relative">
          {/* Left Arrow - Hidden on mobile */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-200 hidden md:flex"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow - Hidden on mobile */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-200 hidden md:flex"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide py-2 md:px-12 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {studyGoals.map((goal) => {
              const IconComponent = goal.icon;
              const isSelected = selectedGoal === goal.id;

              return (
                <div
                  key={goal.id}
                  className={`
                    flex-shrink-0 w-64 md:w-72 p-4 md:p-6 rounded-xl border-2 cursor-pointer 
                    transition-all duration-300 transform hover:scale-105
                    ${
                      isSelected
                        ? `${goal.color} border-current shadow-lg ${goal.iconColor}`
                        : `${goal.color} ${goal.hoverColor} border-gray-200 hover:border-gray-300 hover:shadow-lg`
                    }
                  `}
                  onClick={() => setSelectedGoal(isSelected ? null : goal.id)}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 ${
                      goal.iconBg
                    } rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      isSelected ? "scale-110 shadow-md" : ""
                    }`}
                  >
                    <IconComponent size={24} className={goal.iconColor} />
                  </div>

                  {/* Title and College Count */}
                  <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                      {goal.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {goal.colleges}
                    </p>
                  </div>

                  {/* Courses List */}
                  <div className="space-y-2">
                    {goal.courses.map((course, index) => (
                      <div
                        key={index}
                        className="text-gray-700 text-xs md:text-sm font-medium py-1.5 px-3 bg-white/70 rounded-full border border-white/50 backdrop-blur-sm"
                      >
                        {course}
                      </div>
                    ))}

                    {/* Expand indicator when selected */}
                    {isSelected && (
                      <div className="mt-3 p-2 bg-white/80 rounded-lg border border-white/50">
                        <p className="text-xs text-gray-600 text-center">
                          Click to explore more courses →
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile scroll indicator */}
        <div className="md:hidden mt-4 text-center">
          <p className="text-xs text-gray-500">
            ← Scroll to see more options →
          </p>
        </div>

        {/* Selection Summary */}
        {selectedGoal && (
          <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Ready to explore{" "}
                {studyGoals.find((g) => g.id === selectedGoal)?.title}?
              </h3>
              <p className="text-gray-600 mb-4">
                Discover colleges, courses, and career opportunities in your
                chosen field
              </p>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
                Explore {studyGoals.find((g) => g.id === selectedGoal)?.title}{" "}
                Colleges
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Hide scrollbar */}
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

export default StudyGoalSelector;
