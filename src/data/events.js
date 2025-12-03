// Import event images
import techLeap1 from "../assets/TECH LEAP/1.jpg?url";
// techLeap2 removed (file deleted)
import techLeap3 from "../assets/TECH LEAP/3.jpg?url";
import techLeap4 from "../assets/TECH LEAP/4.jpg?url";
// techLeap5 removed (file deleted)
import techLeap6 from "../assets/TECH LEAP/6.jpg?url";
import techLeap7 from "../assets/TECH LEAP/7.jpg?url";
// techLeap8 removed (file deleted)
import techLeap9 from "../assets/TECH LEAP/9.jpg?url";
import techLeap10 from "../assets/TECH LEAP/10.jpg?url";
// codeclock4/5/6 removed (files deleted)
import codeclock7 from "../assets/Code'o Clock NUST/7.jpg?url";
import codeclock8 from "../assets/Code'o Clock NUST/8.jpg?url";
import codeclock9 from "../assets/Code'o Clock NUST/9.jpg?url";
// Import evolve event images
import evolve1 from "../assets/Evolve/IMG-20251028-WA0020.jpg?url";
import evolve2 from "../assets/Evolve/IMG-20251028-WA0021.jpg?url";
import evolve3 from "../assets/Evolve/IMG-20251028-WA0022.jpg?url";
// evolve4 removed (IMG-20251028-WA0023.jpg deleted)
// evolve5/6/7 removed (files deleted)
import evolve8 from "../assets/Evolve/IMG-20251028-WA0027.jpg?url";
import evolve9 from "../assets/Evolve/IMG-20251028-WA0028.jpg?url";
// evolve10/11/12 removed (files deleted)
import evolve13 from "../assets/Evolve/IMG-20251028-WA0032.jpg?url";
// evolve14 removed (IMG-20251028-WA0033.jpg deleted)
import evolve15 from "../assets/Evolve/IMG-20251028-WA0034.jpg?url";
// evolve16/17 removed (files deleted)
import evolve18 from "../assets/Evolve/IMG-20251028-WA0037.jpg?url";
// Import Build with AI event images
import buildWithAI1 from "../assets/Build with AI/IMG-20251119-WA0006.jpg?url";
import buildWithAI2 from "../assets/Build with AI/IMG-20251119-WA0007.jpg?url";
import buildWithAI3 from "../assets/Build with AI/IMG-20251119-WA0008.jpg?url";
// Import Sprint to Imagine Cup event images
import sprintImagine1 from "../assets/Sprint to Imagine Cup IAMSCIENCE/1.jpg?url";
import sprintImagine2 from "../assets/Sprint to Imagine Cup IAMSCIENCE/2.PNG?url";
import sprintImagine3 from "../assets/Sprint to Imagine Cup IAMSCIENCE/3.jpg?url";
// sprintImagine4 removed (IMG-20251028-WA0008.jpg deleted)
import sprintImagine5 from "../assets/Sprint to Imagine Cup IAMSCIENCE/IMG-20251028-WA0010.jpg?url";
// Import Sprint to Imagine Cup FJWU event images
import sprintFjwu1 from "../assets/Sprint to Imagine Cup FJWU/1.jpg?url";
import sprintFjwu2 from "../assets/Sprint to Imagine Cup FJWU/3.jpg?url";
import sprintFjwu3 from "../assets/Sprint to Imagine Cup FJWU/4.jpg?url";
import sprintFjwu4 from "../assets/Sprint to Imagine Cup FJWU/5.jpg?url";
// sprintFjwu5 removed (6.jpg deleted)
// Import Tech Innovation AIR event images
import techAir1 from "../assets/Tech Innvovation AIR/1.jpg?url";
import techAir2 from "../assets/Tech Innvovation AIR/2.jpg?url";
import techAir3 from "../assets/Tech Innvovation AIR/3.jpg?url";
import techAir4 from "../assets/Tech Innvovation AIR/4.jpg?url";
import techAir5 from "../assets/Tech Innvovation AIR/IMG-20251129-WA0019.jpg?url";
// Import E-Mustaqbil event images
import eMustaqbil1 from "../assets/E-Mustaqbil/1.jpg?url";
import eMustaqbil2 from "../assets/E-Mustaqbil/2.jpg?url";
import eMustaqbil3 from "../assets/E-Mustaqbil/3.jpg?url";
import eMustaqbil4 from "../assets/E-Mustaqbil/IMG-20251129-WA0037.jpg?url";
// eMustaqbil5 removed (IMG-20251129-WA0039.jpg deleted)

