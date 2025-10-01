import React, { useState } from "react";
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
} from "lucide-react";

// CTA Banner Component
const CTABanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-100 to-yellow-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
              Know your chances of Admission
            </h2>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Now
            </button>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-24 bg-blue-100 rounded-lg flex items-center justify-center">
              <div className="text-6xl">👩‍🎓</div>
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
        title: "MH Nursing CET Removes Percentile Requirement; Zer...",
        date: "Oct 1, 2025",
        content:
          "The State Common Entrance Test (CET) Cell Has Announced A Major Change In The Eligibility Criteria For BSc Nursing Courses. With Approv...",
      },
      {
        id: 2,
        title: "SCSVMV University Admissions 2026 Open for U...",
        date: "Oct 1, 2025",
        content:
          "Sri Chandrasekharendra Saraswathi Viswa Mahavidyalaya (SCSVMV), Kanchipuram, Has Officially Started The Admission Process For Its...",
      },
      {
        id: 3,
        title: "Theatre Reading Answers",
        date: "Oct 1, 2025",
        content:
          "Theatre Reading Answers Is An Academic Reading Answers Topic. Theatre Reading Answers Has A Total Of 7 IELTS Questions In Total...",
      },
      {
        id: 4,
        title: "JEE Main 2025 Announced by",
        date: "Oct 1, 2025",
        content:
          "The National Testing Agency Has Officially Released The Tentative Schedule For JEE Main Entrance Examin...",
      },
    ],
    "College Alerts": [
      {
        id: 1,
        title: "IIT Bombay Opens New Department of AI",
        date: "Oct 1, 2025",
        content:
          "Indian Institute of Technology Bombay has announced the launch of a new Department of Artificial Intelligence...",
      },
      {
        id: 2,
        title: "Delhi University Admission Process 2026",
        date: "Oct 1, 2025",
        content:
          "Delhi University has released the detailed admission process for undergraduate courses starting from 2026...",
      },
    ],
    "Admission Alerts": [
      {
        id: 1,
        title: "NEET UG 2026 Registration Starts",
        date: "Oct 1, 2025",
        content:
          "National Eligibility cum Entrance Test for undergraduate medical courses registration has officially begun...",
      },
      {
        id: 2,
        title: "CAT 2025 Application Deadline Extended",
        date: "Oct 1, 2025",
        content:
          "Common Admission Test application deadline has been extended by two weeks due to technical issues...",
      },
    ],
  };

  const currentNews = newsData[activeTab] || [];

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Latest News & Stories
          </h2>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentNews.map((news) => (
            <div
              key={news.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer"
            >
              <div className="mb-4">
                <h3 className="font-bold text-gray-800 text-base leading-tight mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {news.content}
                </p>
              </div>

              <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors">
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
    <div className="w-full bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Subscribe To Our News Letter
        </h2>
        <p className="text-gray-600 mb-8">
          Get College Notifications, Exam Notifications and News Updates
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
          {/* Email Input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Mail size={20} />
            </div>
            <input
              type="email"
              placeholder="Enter your email id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Mobile Input */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Phone size={20} />
            </div>
            <input
              type="tel"
              placeholder="Enter your mobile no"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Course Dropdown */}
          <div className="flex-1 relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <GraduationCap size={20} />
            </div>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full pl-12 pr-10 py-3 border border-gray-300 rounded-lg text-left text-gray-500 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              {course || "Choose your course"}
            </button>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <ChevronDown
                size={20}
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
                    className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {courseOption}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
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

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerLinks = {
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
    ],
    "Board Exams": [
      "CBSE Class 12",
      "CBSE Class 12th Results",
      "CBSE Class 12th Syllabus",
      "CBSE Class 12th Exam Dates",
      "CBSE Class 10",
      "CBSE Class 10th Result",
      "CBSE Class 10th Syllabus",
    ],
  };

  const studyAbroadExtra = [
    "Ireland",
    "New Zealand",
    "Hong Kong",
    "Singapore",
    "Malaysia",
    "Netherlands",
    "Italy",
  ];

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-gray-800 text-base mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
                {category === "Study Abroad" && (
                  <>
                    {studyAbroadExtra.map((link, index) => (
                      <li key={`extra-${index}`}>
                        <a
                          href="#"
                          className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Other Links Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-bold text-gray-800 text-base mb-4">
            Other Links
          </h3>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800 transition-colors">
              About Collegedunia
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Contact Us
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Advertising
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Career
            </a>
            <a href="#" className="hover:text-gray-800 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">📚</span>
                </div>
                <span className="font-bold text-gray-800 text-lg">
                  collegedunia
                </span>
              </div>
              <span className="text-sm text-gray-600">
                © 2025 Collegedunia Web Pvt. Ltd. All Rights Reserved
              </span>
            </div>

            {/* Social Icons and App Download */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700 font-medium">
                  Download the Collegedunia app on
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

              <div className="flex items-center gap-3">
                {[Facebook, Instagram, Twitter, Youtube, Linkedin, Rss].map(
                  (Icon, index) => (
                    <button
                      key={index}
                      className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200"
                    >
                      <Icon size={16} />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
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
