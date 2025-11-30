// Import images using Vite's import.meta.url featurne
import businessContactExtractorImage from '../assets/UCC HOME.jpg?url';
import mainThumb from '../assets/UCC HOME.jpg?url';
import retailStoreImage from "../assets/Retail Store cover.PNG";
import retailStore1 from "../assets/Retail Store Analytics Platform/RS 1.PNG";
import retailStore2 from "../assets/Retail Store Analytics Platform/RS 2.PNG";
import retailStore3 from "../assets/Retail Store Analytics Platform/RS 3.PNG";
import retailStore4 from "../assets/Retail Store Analytics Platform/RS 4.PNG";
import retailStore5 from "../assets/Retail Store Analytics Platform/RS 5.PNG";
import retailStore6 from "../assets/Retail Store Analytics Platform/RS 6.PNG";
import chineseNewsExtractorImage from "../assets/Chinese News Headlines Extractor cover.jpg";
import chineseNews1 from "../assets/Chinese News Headlines Extractor/CN 1.PNG";
import chineseNews2 from "../assets/Chinese News Headlines Extractor/CN 2.PNG";
import chineseNews3 from "../assets/Chinese News Headlines Extractor/CN 3.PNG";
import chineseNews4 from "../assets/Chinese News Headlines Extractor/CN 4.PNG";
import chineseNews5 from "../assets/Chinese News Headlines Extractor/CN 5.PNG";
import chineseNews6 from "../assets/Chinese News Headlines Extractor/CN 6.PNG";
import smartTrafficAnalyzerImage from "../assets/Smart Traffic Investment Analyzer cover.jpg";
import trafficManager1 from "../assets/Smart Traffic Investment Analyzer/TM 1.PNG";
import trafficManager2 from "../assets/Smart Traffic Investment Analyzer/TM 2.PNG";
import trafficManager3 from "../assets/Smart Traffic Investment Analyzer/TM 3.PNG";
import trafficManager4 from "../assets/Smart Traffic Investment Analyzer/TM 4.PNG";
import trafficManager5 from "../assets/Smart Traffic Investment Analyzer/TM 5.PNG";
import trafficManager6 from "../assets/Smart Traffic Investment Analyzer/TM 6.PNG";
import trafficManager7 from "../assets/Smart Traffic Investment Analyzer/TM 7.PNG";
import trafficManager8 from "../assets/Smart Traffic Investment Analyzer/TM 8.PNG";