export const events = [
    {
        id: 7,
        title: "Tech Innovation AIR",
        institution: {
            name: "Air University Islamabad",
            location: "Islamabad, Pakistan",
            shortName: "AIR"
        },
        role: {
            title: "Event Organizer"
        },
        description: "Organized an impactful tech event at Air University Islamabad in collaboration with BASE Pakistan, featuring insights on Web3 technologies and decentralized systems.",
        longDescription: `The MLSA Islamabad Chapter recently organized an impactful event titled "Tech Innovation Air" at Air University Islamabad, in collaboration with BASE Pakistan. The session featured our esteemed speaker Talha, who delivered an insightful workshop on Web3 technologies, decentralized systems, and the innovative solutions being developed at BASE.

The event was highly engaging, offering students a deeper understanding of emerging tech trends, hands-on concepts, and real-world applications. It proved to be a truly valuable learning experience for all participants and stood out as one of the most well-organized and enriching tech sessions of the season.`,
        date: {
            full: "November 2025",
            year: "2025",
            season: "Fall"
        },
        image: techAir1,
        images: [
            {
                src: techAir1,
                alt: "Tech Innovation AIR Main Event",
                caption: "MLSA Islamabad Chapter at Air University"
            },
            {
                src: techAir2,
                alt: "Web3 Workshop Session",
                caption: "Talha delivering insights on Web3 technologies"
            },
            {
                src: techAir3,
                alt: "Student Engagement",
                caption: "Students actively participating in the tech session"
            },
            {
                src: techAir4,
                alt: "Hands-on Learning",
                caption: "Interactive workshop on decentralized systems"
            },
            {
                src: techAir5,
                alt: "Event Collaboration",
                caption: "Partnership with BASE Pakistan"
            }
        ],
        topics: [
            {
                name: "Web3 Technologies",
                icon: "globe",
                description: "Exploring decentralized web technologies"
            },
            {
                name: "Decentralized Systems",
                icon: "network",
                description: "Understanding blockchain and distributed networks"
            },
            {
                name: "BASE Innovation",
                icon: "lightbulb",
                description: "Innovative solutions from BASE Pakistan"
            },
            {
                name: "Emerging Tech Trends",
                icon: "trending-up",
                description: "Latest developments in technology sector"
            }
        ],
        highlights: [
            "Collaboration with BASE Pakistan",
            "Web3 and decentralized systems workshop by Talha",
            "Hands-on learning experience for students",
            "One of the most well-organized tech sessions of the season",
            "Real-world applications and emerging tech trends"
        ]
    },
    {
        id: 1,
        title: "Code'o Clock Programming Workshop",
        institution: {
            name: "National University of Science and Technology",
            location: "Islamabad, Pakistan",
            shortName: "NUST"
        },
        description: "Led an immersive programming workshop focused on building strong foundations in Python and C++. This hands-on session was designed to empower students with practical coding skills and fundamental programming concepts.",
        longDescription: "The workshop provided students with a comprehensive introduction to programming fundamentals, focusing on both Python and C++ languages. Through interactive sessions and practical exercises, participants learned essential concepts including variables, control structures, functions, and basic algorithms. The workshop emphasized hands-on learning, with each student receiving personalized guidance and feedback throughout their coding exercises.",
        date: {
            full: "March 2024",
            year: "2024",
            season: "Spring"
        },
        image: codeclock1,
        images: [
            {
                src: codeclock1,
                alt: "Workshop opening session with students",
                caption: "Kickoff session introducing programming fundamentals"
            },
            {
                src: codeclock2,
                alt: "Interactive coding demonstration",
                caption: "Live coding demonstration of key concepts"
            },
            {
                src: codeclock3,
                alt: "Students engaged in hands-on practice",
                caption: "Participants working on practical exercises"
            },
            {
                src: codeclock7,
                alt: "Student participation",
                caption: "Active student engagement and discussion"
            },
            {
                src: codeclock8,
                alt: "Practical demonstration",
                caption: "Demonstrating real-world applications"
            },
            {
                src: codeclock9,
                alt: "Workshop conclusion",
                caption: "Wrap-up session and final insights"
            }
        ],
        topics: [
            {
                name: "Programming Fundamentals",
                icon: "code",
                description: "Core concepts of programming languages"
            },
            {
                name: "Python Programming",
                icon: "python",
                description: "Introduction to Python syntax and features"
            },
            {
                name: "C++ Programming",
                icon: "cpp",
                description: "Basics of C++ programming language"
            },
            {
                name: "Algorithms",
                icon: "function",
                description: "Fundamental algorithmic concepts"
            },
            {
                name: "Hands-on Coding",
                icon: "laptop",
                description: "Practical coding exercises and solutions"
            }
        ],
        highlights: [
            "Interactive learning environment with real-time coding exercises",
            "Comprehensive coverage of both Python and C++ fundamentals",
            "Personalized guidance and code review sessions",
            "Focus on practical, industry-relevant programming skills",
            "Student engagement through collaborative problem-solving"
        ],
        achievements: [
            "Successfully trained over 50 students in programming basics",
            "100% hands-on participation rate in coding exercises",
            "Positive feedback from participants and institution"
        ],
        role: {
            title: "Lead Instructor",
            responsibilities: [
                "Workshop design and curriculum development",
                "Live coding demonstrations and explanations",
                "One-on-one student mentoring",
                "Technical problem-solving assistance"
            ]
        },
        type: "Technical Workshop",
        category: "Educational"
    },
    {
        id: 2,
        title: "Tech Leap 2024: A Remarkable Tech Experience",
        institution: {
            name: "National University of Science and Technology",
            location: "Islamabad, Pakistan",
            shortName: "NUST"
        },
        description: "Organized and led Tech Leap 2024, a comprehensive technology conference bringing together students, professionals, and industry experts to explore cutting-edge innovations and foster collaboration in the tech ecosystem.",
        longDescription: "Tech Leap 2024 was a landmark technology event that brought together the brightest minds in Pakistan's tech community. As an organizer, I helped create an immersive experience featuring keynote speeches, interactive workshops, panel discussions, and networking sessions. The event focused on emerging technologies, career development, and building stronger connections within the tech industry. Participants gained valuable insights into AI, machine learning, web development, and entrepreneurship while networking with industry leaders and peers.",
        date: {
            full: "March 2024",
            year: "2024",
            season: "Spring"
        },
        image: techLeap1,
        images: [
            {
                src: techLeap1,
                alt: "Tech Leap 2024 Opening Ceremony",
                caption: "Grand opening of Tech Leap 2024 conference"
            },
            {
                src: techLeap3,
                alt: "Panel Discussion",
                caption: "Expert panel discussing future of technology"
            },
            {
                src: techLeap4,
                alt: "Interactive Workshop",
                caption: "Hands-on technology workshop session"
            },
            {
                src: techLeap6,
                alt: "Tech Showcase",
                caption: "Innovative projects and solutions showcase"
            },
            {
                src: techLeap7,
                alt: "Student Engagement",
                caption: "Students actively participating in discussions"
            },
            {
                src: techLeap9,
                alt: "Team Photo",
                caption: "Organizing team and participants"
            },
            {
                src: techLeap10,
                alt: "Event Conclusion",
                caption: "Successful conclusion of Tech Leap 2024"
            }
        ],
        topics: [
            {
                name: "Artificial Intelligence",
                icon: "cpu",
                description: "Latest developments in AI and machine learning"
            },
            {
                name: "Web Development",
                icon: "code",
                description: "Modern web technologies and frameworks"
            },
            {
                name: "Entrepreneurship",
                icon: "lightbulb",
                description: "Building tech startups and innovation"
            },
            {
                name: "Career Development",
                icon: "briefcase",
                description: "Professional growth in technology sector"
            },
            {
                name: "Industry Networking",
                icon: "users",
                description: "Building professional connections and collaborations"
            }
        ],
        highlights: [
            "Interactive learning environment with real-time coding exercises",
            "Comprehensive coverage of both Python and C++ fundamentals",
            "Personalized guidance and code review sessions",
            "Focus on practical, industry-relevant programming skills",
            "Student engagement through collaborative problem-solving"
        ],
        achievements: [
            "Successfully trained over 50 students in programming basics",
            "100% hands-on participation rate in coding exercises",
            "Positive feedback from participants and institution"
        ],
        role: {
            title: "Event Organizer",
            responsibilities: [
                "Event planning and coordination",
                "Speaker management and logistics",
                "Participant engagement and networking facilitation",
                "Workshop organization and content curation"
            ]
        },
        type: "Technology Conference",
        category: "Professional Development"
    },
    {
        id: 3,
        title: "VS Code Dev Day Pakistan",
        institution: {
            name: "Daftarkhwan Rawalpindi",
            location: "Rawalpindi, Pakistan",
            shortName: "Daftarkhwan"
        },
        role: {
            title: "Joint Secretary"
        },
        description: "Hosted the first-ever VS Code Dev Day in Pakistan, bringing together brilliant professionals to connect, learn, and push the boundaries of technology.",
        longDescription: `From a vision to a milestone, I'm thrilled to share that we successfully hosted the first-ever VS Code Dev Day in Pakistan at Daftarkhwan Rawalpindi!

As the Joint Secretary of Microsoft Learn Student Ambassadors - Islamabad, it was an absolute honor to be part of the team that brought this incredible event to life. The energy was electric, bringing together brilliant professionals from across the nation to connect, learn, and push the boundaries of technology.

This wasn't just an event; it was a testament to months of planning, dedication, and the power of community.

A huge shout out to our incredible team and supporters:
🔹 Our visionary leader, Hamza Khattak, who spearheaded this achievement.
🔹 Our esteemed speakers and mentors: Arsalan Khattak, Maryam Shahzad, Usman Aslam, Syed Nauyan Rashid, and Sumayya Shaheen for sharing their invaluable expertise.
🔹 Our amazing moderator, Shaheryar E. Ehsan, who kept the energy high and the conversations flowing.
🔹 The entire Microsoft community for their unwavering support.

The future of tech in Pakistan is bright, and this is just the beginning. Get ready for what's next! 🌐

A usual and a great shout out to Microsoft Learn Student Ambassadors - Islamabad team who have made this event successful by their heartly efforts.

Ali Nawaz, Humair Shoukat`,
        date: {
            full: "October 28, 2025",
            year: "2025",
            season: "Fall"
        },
        image: evolve1,
        images: [
            { src: evolve1, alt: "Event Opening", caption: "History made! 🇵🇰" },
            { src: evolve2, alt: "Speaker Session", caption: "Inspiring talks by industry leaders." },
            { src: evolve3, alt: "Audience Engagement", caption: "Interactive Q&A session." },
            { src: evolve8, alt: "Closing Ceremony", caption: "Celebrating the success of the event." },
            { src: evolve9, alt: "Group Photo", caption: "Participants and organizers together." },
            { src: evolve13, alt: "Audience Participation", caption: "Engaged and enthusiastic attendees." },
            { src: evolve15, alt: "Event Setup", caption: "Behind-the-scenes preparations." },
            { src: evolve18, alt: "Event Wrap-up", caption: "Looking forward to the next chapter." }
        ],
        topics: [
            { name: "Community Building", icon: "users", description: "Fostering connections and collaboration." },
            { name: "Tech Innovation", icon: "lightbulb", description: "Exploring the latest in technology." },
            { name: "Professional Growth", icon: "briefcase", description: "Empowering individuals to excel." },
            { name: "Hands-on Learning", icon: "laptop", description: "Interactive and practical sessions." }
        ],
        highlights: [
            "First-ever VS Code Dev Day in Pakistan.",
            "Inspiring talks by industry leaders.",
            "Interactive sessions and workshops.",
            "Unparalleled networking opportunities.",
            "A milestone for the tech community in Pakistan."
        ]
    },
    {
        id: 4,
        title: "BuildWithAI – A Dream Turned Reality!",
        institution: {
            name: "NICAT Rawalpindi",
            location: "Rawalpindi, Pakistan",
            shortName: "NICAT"
        },
        role: {
            title: "Co-Lead"
        },
        description: "An unforgettable milestone event powered by GDG on Campus and TensorFlow User Group Islamabad.",
        longDescription: `Times of planning, sleepless nights, and relentless effort finally paid off! As a Co-Lead of GDG on Campus - International Islamic University - Islamabad, I’m still buzzing from the energy of our "Build with AI" event at NICAT - National Incubation Center for Aerospace Technologies, powered by Google Developer Groups on Campus CUI and TensorFlow User Group Islamabad.

This wasn’t just an event; it was a milestone—a testament to what happens when passion meets persistence. Here’s why it was unforgettable:

🔥 The Moments That Made It Special:
✨ Tahreem Rasul (my forever mentor!) took us on a deep dive into Gemini AI—her expertise left us all in awe.
✨ Ahmed Iqbal unlocked the magic of Generative AI, showing us how to reimagine open-source imagery—pure innovation!

The panel discussion was next-level! A huge thanks to Maryam Shahzad, Muhammad Haseeb, and the brilliant Ahmad Anis (IT Alumni) for their insights. And a standing ovation to M. Asmat Ullah Khan, PhD (Dean of FOCIT at International Islamic University Islamabad)—your visionary push elevated the discussion to new heights!

🍕 Fueling the Fire:
Ranchers Cafe kept us fed (because great minds need great food!).
Crusteez powered us through with snacks because even AI enthusiasts need sugar rushes!

💡 This event was proof that when the right team comes together, magic happens. To my GDGOC family—every late-night call, every last-minute fix, every ounce of effort was worth it. We did this!

The future of AI is here, and we’re not just watching—we’re building it. Who’s ready for the next chapter? 🚀`,
        date: {
            full: "November 2025",
            year: "2025",
            season: "Fall"
        },
        image: buildWithAI1,
        images: [
            {
                src: buildWithAI1,
                alt: "Build with AI Event Main Session",
                caption: "Main presentation session at Build with AI"
            },
            {
                src: buildWithAI2,
                alt: "Panel Discussion",
                caption: "Panel discussion with industry experts"
            },
            {
                src: buildWithAI3,
                alt: "Event Team",
                caption: "Event team celebrating success"
            }
        ]
    },
    {
        id: 5,
        title: "Sprint to Imagine Cup IAMSCIENCE",
        institution: {
            name: "Institute of Management Sciences (IM|Sciences)",
            location: "Peshawar, Pakistan",
            shortName: "IM|Sciences"
        },
        role: {
            title: "Event Lead"
        },
        description: "Led Pakistan's First Sprint to Imagine Cup 2025 in Peshawar, inspiring passionate minds to dream, build, and innovate for a better tomorrow.",
        longDescription: `Leading from Islamabad to Peshawar here the journey for Microsoft Learn Student Ambassadors - Islamabad begins next.

Welcome to the Sprint to Imagine Cup Series 2025! ✨

Our journey took a vibrant turn as we brought Pakistan's First Sprint to Imagine Cup 2025 to Peshawar the land of hospitality, heart, and innovation! 💚

Honored to lead at Institute of Management Sciences, (IM|Sciences) this event marked the start of something bigger inspiring passionate minds to dream, build, and innovate for a better tomorrow keeping technology in mind.

✨✨From uncovering the essence of the Imagine Cup to learning from the inspiring speaker Ashley Alex Jacob students gained valuable insights on transforming creativity into real world Projects impact through AI and technology.

✨✨On the other hand Hamza Khattak, Microsoft Most Valuable Professional, introduced students to GitHub Copilot, explaining how it can help them build Imagine Cup projects alongside their academic work that may lead to a beautiful emergence in tech.

Immense gratitude to IM Computing and Innovation Society for their outstanding collaboration and flawless event management. Together, we're empowering the next wave of creators, coders, and changemakers.

A usual and deep heart a special thanks to my team at Microsoft Learn Student Ambassadors - Islamabad for their constant support and dedication.

Yet to new cities, new dreams, and an unstoppable journey of imagination!
تب تک کے لیے، جڑے رہیں سفر ابھی ختم نہیں ہوا ✨۔`,
        date: {
            full: "October 2025",
            year: "2025",
            season: "Fall"
        },
        image: sprintImagine1,
        images: [
            {
                src: sprintImagine1,
                alt: "Sprint to Imagine Cup Main Event",
                caption: "Pakistan's First Sprint to Imagine Cup 2025 in Peshawar"
            },
            {
                src: sprintImagine2,
                alt: "Event Presentation",
                caption: "Inspiring presentation on Imagine Cup essentials"
            },
            {
                src: sprintImagine3,
                alt: "GitHub Copilot Session",
                caption: "Hamza Khattak introducing GitHub Copilot"
            },
            {
                src: sprintImagine5,
                alt: "Event Team",
                caption: "Collaboration with IM Computing and Innovation Society"
            }
        ],
        topics: [
            {
                name: "Imagine Cup",
                icon: "trophy",
                description: "Microsoft's premier student technology competition"
            },
            {
                name: "GitHub Copilot",
                icon: "code",
                description: "AI-powered coding assistant for developers"
            },
            {
                name: "Innovation",
                icon: "lightbulb",
                description: "Transforming creativity into real-world impact"
            },
            {
                name: "AI & Technology",
                icon: "cpu",
                description: "Leveraging AI for project development"
            }
        ],
        highlights: [
            "Pakistan's First Sprint to Imagine Cup 2025",
            "Inspiring speaker sessions by Ashley Alex Jacob",
            "GitHub Copilot introduction by Hamza Khattak, MVP",
            "Collaboration with IM Computing and Innovation Society",
            "Empowering the next wave of creators and changemakers"
        ]
    },
    {
        id: 6,
        title: "Sprint to Imagine Cup FJWU",
        institution: {
            name: "Fatima Jinnah Women University Rawalpindi",
            location: "Rawalpindi, Pakistan",
            shortName: "FJWU"
        },
        role: {
            title: "Team Lead"
        },
        description: "Led Microsoft Learn Student Ambassadors - Islamabad team at Fatima Jinnah Women University for Sprint to Imagine Cup 2026, featuring expert sessions and hands-on workshops.",
        longDescription: `Microsoft Learn Student Ambassadors - Islamabad Team at Fatima Jinnah Women University Rawalpindi (Official). 💙🤍

Last week, our team visited Fatima Jinnah Women University Rawalpindi (Official), for the Sprint to Imagine Cup 2026!

The event featured multiple speakers who guided students on their Imagine Cup journey and shared valuable insights to help them prepare for the global competition.

Ali Mumtaz gave an engaging introduction to Imagine Cup 2026, sharing his experiences from previous competitions and helping students understand how to transform their ideas into impactful projects.

Hamza Khattak, from Z-Axiss and a Microsoft Most Valuable Professional, introduced students to GitHub Copilot, explaining how it can support them not only during their Imagine Cup preparation but also in developing their final-year projects.

Arsalan Khattak, from Bryntum, conducted a hands-on workshop on the Model Context Protocol (MCP), delivering a live demo that showcased the power of MCP and how multiple MCP servers can work together seamlessly.

A huge thank you to Rushdah Adnan and her amazing team for managing and hosting the event at Fatima Jinnah Women University Rawalpindi.

Peshawar is done, Islamabad is done, Rawalpindi is done. Can you guess our next stop? 👀`,
        date: {
            full: "November 2025",
            year: "2025",
            season: "Fall"
        },
        image: sprintFjwu1,
        images: [
            {
                src: sprintFjwu1,
                alt: "Sprint to Imagine Cup FJWU Main Event",
                caption: "Microsoft Learn Student Ambassadors team at FJWU"
            },
            {
                src: sprintFjwu2,
                alt: "Imagine Cup Introduction",
                caption: "Ali Mumtaz presenting Imagine Cup 2026 introduction"
            },
            {
                src: sprintFjwu3,
                alt: "GitHub Copilot Session",
                caption: "Hamza Khattak demonstrating GitHub Copilot"
            },
            {
                src: sprintFjwu4,
                alt: "MCP Workshop",
                caption: "Arsalan Khattak conducting Model Context Protocol workshop"
            }
        ],
        topics: [
            {
                name: "Imagine Cup 2026",
                icon: "trophy",
                description: "Global student technology competition preparation"
            },
            {
                name: "GitHub Copilot",
                icon: "code",
                description: "AI-powered development assistance for projects"
            },
            {
                name: "Model Context Protocol",
                icon: "network",
                description: "Hands-on workshop with live MCP demonstrations"
            },
            {
                name: "Project Development",
                icon: "lightbulb",
                description: "Transforming ideas into impactful solutions"
            }
        ],
        highlights: [
            "Sprint to Imagine Cup 2026 at FJWU Rawalpindi",
            "Expert sessions by Ali Mumtaz on Imagine Cup preparation",
            "GitHub Copilot workshop by Hamza Khattak, MVP",
            "Live MCP demo by Arsalan Khattak from Bryntum",
            "Collaboration with FJWU team led by Rushdah Adnan"
        ]
    },
    {
        id: 8,
        title: "E-Mustaqbil Conference",
        institution: {
            name: "IQBAL AUDITORIUM FAISAL MOSQUE",
            location: "Islamabad, Pakistan",
            shortName: "IAFM"
        },
        role: {
            title: "Chief Organizer"
        },
        description: "Organized a memorable conference at Allama Iqbal Auditorium in collaboration with The Computer Science Society (CSS) and Connected Pakistan, featuring inspiring talks and panel discussions.",
        longDescription: `A Memorable Day at the Allama Iqbal Auditorium! 🎉

Yesterday, I had the honor of attending an amazing conference at the Allama Iqbal Auditorium, Old Campus, International Islamic University, Islamabad as the Chief organizer. This remarkable event was organized by the The Computer Science Society (CSS) Science Society in collaboration with Connected Pakistan Pakistan

Our event began with an inspiring talk from Dr Hafiz Ghufran Advisor for Student Affairs, who shared valuable insights on the principles of life. His words set the tone for an enriching and thoughtful conference. 💡🎤

Next, we were graced by the presence of our respected HOD Muhammad Nadeem, who has been an inspiration for all of us. His engaging style truly flourished the floor with glory! 🌟

After that Hamza Khattak my beloved brother, supporter, and the Ex-President of the The Computer Science Society (CSS) gave a well-explained, impactful introduction to the CSS. This was further enhanced by Dr.Muhammad Zaheer Aziz motivating video message, which truly boosted the introduction and history of CSS. 🎥✨

Following that, we had an exciting lineup of speakers from Connected Pakistan Pakistan co-ordinated by Khyam Javed and starting with Ammar Jamshed (MSc DS) who truly inspired me in the field of Machine Learning and AI. One of his statements really resonated with me: "Whatever you do never goes to waste. Just like the food we eat—though some may remain unused, it still provides us with energy."💡

Next, we were joined by Ismail Blogger, a well-respected blogger who has made a significant name for himself in the tech industry, known to all of us.

The lineup of speakers from Connected Pakistan concluded with valuable insights from Yasir Sharar and Saf Khan Khattak, followed by an incredible presentation by Khizar Javed, who shared his perspective on cybersecurity.

Right after that, we had a panel discussion featuring the esteemed members of International Islamic University, Islamabad, including Ahmad Anis, Kashif Mehmood Mehmood, Muhammad Saim Talha Malik, and Danial Tariq moderated by Muhammad Abdullah Haroon They shared valuable insights and experiences in technology, providing us with key takeaways from their journeys.

I want to give a huge shoutout to Sir Imran Saeed for his incredible efforts in organizing this event. I truly appreciate him we are nothing without his guidance and support. A big thank you as well to all the members of the The Computer Science Society (CSS) Science Society (CSS) for their hard work in making this event a success!`,
        date: {
            full: "November 2025",
            year: "2025",
            season: "Fall"
        },
        image: eMustaqbil1,
        images: [
            {
                src: eMustaqbil1,
                alt: "E-Mustaqbil Conference Opening",
                caption: "Conference at Allama Iqbal Auditorium, IIUI"
            },
            {
                src: eMustaqbil2,
                alt: "Inspiring Keynote Session",
                caption: "Dr Hafiz Ghufran sharing insights on life principles"
            },
            {
                src: eMustaqbil3,
                alt: "Connected Pakistan Speakers",
                caption: "Ammar Jamshed presenting on Machine Learning and AI"
            },
            {
                src: eMustaqbil4,
                alt: "Panel Discussion",
                caption: "IIUI faculty and alumni panel discussion"
            }
        ],
        topics: [
            {
                name: "Machine Learning & AI",
                icon: "cpu",
                description: "Insights from Ammar Jamshed on ML and AI applications"
            },
            {
                name: "Cybersecurity",
                icon: "shield",
                description: "Khizar Javed's perspective on cybersecurity"
            },
            {
                name: "Tech Industry Insights",
                icon: "briefcase",
                description: "Professional experiences and career guidance"
            },
            {
                name: "Life Principles",
                icon: "heart",
                description: "Dr Hafiz Ghufran's inspiring talk on life values"
            }
        ],
        highlights: [
            "Chief Organizer role at IIUI's Allama Iqbal Auditorium",
            "Collaboration between CSS Society and Connected Pakistan",
            "Inspiring speakers including Ammar Jamshed and Ismail Blogger",
            "Faculty panel discussion with IIUI members",
            "Special recognition to Sir Imran Saeed for event coordination"
        ]
    }
];