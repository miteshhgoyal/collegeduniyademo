import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Calendar,
  CreditCard,
  TrendingUp,
  Award,
} from "lucide-react";

const TopColleges = () => {
  const [activeTab, setActiveTab] = useState("BE/B.Tech");
  const scrollRef = useRef(null);

  const tabs = [
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

  const collegeData = {
    "BE/B.Tech": [
      {
        rank: "#1",
        name: "IIT Bombay - Indian Institute of Technology",
        location: "Mumbai,Maharashtra",
        rating: "4.5/5",
        ranking: "#2 out of 50 in India 2025",
        rankingSource: "Colleges Info",
        cutoff: "JEE-Advanced 2025 Cut off 66",
        deadline: "14 Mar - 03 Apr 2025",
        fees: "₹52,500",
        feeType: "1st Year Fees",
      },
      {
        rank: "#2",
        name: "IIT Delhi - Indian Institute of Technology",
        location: "New Delhi,Delhi",
        rating: "4.6/5",
        ranking: "#1 out of 50 in India 2025",
        rankingSource: "Colleges Info",
        cutoff: "JEE-Advanced 2025 Cut off 55",
        deadline: "14 Mar - 03 Apr 2025",
        fees: "₹51,000",
        feeType: "1st Year Fees",
      },
      {
        rank: "#3",
        name: "IIT Madras - Indian Institute of Technology",
        location: "Chennai,Tamil Nadu",
        rating: "4.7/5",
        ranking: "#3 out of 50 in India 2025",
        rankingSource: "Colleges Info",
        cutoff: "JEE-Advanced 2025 Cut off 60",
        deadline: "14 Mar - 03 Apr 2025",
        fees: "₹53,000",
        feeType: "1st Year Fees",
      },
      {
        rank: "#4",
        name: "IIT Kanpur - Indian Institute of Technology",
        location: "Kanpur,Uttar Pradesh",
        rating: "4.4/5",
        ranking: "#4 out of 50 in India 2025",
        rankingSource: "Colleges Info",
        cutoff: "JEE-Advanced 2025 Cut off 70",
        deadline: "14 Mar - 03 Apr 2025",
        fees: "₹52,000",
        feeType: "1st Year Fees",
      },
      {
        rank: "#5",
        name: "IIT Kharagpur - Indian Institute of Technology",
        location: "Kharagpur,West Bengal",
        rating: "4.3/5",
        ranking: "#5 out of 50 in India 2025",
        rankingSource: "Colleges Info",
        cutoff: "JEE-Advanced 2025 Cut off 75",
        deadline: "14 Mar - 03 Apr 2025",
        fees: "₹54,000",
        feeType: "1st Year Fees",
      },
    ],
    "MBA/PGDM": [
      {
        rank: "#1",
        name: "IIMA - Indian Institute of Management",
        location: "Ahmedabad,Gujarat",
        rating: "5/5",
        ranking: "#2 out of 50 in India 2019",
        rankingSource: "nirf",
        cutoff: "CAT 2024 Cut off 99",
        deadline: "7 July - 08 Sept 2025",
        fees: "₹1,38,060",
        feeType: "Total Fees",
      },
      {
        rank: "#2",
        name: "IIMB - Indian Institute of Management",
        location: "Bangalore,Karnataka",
        rating: "4.9/5",
        ranking: "#1 out of 50 in India 2019",
        rankingSource: "nirf",
        cutoff: "CAT 2024 Cut off 98",
        deadline: "10 July - 15 Sept 2025",
        fees: "₹1,25,000",
        feeType: "Total Fees",
      },
      {
        rank: "#3",
        name: "IIMC - Indian Institute of Management",
        location: "Calcutta,West Bengal",
        rating: "4.8/5",
        ranking: "#3 out of 50 in India 2019",
        rankingSource: "nirf",
        cutoff: "CAT 2024 Cut off 97",
        deadline: "5 July - 20 Sept 2025",
        fees: "₹1,30,000",
        feeType: "Total Fees",
      },
    ],
    MBBS: [
      {
        rank: "#1",
        name: "All India Institute of Medical Sciences - [AIIMS]",
        location: "New Delhi,Delhi NCR",
        rating: "4.9/5",
        ranking: "#8 out of 200 in India 2025",
        rankingSource: "nirf",
        cutoff: "NEET 2025 Cut off 48",
        deadline: "8 Apr - 07 May 2025",
        fees: "₹1,805",
        feeType: "1st Year Fees",
      },
      {
        rank: "#2",
        name: "Christian Medical College - [CMC]",
        location: "Vellore,Tamil Nadu",
        rating: "4.8/5",
        ranking: "#2 out of 200 in India 2025",
        rankingSource: "nirf",
        cutoff: "NEET 2025 Cut off 52",
        deadline: "10 Apr - 15 May 2025",
        fees: "₹85,000",
        feeType: "1st Year Fees",
      },
    ],
  };

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

  const currentColleges = collegeData[activeTab] || [];

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Top 10 Colleges
          </h2>

          {/* Filter Tabs */}
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hidden md:flex"
            >
              <ChevronLeft size={16} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-2 md:px-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-shrink-0 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200
                    ${
                      activeTab === tab
                        ? "bg-gray-800 text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hidden md:flex"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          {/* Table Header */}
          <div className="bg-gray-50 border border-gray-200 rounded-t-xl px-6 py-4">
            <div className="grid grid-cols-12 gap-4 items-center text-sm font-semibold text-gray-700">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">College</div>
              <div className="col-span-2">Ranking</div>
              <div className="col-span-2">Cutoff</div>
              <div className="col-span-2">Application Deadline</div>
              <div className="col-span-1">Fees</div>
            </div>
          </div>

          {/* College List */}
          <div className="bg-white border-l border-r border-b border-gray-200 rounded-b-xl">
            {currentColleges.length > 0 ? (
              currentColleges.map((college, index) => (
                <div
                  key={index}
                  className={`px-6 py-5 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 ${
                    index === currentColleges.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* Rank */}
                    <div className="col-span-1">
                      <div className="text-lg font-bold text-gray-800">
                        {college.rank}
                      </div>
                    </div>

                    {/* College Info */}
                    <div className="col-span-4">
                      <div className="flex items-start gap-3">
                        <div>
                          <h3 className="font-bold text-gray-800 text-base leading-tight mb-1">
                            {college.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                            <MapPin size={14} />
                            <span>{college.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star
                              size={14}
                              className="text-yellow-500 fill-current"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {college.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ranking */}
                    <div className="col-span-2">
                      {college.ranking && (
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            {college.ranking}
                          </div>
                          {college.rankingSource && (
                            <div className="text-xs text-gray-500 capitalize">
                              {college.rankingSource}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Cutoff */}
                    <div className="col-span-2">
                      <div className="text-sm font-medium text-gray-800">
                        {college.cutoff}
                      </div>
                    </div>

                    {/* Deadline */}
                    <div className="col-span-2">
                      <div className="flex items-center gap-1 text-sm text-gray-700">
                        <Calendar size={14} />
                        <span>{college.deadline}</span>
                      </div>
                    </div>

                    {/* Fees */}
                    <div className="col-span-1">
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-800">
                          {college.fees}
                        </div>
                        <div className="text-xs text-gray-500">
                          {college.feeType}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-6 py-12 text-center text-gray-500">
                <div className="text-lg font-medium mb-2">
                  No colleges available
                </div>
                <div className="text-sm">
                  Data for {activeTab} will be available soon.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {currentColleges.length > 0 ? (
            currentColleges.map((college, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="text-lg font-bold text-gray-800">
                    {college.rank}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-800">
                      {college.fees}
                    </div>
                    <div className="text-xs text-gray-500">
                      {college.feeType}
                    </div>
                  </div>
                </div>

                <h3 className="font-bold text-gray-800 text-base leading-tight mb-2">
                  {college.name}
                </h3>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={14} />
                    <span>{college.location}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="font-medium text-gray-700">
                      {college.rating}
                    </span>
                  </div>

                  {college.ranking && (
                    <div className="text-gray-700">
                      <span className="font-medium">{college.ranking}</span>
                      {college.rankingSource && (
                        <span className="text-gray-500 ml-1">
                          ({college.rankingSource})
                        </span>
                      )}
                    </div>
                  )}

                  <div className="text-gray-700">
                    <span className="font-medium">Cutoff:</span>{" "}
                    {college.cutoff}
                  </div>

                  <div className="flex items-center gap-1 text-gray-700">
                    <Calendar size={14} />
                    <span>{college.deadline}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-500">
              <div className="text-lg font-medium mb-2">
                No colleges available
              </div>
              <div className="text-sm">
                Data for {activeTab} will be available soon.
              </div>
            </div>
          )}
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

export default TopColleges;
