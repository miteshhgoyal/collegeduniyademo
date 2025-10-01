import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  GraduationCap,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Rss,
  ArrowUp,
  User,
} from "lucide-react";

// CTA Banner Component
const CTABanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-orange-50 py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-blue-600 leading-tight">
              Know your chances of Admission
            </h2>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Now
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
              <User size={32} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Latest News & Stories Component
const LatestNews = () => {
  const [activeTab, setActiveTab] = useState("Exam Alerts");

  const tabs = ["Exam Alerts", "College Alerts", "Admission Alerts"];

  const newsData = {
    "Exam Alerts": [
      {
        id: 1,
        title: "MH Nursing CET Removes Percentile Requirement",
        date: "Oct 1, 2025",
        content:
          "The State Common Entrance Test (CET) Cell Has Announced A Major Change In The Eligibility Criteria For BSc Nursing Courses. With Approved modifications, students can now apply...",
      },
      {
        id: 2,
        title: "SCSVMV University Admissions 2026 Open for UG Courses",
        date: "Oct 1, 2025",
        content:
          "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV), Kanchipuram, Has Officially Started The Admission Process For Its undergraduate programs...",
      },
      {
        id: 3,
        title: "Theatre Reading Answers for IELTS Academic",
        date: "Oct 1, 2025",
        content:
          "Theatre Reading Answers Is An Academic Reading Answers Topic. Theatre Reading Answers Has A Total Of 7 IELTS Questions In Total covering various aspects...",
      },
      {
        id: 4,
        title: "JEE Main 2025 Schedule Announced by NTA",
        date: "Oct 1, 2025",
        content:
          "The National Testing Agency Has Officially Released The Tentative Schedule For JEE Main Entrance Examination with important dates and guidelines...",
      },
    ],
    "College Alerts": [
      {
        id: 1,
        title: "IIT Bombay Opens New Department of AI",
        date: "Oct 1, 2025",
        content:
          "Indian Institute of Technology Bombay has announced the launch of a new Department of Artificial Intelligence with cutting-edge research facilities...",
      },
      {
        id: 2,
        title: "Delhi University Admission Process 2026",
        date: "Oct 1, 2025",
        content:
          "Delhi University has released the detailed admission process for undergraduate courses starting from 2026 academic session with new eligibility criteria...",
      },
    ],
    "Admission Alerts": [
      {
        id: 1,
        title: "NEET UG 2026 Registration Starts",
        date: "Oct 1, 2025",
        content:
          "National Eligibility cum Entrance Test for undergraduate medical courses registration has officially begun with updated application procedures...",
      },
      {
        id: 2,
        title: "CAT 2025 Application Deadline Extended",
        date: "Oct 1, 2025",
        content:
          "Common Admission Test application deadline has been extended by two weeks due to technical issues faced by candidates during registration...",
      },
    ],
  };

  const currentNews = newsData[activeTab] || [];

  return (
    <div className="w-full bg-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
            Latest News & Stories
          </h2>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-shrink-0 px-3 md:px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
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
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {currentNews.map((news) => (
            <div
              key={news.id}
              className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer"
            >
              <div className="mb-4">
                <h3 className="font-bold text-gray-800 text-sm md:text-base leading-tight mb-2">
                  {news.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-3">
                  {news.date}
                </p>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {news.content}
                </p>
              </div>

              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-xs md:text-sm transition-colors">
                <span>Read more</span>
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
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
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

// Newsletter Subscription Component
const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const courses = [
    "B.Tech/BE",
    "MBA/PGDM",
    "MBBS",
    "BCA",
    "B.Com",
    "BA",
    "B.Sc",
    "M.Tech",
    "MA",
    "M.Com",
  ];

  return (
    <div className="w-full bg-gray-50 py-8 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">
            Subscribe To Our News Letter
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Get College Notifications, Exam Notifications and News Updates
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
          {/* Email Input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={18} />
            </div>
            <input
              type="email"
              placeholder="Enter your email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
            />
          </div>

          {/* Mobile Input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Phone size={18} />
            </div>
            <input
              type="tel"
              placeholder="Enter your mobile no"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
            />
          </div>

          {/* Course Dropdown */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <GraduationCap size={18} />
            </div>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full pl-11 pr-10 py-3 border border-gray-300 rounded-lg text-left text-gray-500 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm md:text-base"
            >
              {course || "Choose your course"}
            </button>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {showDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-20 max-h-48 overflow-y-auto">
                {courses.map((courseOption) => (
                  <button
                    key={courseOption}
                    onClick={() => {
                      setCourse(courseOption);
                      setShowDropdown(false);
                    }}
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors text-sm md:text-base"
                  >
                    {courseOption}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg text-sm md:text-base">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerSections = {
    "Top Colleges": ["M.B.A", "B.Tech/B.E", "MCA", "BCA", "M.Tech", "MA", "BA"],
    "Top Universities": [
      "Engineering",
      "Management",
      "Medical",
      "Law",
      "Commerce",
      "Science",
      "Arts",
    ],
    "Top Exam": ["CAT", "GATE", "Jee-Main", "NEET", "XAT", "CLAT", "MAT"],
    "Study Abroad": [
      "Canada",
      "USA",
      "UK",
      "UAE",
      "Australia",
      "Germany",
      "Sweden",
      "Ireland",
      "New Zealand",
      "Hong Kong",
      "Singapore",
    ],
    "Board Exams": [
      "CBSE Class 12",
      "CBSE Class 12th Results",
      "CBSE Class 12th Syllabus",
      "CBSE Class 12th Exam Dates",
      "CBSE Class 10",
      "CBSE Class 10th Result",
    ],
  };

  const socialIcons = [
    { Icon: Facebook, label: "Facebook" },
    { Icon: Instagram, label: "Instagram" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Youtube, label: "YouTube" },
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Rss, label: "RSS" },
  ];

  return (
    <>
      <footer className="w-full bg-gray-50 border-t border-gray-200">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
            {Object.entries(footerSections).map(([title, links]) => (
              <div key={title}>
                <h3 className="font-bold text-gray-800 text-sm md:text-base mb-3 md:mb-4">
                  {title}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-xs md:text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200 block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Other Links Section */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <h3 className="font-bold text-gray-800 text-sm md:text-base mb-3 md:mb-4">
              Other Links
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-600">
              {[
                "About Colleges Info",
                "Contact Us",
                "Advertising",
                "Career",
                "Terms & Conditions",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-gray-800 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Logo and Copyright */}
              <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 text-center sm:text-left">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <GraduationCap size={16} className="text-white" />
                  </div>
                  <span className="font-bold text-gray-800 text-lg">
                    Colleges Info
                  </span>
                </div>
                <span className="text-xs md:text-sm text-gray-600">
                  © 2025 Colleges Info Web Pvt. Ltd. All Rights Reserved
                </span>
              </div>

              {/* App Download and Social Icons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-3">
                  <span className="text-xs md:text-sm text-gray-700 font-medium text-center sm:text-left">
                    Download the Colleges Info app on
                  </span>
                  <div className="flex gap-2">
                    <button className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded text-xs transition-colors">
                      Google Play
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-1 rounded text-xs transition-colors">
                      App Store
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  {socialIcons.map(({ Icon, label }, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200"
                      aria-label={label}
                    >
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 md:bottom-6 right-4 md:right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

// Combined Component
const CTANewsFooter = () => {
  return (
    <div>
      <CTABanner />
      <LatestNews />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default CTANewsFooter;
