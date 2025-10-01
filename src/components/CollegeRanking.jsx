import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Building2,
  Award,
  GraduationCap,
  University,
  FlaskConical,
  Microscope,
  Leaf,
} from "lucide-react";

const CollegeRanking = () => {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedAgency, setSelectedAgency] = useState("Collegedunia");
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  const agencyScrollRef = useRef(null);

  const years = ["2025", "2024", "2023", "2022", "2021"];
  const agencies = [
    "Collegedunia",
    "Indiatoday",
    "The Week",
    "NIRF",
    "Outlook",
    "IIRF",
    "TOI",
  ];

  const getCollegeIcon = (stream) => {
    switch (stream) {
      case "Agriculture":
        return Leaf;
      case "Engineering":
        return Building2;
      case "Overall":
        return GraduationCap;
      case "Science":
        return FlaskConical;
      case "Research":
        return Microscope;
      default:
        return University;
    }
  };

  const collegeData = {
    Collegedunia: [
      {
        id: 1,
        name: "Sam Higginbottom University of Agriculture Technology and Sciences - [SHUATS]",
        location: "Allahabad",
        ranking: "1 out of 51",
        stream: "Agriculture",
      },
      {
        id: 2,
        name: "Indian Agricultural Research Institute - [IARI]",
        location: "New Delhi",
        ranking: "2 out of 51",
        stream: "Agriculture",
      },
      {
        id: 3,
        name: "National Dairy Research Institute - [NDRI]",
        location: "Karnal",
        ranking: "3 out of 51",
        stream: "Agriculture",
        isHighlighted: true,
      },
      {
        id: 4,
        name: "Punjab Agricultural University - [PAU]",
        location: "Ludhiana",
        ranking: "4 out of 51",
        stream: "Agriculture",
      },
      {
        id: 5,
        name: "Banaras Hindu University - [BHU]",
        location: "Varanasi",
        ranking: "5 out of 51",
        stream: "Agriculture",
      },
      {
        id: 6,
        name: "Indian Veterinary Research Institute - [IVRI]",
        location: "Bareilly",
        ranking: "6 out of 51",
        stream: "Agriculture",
      },
    ],
    Indiatoday: [
      {
        id: 1,
        name: "Indian Institute of Technology - [IIT Bombay]",
        location: "Mumbai",
        ranking: "1 out of 100",
        stream: "Engineering",
      },
      {
        id: 2,
        name: "Indian Institute of Technology - [IIT Delhi]",
        location: "New Delhi",
        ranking: "2 out of 100",
        stream: "Engineering",
      },
      {
        id: 3,
        name: "Indian Institute of Technology - [IIT Madras]",
        location: "Chennai",
        ranking: "3 out of 100",
        stream: "Engineering",
      },
    ],
    NIRF: [
      {
        id: 1,
        name: "Indian Institute of Science - [IISc]",
        location: "Bangalore",
        ranking: "1 out of 200",
        stream: "Overall",
      },
      {
        id: 2,
        name: "Indian Institute of Technology - [IIT Madras]",
        location: "Chennai",
        ranking: "2 out of 200",
        stream: "Engineering",
      },
      {
        id: 3,
        name: "Indian Institute of Technology - [IIT Bombay]",
        location: "Mumbai",
        ranking: "3 out of 200",
        stream: "Engineering",
      },
    ],
    "The Week": [
      {
        id: 1,
        name: "All India Institute of Medical Sciences - [AIIMS Delhi]",
        location: "New Delhi",
        ranking: "1 out of 75",
        stream: "Medical",
      },
      {
        id: 2,
        name: "Post Graduate Institute of Medical Education and Research - [PGIMER]",
        location: "Chandigarh",
        ranking: "2 out of 75",
        stream: "Medical",
      },
    ],
    Outlook: [
      {
        id: 1,
        name: "Indian Institute of Management - [IIM Ahmedabad]",
        location: "Ahmedabad",
        ranking: "1 out of 50",
        stream: "Management",
      },
      {
        id: 2,
        name: "Indian Institute of Management - [IIM Bangalore]",
        location: "Bangalore",
        ranking: "2 out of 50",
        stream: "Management",
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
    collegeData[selectedAgency] || collegeData["Collegedunia"];

  return (
    <div className="w-full bg-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-0">
            College Ranking {selectedYear}
          </h2>
          <button className="text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base transition-colors self-start md:self-center">
            View all Colleges
          </button>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Year Dropdown */}
          <div className="relative">
            <label className="text-sm text-gray-600 mb-2 block font-medium">
              Ranking Year:
            </label>
            <div className="relative">
              <button
                onClick={() => setShowYearDropdown(!showYearDropdown)}
                className="flex items-center justify-between w-full sm:w-40 px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="font-medium">{selectedYear}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    showYearDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showYearDropdown && (
                <div className="absolute top-full left-0 mt-2 w-full sm:w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-20 overflow-hidden">
                  {years.map((year, index) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(year);
                        setShowYearDropdown(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors duration-150 ${
                        index === 0 ? "rounded-t-lg" : ""
                      } ${index === years.length - 1 ? "rounded-b-lg" : ""}`}
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
            <label className="text-sm text-gray-600 mb-2 block font-medium">
              Ranking Agencies:
            </label>
            <div className="relative">
              <button
                onClick={() => scrollAgencies("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-lg border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-200 hidden md:flex"
              >
                <ChevronLeft size={16} />
              </button>

              <div
                ref={agencyScrollRef}
                className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide pb-1 md:px-10"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {agencies.map((agency) => (
                  <button
                    key={agency}
                    onClick={() => setSelectedAgency(agency)}
                    className={`
                      flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md
                      ${
                        selectedAgency === agency
                          ? "bg-gray-800 text-white shadow-md scale-105"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-lg border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 hover:shadow-xl transition-all duration-200 hidden md:flex"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-t-xl px-6 py-4">
            <div className="grid grid-cols-12 gap-4 items-center text-sm font-bold text-gray-700">
              <div className="col-span-6">College</div>
              <div className="col-span-3">Ranking</div>
              <div className="col-span-3">Streams</div>
            </div>
          </div>

          {/* College List */}
          <div className="bg-white border-l border-r border-b border-gray-200 rounded-b-xl overflow-hidden">
            {currentColleges.map((college, index) => {
              const IconComponent = getCollegeIcon(college.stream);
              return (
                <div
                  key={college.id}
                  className={`px-6 py-5 border-b border-gray-100 hover:bg-gray-50 transition-all duration-200 ${
                    index === currentColleges.length - 1 ? "border-b-0" : ""
                  } ${
                    college.isHighlighted
                      ? "bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-l-orange-400"
                      : ""
                  }`}
                >
                  <div className="grid grid-cols-12 gap-4 items-center">
                    {/* College Info */}
                    <div className="col-span-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            college.isHighlighted
                              ? "bg-orange-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <IconComponent
                            size={24}
                            className={
                              college.isHighlighted
                                ? "text-orange-600"
                                : "text-gray-600"
                            }
                          />
                        </div>
                        <div>
                          <h3
                            className={`font-bold text-base leading-tight mb-1 ${
                              college.isHighlighted
                                ? "text-orange-700"
                                : "text-gray-800"
                            }`}
                          >
                            {college.name}
                          </h3>
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <Building2 size={12} />
                            {college.location}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Ranking */}
                    <div className="col-span-3">
                      <div className="flex items-center gap-2">
                        <Award size={16} className="text-blue-500" />
                        <div className="text-sm font-bold text-gray-800">
                          {college.ranking}
                        </div>
                      </div>
                    </div>

                    {/* Stream */}
                    <div className="col-span-3">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {college.stream}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Card View */}
        <div className="lg:hidden space-y-4">
          {currentColleges.map((college) => {
            const IconComponent = getCollegeIcon(college.stream);
            return (
              <div
                key={college.id}
                className={`border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-200 ${
                  college.isHighlighted
                    ? "bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200"
                    : "bg-white"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      college.isHighlighted ? "bg-orange-100" : "bg-gray-100"
                    }`}
                  >
                    <IconComponent
                      size={24}
                      className={
                        college.isHighlighted
                          ? "text-orange-600"
                          : "text-gray-600"
                      }
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-bold text-base leading-tight mb-2 ${
                        college.isHighlighted
                          ? "text-orange-700"
                          : "text-gray-800"
                      }`}
                    >
                      {college.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                      <Building2 size={12} />
                      {college.location}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        <Award size={14} />
                        <span>{college.ranking}</span>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {college.stream}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Ranking of 2500+ colleges based on authentic student reviews and
            comprehensive data analysis.
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
