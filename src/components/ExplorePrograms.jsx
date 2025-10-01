import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Search,
  BarChart3,
  BookOpen,
  GraduationCap,
  Stethoscope,
  Building2,
  Calculator,
  Users,
  Calendar,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const ExplorePrograms = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollRef = useRef(null);

  const filters = [
    "All",
    "BE/B.Tech",
    "MBA/PGDM",
    "MBBS",
    "ME/M.Tech",
    "B.Sc",
    "BA",
    "B.Com",
    "BCA",
    "BBA/BMS",
    "B.Sc (Nursing)",
  ];

  const programCards = [
    {
      id: "ranking",
      title: "Ranking",
      subtitle: "College ranked based on real data",
      icon: Trophy,
      color: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      illustration: "📊",
      stats: [
        { name: "Colleges Info", value: "2612" },
        { name: "Indiatoday", value: "1810" },
        { name: "IIRF", value: "1778" },
        { name: "Outlook", value: "1357" },
      ],
      link: "Top Ranked Colleges in India",
      linkIcon: ArrowRight,
    },
    {
      id: "find-colleges",
      title: "Find Colleges",
      subtitle: "Discover 19000+ colleges via preferences",
      icon: Search,
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      illustration: "🏛️",
      options: ["Best MBA colleges in India", "Best BTech colleges in India"],
      link: "Discover Top Colleges in India",
      linkIcon: ArrowRight,
    },
    {
      id: "compare-colleges",
      title: "Compare Colleges",
      subtitle: "Compare on the basis of rank, fees, etc.",
      icon: BarChart3,
      color: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      illustration: "👨‍🎓",
      comparisons: [
        {
          name1: "IIT Madras",
          course1: "BE/B.Tech",
          name2: "IIT Delhi",
          course2: "BE/B.Tech",
        },
        {
          name1: "IIT Madras",
          course1: "BE/B.Tech",
          name2: "IIT Bombay",
          course2: "BE/B.Tech",
        },
      ],
      link: "Compare Colleges",
      linkIcon: ArrowRight,
    },
    {
      id: "exams",
      title: "Exams",
      subtitle: "Know more about your exams",
      icon: BookOpen,
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      illustration: "📝",
      examTypes: [
        "B.Com",
        "B.Sc",
        "B.Sc (Nursing)",
        "BA",
        "BBA/BMS",
        "BCA",
        "BE/B.Tech",
      ],
      link: "Check All Entrance Exams in India",
      linkIcon: ArrowRight,
    },
    {
      id: "college-predictor",
      title: "College Predictor",
      subtitle: "Know your college admission chances",
      icon: Calculator,
      color: "bg-cyan-50",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      illustration: "🎓",
      predictorTypes: [
        "CUET",
        "NEET",
        "AYUSH NEET Counselling",
        "JEE Advanced",
      ],
      link: "Find Where you may get Admission",
      linkIcon: ArrowRight,
    },
    {
      id: "course-finder",
      title: "Course Finder",
      subtitle: "Discover top courses in Indian Colleges 2025",
      icon: GraduationCap,
      color: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      illustration: "🔍",
      courseStats: [
        { name: "BE/B.Tech", count: "950" },
        { name: "MBA/PGDM", count: "1106" },
        { name: "ME/M.Tech", count: "1225" },
        { name: "B.Sc", count: "1041" },
      ],
      link: "Get Top Courses in Indian Colleges",
      linkIcon: ArrowRight,
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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Explore Programs
          </h2>

          {/* Filter Tabs */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                    ${
                      activeFilter === filter
                        ? "bg-gray-800 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Arrow for filter scroll */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-0 w-8 h-8 bg-white shadow-md border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programCards.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className={`
                  ${card.color} rounded-xl border border-gray-200 p-6 
                  hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer
                `}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${card.iconBg} rounded-lg flex items-center justify-center`}
                  >
                    <IconComponent size={24} className={card.iconColor} />
                  </div>
                  <div className="text-3xl">{card.illustration}</div>
                </div>

                {/* Title and Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.subtitle}</p>
                </div>

                {/* Dynamic Content based on card type */}
                <div className="mb-4 min-h-[120px]">
                  {/* Ranking Stats */}
                  {card.stats && (
                    <div className="grid grid-cols-2 gap-3">
                      {card.stats.map((stat, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-gray-600">{stat.name}</span>
                          <span className="font-semibold text-gray-800">
                            - {stat.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Find Colleges Options */}
                  {card.options && (
                    <div className="space-y-2">
                      {card.options.map((option, index) => (
                        <div
                          key={index}
                          className="text-sm text-gray-700 font-medium"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* College Comparisons */}
                  {card.comparisons && (
                    <div className="space-y-3">
                      {card.comparisons.map((comp, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-xs"
                        >
                          <div className="flex items-center gap-1">
                            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                              😊
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">
                                {comp.name1}
                              </div>
                              <div className="text-blue-500">
                                {comp.course1}
                              </div>
                            </div>
                          </div>
                          <div className="text-gray-400">vs</div>
                          <div className="flex items-center gap-1">
                            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                              🏛️
                            </div>
                            <div>
                              <div className="font-medium text-gray-800">
                                {comp.name2}
                              </div>
                              <div className="text-blue-500">
                                {comp.course2}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Exam Types */}
                  {card.examTypes && (
                    <div className="flex flex-wrap gap-2">
                      {card.examTypes.slice(0, 6).map((exam, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/80 text-gray-700 text-xs font-medium rounded-full border border-gray-200"
                        >
                          {exam}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Predictor Types */}
                  {card.predictorTypes && (
                    <div className="grid grid-cols-2 gap-2">
                      {card.predictorTypes.map((type, index) => (
                        <div
                          key={index}
                          className="text-sm font-medium text-gray-700"
                        >
                          {type}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Course Stats */}
                  {card.courseStats && (
                    <div className="grid grid-cols-2 gap-3">
                      {card.courseStats.map((course, index) => (
                        <div key={index} className="text-sm">
                          <span className="text-gray-700">{course.name}</span>
                          <span className="font-semibold text-gray-800">
                            {" "}
                            - {course.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Link */}
                <div className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                  <span>{card.link}</span>
                  <ChevronRight size={16} className="ml-1" />
                </div>
              </div>
            );
          })}
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

export default ExplorePrograms;
