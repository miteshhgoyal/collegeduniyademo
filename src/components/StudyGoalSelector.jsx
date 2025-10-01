import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  User,
  TrendingUp,
  ShoppingCart,
  Palette,
  Stethoscope,
  Scale,
  GraduationCap,
  Building2,
  Beaker,
  BookOpen,
  Code,
  Heart,
} from "lucide-react";

const StudyGoalSelector = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const scrollRef = useRef(null);

  const studyGoals = [
    {
      id: "engineering",
      title: "Engineering",
      colleges: "6347 Colleges",
      icon: User,
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
      icon: ShoppingCart,
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
  ];

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

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Select Your Study Goal
          </h2>
        </div>

        {/* Cards Container with Navigation */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-2 px-12 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {studyGoals.map((goal) => {
              const IconComponent = goal.icon;

              return (
                <div
                  key={goal.id}
                  className={`
                    flex-shrink-0 w-72 p-6 rounded-xl border border-gray-200 cursor-pointer 
                    transition-all duration-200 hover:shadow-lg hover:border-gray-300
                    ${goal.color} ${goal.hoverColor}
                  `}
                  onClick={() => setSelectedGoal(goal.id)}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 ${goal.iconBg} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <IconComponent size={24} className={goal.iconColor} />
                  </div>

                  {/* Title and College Count */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {goal.title}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {goal.colleges}
                    </p>
                  </div>

                  {/* Courses List */}
                  <div className="flex gap-1 flex-wrap">
                    {goal.courses.map((course, index) => (
                      <div
                        key={index}
                        className="text-gray-700 text-sm font-medium py-1 bg-white/60 inline p-2 rounded-full"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