export const projects = [
    {
        id: 1,
        title: "Business Contact Extractor | Automated Business Information Platform",
        description:
            "Business Contact Extractor is a sophisticated data collection system designed to automatically gather and organize contact information for businesses across various online sources. The platform leverages Google's Custom Search API and advanced web scraping techniques to extract, validate, and store business contact details efficiently. Built with Python and modern libraries, it ensures accurate and reliable data collection for business intelligence purposes.",
        image: mainThumb,
        images: [
            mainThumb,
            new URL('../assets/business_contact_extractor/business 1.PNG', import.meta.url).href,
            new URL('../assets/business_contact_extractor/buisness 2.PNG', import.meta.url).href,
            new URL('../assets/business_contact_extractor/business 3.PNG', import.meta.url).href,
            new URL('../assets/business_contact_extractor/business 4.PNG', import.meta.url).href,
            new URL('../assets/business_contact_extractor/business 5.PNG', import.meta.url).href
        ],
        technologies: ["Python", "BeautifulSoup4", "Google Custom Search API", "Regular Expressions", "Requests Library", "CSV Data Processing"],
        features: [
            "Automated contact information extraction",
            "Smart pattern recognition for emails and phone numbers",
            "Bulk processing of multiple businesses",
            "Intelligent web scraping with user agent rotation",
            "Multi-format phone number recognition",
            "Structured data validation",
            "API rate limiting compliance"
        ],
        liveUrl: "https://github.com"
    },
    {
        id: 2,
        title: "Retail Store Analytics Platform | Comprehensive Business Intelligence & Predictive Modeling System",
        description:
            "The Retail Store Analytics Platform is an advanced data analysis solution designed to extract actionable insights from retail operations data. This comprehensive system performs multi-dimensional analysis across sales, profitability, customer behavior, and operational efficiency metrics. Built with Python and modern data science libraries, the platform transforms raw retail data into strategic business intelligence through sophisticated statistical analysis, predictive modeling, and automated reporting.",
        image: retailStoreImage,
        images: [
            retailStoreImage,
            retailStore1,
            retailStore2,
            retailStore3,
            retailStore4,
            retailStore5,
            retailStore6
        ],
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "OpenPyXL"],
        features: [
            "Shipping Optimization Analysis",
            "Geographic Performance Mapping",
            "Time-Series Trend Analysis",
            "Customer Segmentation Analytics",
            "Product Category Intelligence",
            "Loyalty & Value Analysis",
            "Discount Impact Assessment",
            "Predictive Profit Modeling",
            "Automated Report Generation",
            "Data Visualization Suite"
        ],
        // github: "https://github.com",
        liveUrl: "https://software.procarenepal.com",
    },
    {
        id: 3,
        title: "Chinese News Headlines Extractor | Automated PDF Content Analysis Platform",
        description:
            "Chinese News Headlines Extractor is an intelligent document processing system designed to automatically extract and organize headlines and titles from Chinese-language PDF newspapers and publications. The platform leverages advanced PDF parsing technology with PyMuPDF (fitz) and sophisticated text analysis techniques to identify, extract, and structure headline content from multi-page documents. Built with Python and specialized libraries, it ensures accurate and reliable extraction of Chinese text with intelligent font-based recognition for business intelligence and content analysis purposes.",
        image: chineseNewsExtractorImage,
        images: [
            chineseNewsExtractorImage,
            chineseNews1,
            chineseNews2,
            chineseNews3,
            chineseNews4,
            chineseNews5,
            chineseNews6
        ],
        technologies: ["Python", "PyMuPDF (fitz)", "Pandas", "Regular Expressions", "OpenPyXL", "OS & File System processing"],
        features: [
            "Automated headline extraction from PDF documents",
            "Smart font-size based title recognition",
            "Intelligent text joining logic for multi-line headlines",
            "Chinese character recognition with known phrase detection",
            "Multi-page content tracking with page number indexing",
            "Date-based file organization",
            "Recognition of major Chinese news sources",
            "Context-aware headline joining",
            "Font-size based hierarchy detection",
            "Batch processing with progress tracking"
        ],
        // github: "https://github.com",
        liveUrl: "https://nepdent.com",
    },
    {
        id: 4,
        title: "Smart Traffic Investment Analyzer | Automated Decision Analytics & Excel Reporting Platform",
        description:
            "Smart Traffic Investment Analyzer is an end-to-end financial modeling and decision support system for evaluating IoT-enabled traffic management investments in metropolitan cities. It combines price–demand elasticity modeling, scenario and sensitivity analysis, Monte Carlo simulations, and optimization to quantify risk-adjusted returns and guide capital allocation decisions. The platform automatically generates a richly formatted Excel workbook with dynamic formulas and an executive summary, along with publication-ready charts—making results easy to share with stakeholders.",
        image: smartTrafficAnalyzerImage,
        images: [
            smartTrafficAnalyzerImage,
            trafficManager1,
            trafficManager2,
            trafficManager3,
            trafficManager4,
            trafficManager5,
            trafficManager6,
            trafficManager7,
            trafficManager8
        ],
        technologies: ["Python", "Pandas", "NumPy", "NumPy Financial", "SciPy", "Matplotlib", "Seaborn", "OpenPyXL"],
        features: [
            "Comprehensive financial metrics with cash flow modeling",
            "Price–demand elasticity modeling for revenue realism",
            "Scenario analysis with risk-adjusted comparisons",
            "Sensitivity analysis across multiple parameters",
            "Monte Carlo simulation with 2,000+ runs",
            "Decision criteria support and automated ranking",
            "Goal-seek style optimization",
            "Auto-generated Excel report with dynamic formulas",
            "Publication-ready visualizations",
            "Clear business question answers in output"
        ],
        // github: "https://github.com",
        liveUrl: "https://curamedical.netlify.app",
    },
];
