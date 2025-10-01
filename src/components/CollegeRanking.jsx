import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const CollegeRanking = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedAgency, setSelectedAgency] = useState("Colleges");
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const agencyScrollRef = useRef(null);

  const years = ["2025", "2024", "2023", "2022", "2021"];
  const agencies = [
    "Colleges",
    "Indiatoday",
    "The Week",
    "NIRF",
    "Outlook",
    "IIRF",
    "TOI",
  ];

  const collegeData = {
    Colleges: [
      {
        id: 1,
        name: "Sam Higginbottom University of Agriculture Technology and Sciences - [SHUATS]",
        location: "Allahabad",
        ranking: "1 out of 51",
        stream: "Agriculture",
        logo: "🌱",
      },
      {
        id: 2,
        name: "Indian Agricultural Research Institute - [IARI]",
        location: "New Delhi",
        ranking: "2 out of 51",
        stream: "Agriculture",
        logo: "🌾",
      },
      {
        id: 3,
        name: "National Dairy Research Institute - [NDRI]",
        location: "Karnal",
        ranking: "3 out of 51",
        stream: "Agriculture",
        logo: "🥛",
        isHighlighted: true,
      },
      {
        id: 4,
        name: "Punjab Agricultural University - [PAU]",
        location: "Ludhiana",
        ranking: "4 out of 51",
        stream: "Agriculture",
        logo: "🌿",
      },
      {
        id: 5,
        name: "Banaras Hindu University - [BHU]",
        location: "Varanasi",
        ranking: "5 out of 51",
        stream: "Agriculture",
        logo: "🏛️",
      },
      {
        id: 6,
        name: "Indian Veterinary Research Institute - [IVRI]",
        location: "Bareilly",
        ranking: "6 out of 51",
        stream: "Agriculture",
        logo: "🐄",
      },
    ],
    Indiatoday: [
      {
        id: 1,
        name: "Indian Institute of Technology - [IIT Bombay]",
        location: "Mumbai",
        ranking: "1 out of 100",
        stream: "Engineering",
        logo: "🏛️",
      },
      {
        id: 2,
        name: "Indian Institute of Technology - [IIT Delhi]",
        location: "New Delhi",
        ranking: "2 out of 100",
        stream: "Engineering",
        logo: "🏛️",
      },
    ],
    NIRF: [
      {
        id: 1,
        name: "Indian Institute of Science - [IISc]",
        location: "Bangalore",
        ranking: "1 out of 200",
        stream: "Overall",
        logo: "🔬",
      },
      {
        id: 2,
        name: "Indian Institute of Technology - [IIT Madras]",
        location: "Chennai",
        ranking: "2 out of 200",
        stream: "Engineering",
        logo: "🏛️",
      },
    ],
  };

  const scrollAgencies = (direction) => {
    const container = agencyScrollRef.current;
    if (container) {
      const scrollAmount = 150;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const currentColleges =
    collegeData[selectedAgency] || collegeData["Colleges"];

  return (
    <div className="w-full bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            College Ranking 2025
          </h2>
          <button className="text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base transition-colors">
            View all Colleges
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Year Dropdown */}
          <div className="relative">
            <label className="text-sm text-gray-600 mb-2 block">Ranking:</label>
            <div className="relative">
              <button
                onClick={() => setShowYearDropdown(!showYearDropdown)}
                className="flex items-center justify-between w-32 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors"
              >
                <span>{selectedYear}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    showYearDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showYearDropdown && (
                <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setShowYearDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    >
                      {year}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Agencies */}
          <div className="flex-1">
            <label className="text-sm text-gray-600 mb-2 block">
              Agencies:
            </label>
            <div className="relative">
              <button
                onClick={() => scrollAgencies("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hidden md:flex"
              >
                <ChevronLeft size={16} />
              </button>

              <div
                ref={agencyScrollRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 md:px-10"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {agencies.map((agency) => (
                  <button
                    key={agency}
                    onClick={() => setSelectedAgency(agency)}
                    className={`
                      flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                      ${
                        selectedAgency === agency
                          ? "bg-gray-800 text-white shadow-md"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }
                    `}
                  >
                    {agency}
                  </button>
                ))}
              </div>

              <button
                onClick={() => scrollAgencies("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-md border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hidden md:flex"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          {/* Table Header */}
          <div className="bg-gray-50 border border-gray-200 rounded-t-xl px-6 py-4">
            <div className="grid grid-cols-12 gap-4 items-center text-sm font-semibold text-gray-700">
              <div className="col-span-6">College</div>
              <div className="col-span-3">Ranking</div>
              <div className="col-span-3">Streams</div>
            </div>
          </div>

          {/* College List */}
          <div className="bg-white border-l border-r border-b border-gray-200 rounded-b-xl">
            {currentColleges.map((college, index) => (
              <div
                key={college.id}
                className={`px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 ${
                  index === currentColleges.length - 1 ? "border-b-0" : ""
                } ${college.isHighlighted ? "bg-orange-50" : ""}`}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* College Info */}
                  <div className="col-span-6">
                    <div className="flex items-center gap-3">
                      <div>
                        <h3
                          className={`font-bold text-base leading-tight mb-1 ${
                            college.isHighlighted
                              ? "text-orange-600"
                              : "text-gray-800"
                          }`}
                        >
                          {college.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {college.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ranking */}
                  <div className="col-span-3">
                    <div className="text-sm font-medium text-gray-800">
                      {college.ranking}
                    </div>
                  </div>

                  {/* Stream */}
                  <div className="col-span-3">
                    <div className="text-sm text-gray-700">
                      {college.stream}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-3">
          {currentColleges.map((college) => (
            <div
              key={college.id}
              className={`border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200 ${
                college.isHighlighted
                  ? "bg-orange-50 border-orange-200"
                  : "bg-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3
                    className={`font-bold text-base leading-tight mb-1 ${
                      college.isHighlighted
                        ? "text-orange-600"
                        : "text-gray-800"
                    }`}
                  >
                    {college.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {college.location}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {college.ranking}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      {college.stream}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Ranking of 2500+ colleges based on authentic student reviews.
          </p>
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

export default CollegeRanking;
