// Career & Education Advisor Application JavaScript

// Application Data
const appData = {
  "aptitudeQuestions": [
    {"id": 1, "question": "I prefer working with numbers and calculations", "type": "interest", "category": "quantitative", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 2, "question": "I enjoy reading and analyzing literature", "type": "interest", "category": "linguistic", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 3, "question": "I like conducting experiments and research", "type": "interest", "category": "scientific", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 4, "question": "I prefer working in teams rather than alone", "type": "personality", "category": "social", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 5, "question": "Job security is more important than high salary", "type": "values", "category": "stability", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 6, "question": "I enjoy solving complex logical problems", "type": "ability", "category": "analytical", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 7, "question": "I am interested in understanding how society and economy work", "type": "interest", "category": "social_science", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 8, "question": "I prefer practical hands-on work over theoretical study", "type": "learning", "category": "practical", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 9, "question": "I am comfortable with public speaking and presentations", "type": "personality", "category": "communication", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 10, "question": "I prefer jobs that allow creative expression", "type": "values", "category": "creativity", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 11, "question": "I am interested in technology and computers", "type": "interest", "category": "technology", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 12, "question": "I would like to work in government service", "type": "values", "category": "public_service", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 13, "question": "I enjoy managing finances and budgets", "type": "interest", "category": "financial", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 14, "question": "I am detail-oriented and methodical in my work", "type": "personality", "category": "systematic", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 15, "question": "I prefer flexible work hours over fixed schedules", "type": "values", "category": "flexibility", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 16, "question": "I am interested in understanding human behavior and psychology", "type": "interest", "category": "psychology", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 17, "question": "I enjoy writing and communicating ideas", "type": "interest", "category": "communication", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 18, "question": "I am interested in business and entrepreneurship", "type": "interest", "category": "business", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 19, "question": "I prefer jobs with clear procedures and guidelines", "type": "personality", "category": "structured", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 20, "question": "Making a positive social impact is important to me", "type": "values", "category": "social_impact", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 21, "question": "I am comfortable taking calculated risks", "type": "personality", "category": "risk_tolerance", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 22, "question": "I enjoy teaching and explaining concepts to others", "type": "interest", "category": "teaching", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 23, "question": "I prefer working in offices rather than outdoors", "type": "values", "category": "environment", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 24, "question": "I am interested in history and cultural studies", "type": "interest", "category": "humanities", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]},
    {"id": 25, "question": "I would prefer a career with steady growth over quick advancement", "type": "values", "category": "career_growth", "options": ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"]}
  ],
  "careerPaths": [
    {
      "id": "engineering",
      "title": "Engineering & Technology",
      "stream": "Science",
      "degrees": ["B.Tech", "BE"],
      "description": "Design, develop, and maintain technological solutions for various industries",
      "jobRoles": ["Software Engineer", "Mechanical Engineer", "Civil Engineer", "Electronics Engineer"],
      "salaryRange": {"entry": "₹3.5-6 LPA", "mid": "₹8-15 LPA", "senior": "₹15-40 LPA"},
      "topRecruiters": ["TCS", "Infosys", "Wipro", "L&T", "BHEL"],
      "skills": ["Problem-solving", "Technical expertise", "Mathematics", "Innovation"],
      "entranceExams": ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE"],
      "compatibility": {"quantitative": 5, "analytical": 5, "technology": 5, "practical": 4}
    },
    {
      "id": "medicine",
      "title": "Medicine & Healthcare",
      "stream": "Science",
      "degrees": ["MBBS", "BDS", "BAMS", "BHMS"],
      "description": "Diagnose, treat, and care for patients' health and well-being",
      "jobRoles": ["Doctor", "Surgeon", "Specialist", "Medical Researcher"],
      "salaryRange": {"entry": "₹4-8 LPA", "mid": "₹10-25 LPA", "senior": "₹25-100 LPA"},
      "topRecruiters": ["AIIMS", "Government Hospitals", "Private Hospitals", "Healthcare Startups"],
      "skills": ["Biology", "Chemistry", "Empathy", "Decision-making", "Communication"],
      "entranceExams": ["NEET", "AIIMS", "JIPMER"],
      "compatibility": {"scientific": 5, "social_impact": 5, "systematic": 4, "communication": 4}
    },
    {
      "id": "chartered_accountancy",
      "title": "Chartered Accountancy (CA)",
      "stream": "Commerce",
      "degrees": ["B.Com + CA"],
      "description": "Manage financial accounts, taxation, auditing, and financial advisory services",
      "jobRoles": ["Chartered Accountant", "Tax Consultant", "Financial Advisor", "Audit Manager"],
      "salaryRange": {"entry": "₹7-10 LPA", "mid": "₹12-25 LPA", "senior": "₹30-100 LPA"},
      "topRecruiters": ["Big 4 Firms (Deloitte, PwC, KPMG, EY)", "Banks", "MNCs"],
      "skills": ["Accounting", "Taxation", "Financial Analysis", "Attention to Detail"],
      "entranceExams": ["CA Foundation", "CA Intermediate", "CA Final"],
      "compatibility": {"quantitative": 5, "financial": 5, "systematic": 5, "analytical": 4}
    },
    {
      "id": "civil_services",
      "title": "Civil Services (IAS/IPS/IFS)",
      "stream": "Arts",
      "degrees": ["BA", "Any Graduate Degree"],
      "description": "Serve the nation through administrative and policy-making roles in government",
      "jobRoles": ["IAS Officer", "IPS Officer", "IFS Officer", "State Civil Service"],
      "salaryRange": {"entry": "₹8-12 LPA", "mid": "₹15-25 LPA", "senior": "₹25-50 LPA"},
      "topRecruiters": ["Central Government", "State Governments", "Public Sector"],
      "skills": ["Leadership", "Communication", "Policy Understanding", "Social Awareness"],
      "entranceExams": ["UPSC CSE", "State PSC", "SSC CGL"],
      "compatibility": {"public_service": 5, "social_impact": 5, "communication": 4, "leadership": 5}
    },
    {
      "id": "banking_finance",
      "title": "Banking & Finance",
      "stream": "Commerce",
      "degrees": ["B.Com", "BBA", "Economics"],
      "description": "Manage financial services, banking operations, and investment advisory",
      "jobRoles": ["Bank PO", "Investment Banker", "Financial Analyst", "Risk Manager"],
      "salaryRange": {"entry": "₹4-8 LPA", "mid": "₹8-20 LPA", "senior": "₹20-60 LPA"},
      "topRecruiters": ["SBI", "HDFC", "ICICI", "Goldman Sachs", "JP Morgan"],
      "skills": ["Financial Analysis", "Risk Assessment", "Customer Service", "Mathematics"],
      "entranceExams": ["IBPS PO", "SBI PO", "RBI Grade B"],
      "compatibility": {"financial": 5, "quantitative": 4, "systematic": 4, "stability": 4}
    },
    {
      "id": "journalism_media",
      "title": "Journalism & Mass Communication",
      "stream": "Arts",
      "degrees": ["BA Journalism", "BJMC", "BA English"],
      "description": "Report news, create content, and communicate information to the public",
      "jobRoles": ["Journalist", "News Anchor", "Content Writer", "Media Producer"],
      "salaryRange": {"entry": "₹3-6 LPA", "mid": "₹6-15 LPA", "senior": "₹15-40 LPA"},
      "topRecruiters": ["News Channels", "Newspapers", "Digital Media", "PR Agencies"],
      "skills": ["Writing", "Communication", "Research", "Creativity"],
      "entranceExams": ["JMI Mass Communication", "IP University CET", "DUET"],
      "compatibility": {"communication": 5, "creativity": 5, "social": 4, "linguistic": 5}
    },
    {
      "id": "computer_science",
      "title": "Computer Science & IT",
      "stream": "Science",
      "degrees": ["BCA", "B.Tech CSE", "B.Sc Computer Science"],
      "description": "Develop software, manage IT systems, and create technological solutions",
      "jobRoles": ["Software Developer", "Data Scientist", "Cybersecurity Analyst", "IT Consultant"],
      "salaryRange": {"entry": "₹4-10 LPA", "mid": "₹10-25 LPA", "senior": "₹25-80 LPA"},
      "topRecruiters": ["Google", "Microsoft", "Amazon", "TCS", "Infosys"],
      "skills": ["Programming", "Logical Thinking", "Problem Solving", "Mathematics"],
      "entranceExams": ["JEE Main", "BITSAT", "VITEEE", "COMEDK"],
      "compatibility": {"technology": 5, "analytical": 5, "quantitative": 4, "problem_solving": 5}
    },
    {
      "id": "teaching_education",
      "title": "Teaching & Education",
      "stream": "Arts/Science/Commerce",
      "degrees": ["B.Ed", "BA/BSc/BCom + B.Ed"],
      "description": "Educate and mentor students across various academic levels and subjects",
      "jobRoles": ["School Teacher", "College Professor", "Educational Counselor", "Curriculum Developer"],
      "salaryRange": {"entry": "₹3-6 LPA", "mid": "₹6-12 LPA", "senior": "₹12-25 LPA"},
      "topRecruiters": ["Government Schools", "Private Schools", "Colleges", "Educational Institutions"],
      "skills": ["Subject Knowledge", "Communication", "Patience", "Leadership"],
      "entranceExams": ["B.Ed Entrance", "TET", "NET", "CTET"],
      "compatibility": {"teaching": 5, "communication": 5, "social_impact": 4, "structured": 4}
    }
  ],
  "colleges": [
    {
      "id": 1,
      "name": "St. Xavier's College, Kolkata",
      "location": "Kolkata, West Bengal",
      "type": "Government Aided",
      "courses": [{"name": "B.Sc Mathematics", "seats": 120, "cutoff": "85%"}, {"name": "B.Com Honours", "seats": 100, "cutoff": "88%"}, {"name": "BA English", "seats": 80, "cutoff": "82%"}],
      "facilities": ["Library", "Computer Lab", "Sports Complex", "Hostel"],
      "fees": "₹15,000-25,000 per year",
      "contact": "033-2269-5872"
    },
    {
      "id": 2,
      "name": "Government Girls General Degree College",
      "location": "Kolkata, West Bengal", 
      "type": "Government",
      "courses": [{"name": "BA Honours", "seats": 150, "cutoff": "75%"}, {"name": "B.Sc Honours", "seats": 100, "cutoff": "78%"}, {"name": "B.Com Honours", "seats": 50, "cutoff": "80%"}],
      "facilities": ["Library", "Laboratory", "Canteen", "Computer Center"],
      "fees": "₹5,000-10,000 per year",
      "contact": "033-2350-8974"
    },
    {
      "id": 3,
      "name": "Ramakrishna Mission Vidyamandira",
      "location": "Belur, West Bengal",
      "type": "Government Aided", 
      "courses": [{"name": "B.Sc Physics", "seats": 80, "cutoff": "88%"}, {"name": "BA Philosophy", "seats": 60, "cutoff": "75%"}, {"name": "B.Com", "seats": 120, "cutoff": "82%"}],
      "facilities": ["Library", "Research Labs", "Hostel", "Sports Facilities"],
      "fees": "₹12,000-20,000 per year",
      "contact": "033-2654-9999"
    },
    {
      "id": 4,
      "name": "Delhi University - Various Colleges",
      "location": "New Delhi",
      "type": "Central University",
      "courses": [{"name": "BA Programme", "seats": 500, "cutoff": "85%"}, {"name": "B.Sc Honours", "seats": 300, "cutoff": "90%"}, {"name": "B.Com Honours", "seats": 200, "cutoff": "92%"}],
      "facilities": ["Central Library", "Research Centers", "Sports Complex", "Hostels"],
      "fees": "₹10,000-15,000 per year",
      "contact": "011-2766-7049"
    },
    {
      "id": 5,
      "name": "Government Degree College, Bangalore",
      "location": "Bangalore, Karnataka",
      "type": "Government",
      "courses": [{"name": "BSc Computer Science", "seats": 100, "cutoff": "85%"}, {"name": "BCom", "seats": 150, "cutoff": "78%"}, {"name": "BA Economics", "seats": 80, "cutoff": "80%"}],
      "facilities": ["Computer Lab", "Library", "Science Labs", "Placement Cell"],
      "fees": "₹8,000-12,000 per year", 
      "contact": "080-2234-5678"
    }
  ],
  "timeline": [
    {
      "month": "January",
      "events": [
        {"date": "15", "event": "JEE Main Session 1 Applications Open", "category": "entrance"},
        {"date": "20", "event": "CUET UG Applications Begin", "category": "entrance"}
      ]
    },
    {
      "month": "February", 
      "events": [
        {"date": "15", "event": "JEE Main Session 1 Applications Close", "category": "entrance"},
        {"date": "28", "event": "NEET Applications Open", "category": "entrance"}
      ]
    },
    {
      "month": "April",
      "events": [
        {"date": "8-12", "event": "JEE Main Session 1 Exam", "category": "entrance"},
        {"date": "15", "event": "CUET UG Applications Close", "category": "entrance"},
        {"date": "20", "event": "State Board Results (Various States)", "category": "results"}
      ]
    },
    {
      "month": "May",
      "events": [
        {"date": "5", "event": "NEET Exam", "category": "entrance"},
        {"date": "15", "event": "CBSE Class 12 Results", "category": "results"},
        {"date": "20", "event": "DU UG Applications Open", "category": "admission"}
      ]
    },
    {
      "month": "June",
      "events": [
        {"date": "1-15", "event": "CUET UG Exam", "category": "entrance"},
        {"date": "18", "event": "West Bengal WBCAP Applications Open", "category": "admission"},
        {"date": "20", "event": "JEE Advanced (for IIT)", "category": "entrance"}
      ]
    },
    {
      "month": "July",
      "events": [
        {"date": "15", "event": "JEE Main Counseling Begins", "category": "counseling"},
        {"date": "20", "event": "NEET Results", "category": "results"},
        {"date": "30", "event": "WBCAP Applications Close", "category": "admission"}
      ]
    },
    {
      "month": "August",
      "events": [
        {"date": "10", "event": "NEET Counseling Begins", "category": "counseling"},
        {"date": "22", "event": "WBCAP Merit List Published", "category": "results"},
        {"date": "25", "event": "WBCAP Phase 1 Admissions", "category": "admission"}
      ]
    },
    {
      "month": "September",
      "events": [
        {"date": "1", "event": "College Classes Begin", "category": "academic"},
        {"date": "10-16", "event": "WBCAP Phase 2 (Mop Up)", "category": "admission"}
      ]
    }
  ],
  "scholarships": [
    {
      "name": "Reliance Foundation Undergraduate Scholarship",
      "amount": "Up to ₹2,00,000",
      "eligibility": "Household income under ₹15 lakh, Merit-based selection",
      "deadline": "October 4, 2025",
      "subjects": "All streams",
      "apply": "online"
    },
    {
      "name": "Swami Vivekananda Merit-cum-Means Scholarship",
      "amount": "₹1,000-3,000 per month",
      "eligibility": "West Bengal residents, Family income under ₹2.5 lakh, 60% marks",
      "deadline": "Various dates",
      "subjects": "UG/PG courses in West Bengal",
      "apply": "online"
    },
    {
      "name": "CBSE Merit Scholarship",
      "amount": "₹500-1,000 per month", 
      "eligibility": "Single girl child, 60% in Class X, continuing Class XI-XII",
      "deadline": "December 31",
      "subjects": "Class XI-XII CBSE students",
      "apply": "online"
    },
    {
      "name": "National Scholarship Portal (NSP)",
      "amount": "Varies by scheme",
      "eligibility": "Based on category, income, merit",
      "deadline": "Various dates",
      "subjects": "All streams and levels",
      "apply": "scholarships.gov.in"
    }
  ]
};

// Application State
let currentUser = null;
let currentQuestionIndex = 0;
let aptitudeAnswers = {};
let testResults = null;

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    console.log('Initializing Career Guide application...');
    
    try {
        // Check if user is logged in first
        const userData = getUserData();
        if (userData) {
            currentUser = userData;
            updateUIForLoggedInUser();
        }
        
        // Setup all event handlers
        setupNavigationHandlers();
        setupModalHandlers();
        setupAptitudeTest();
        
        // Render content sections
        renderCareerPaths();
        renderColleges();
        renderTimeline();
        renderScholarships();
        
        // Show initial section
        showSection('home');
        
        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Error initializing application:', error);
    }
}

// Navigation Functions
function setupNavigationHandlers() {
    console.log('Setting up navigation handlers...');
    
    try {
        // Main navigation links
        const navLinks = document.querySelectorAll('.nav__link');
        console.log('Found nav links:', navLinks.length);
        
        navLinks.forEach((link, index) => {
            console.log(`Setting up nav link ${index}:`, link.getAttribute('href'));
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const sectionId = link.getAttribute('href').substring(1);
                console.log('Navigation clicked:', sectionId);
                showSection(sectionId);
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
        
        // Header buttons with better error handling
        setupButton('registerBtn', () => {
            console.log('Register button clicked');
            showModal('registrationModal');
        });
        
        setupButton('loginBtn', () => {
            console.log('Login button clicked');
            if (currentUser) {
                showSection('dashboard');
                updateActiveNav('dashboard');
            } else {
                showModal('loginModal');
            }
        });
        
        // Hero buttons
        setupButton('getStartedBtn', () => {
            console.log('Get Started clicked, user:', currentUser);
            if (currentUser) {
                showSection('aptitude');
                updateActiveNav('aptitude');
            } else {
                showModal('registrationModal');
            }
        });
        
        setupButton('learnMoreBtn', () => {
            console.log('Learn More clicked');
            showSection('careers');
            updateActiveNav('careers');
        });
        
        console.log('Navigation handlers setup complete');
    } catch (error) {
        console.error('Error setting up navigation:', error);
    }
}

function setupButton(buttonId, handler) {
    const button = document.getElementById(buttonId);
    if (button) {
        console.log(`Setting up button: ${buttonId}`);
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handler();
        });
    } else {
        console.warn(`Button not found: ${buttonId}`);
    }
}

function updateActiveNav(sectionId) {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(l => l.classList.remove('active'));
    const targetLink = document.querySelector(`[href="#${sectionId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
}

function showSection(sectionId) {
    console.log('Showing section:', sectionId);
    
    try {
        const sections = document.querySelectorAll('.section');
        console.log('Found sections:', sections.length);
        
        sections.forEach(section => {
            section.classList.add('hidden');
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            setTimeout(() => targetSection.classList.add('active'), 50);
            console.log('Section', sectionId, 'is now visible');
            
            // Update dashboard when showing dashboard
            if (sectionId === 'dashboard' && currentUser) {
                updateDashboard();
            }
        } else {
            console.error('Section not found:', sectionId);
        }
    } catch (error) {
        console.error('Error showing section:', error);
    }
}

// Modal Functions
function setupModalHandlers() {
    console.log('Setting up modal handlers...');
    
    try {
        // Modal close buttons
        setupButton('closeModal', () => hideModal('registrationModal'));
        setupButton('closeLoginModal', () => hideModal('loginModal'));
        setupButton('switchToRegister', () => {
            hideModal('loginModal');
            showModal('registrationModal');
        });
        
        // Form submissions
        const registrationForm = document.getElementById('registrationForm');
        const loginForm = document.getElementById('loginForm');
        
        if (registrationForm) {
            registrationForm.addEventListener('submit', handleRegistration);
        }
        
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }
        
        // Modal background clicks to close
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        });
        
        console.log('Modal handlers setup complete');
    } catch (error) {
        console.error('Error setting up modals:', error);
    }
}

function showModal(modalId) {
    console.log('Showing modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    } else {
        console.error('Modal not found:', modalId);
    }
}

function hideModal(modalId) {
    console.log('Hiding modal:', modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function handleRegistration(e) {
    e.preventDefault();
    console.log('Handling registration...');
    
    try {
        const userData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            currentClass: document.getElementById('currentClass').value,
            stream: document.getElementById('stream').value,
            state: document.getElementById('state').value,
            profileComplete: 100
        };
        
        console.log('User data:', userData);
        
        // Save user data
        saveUserData(userData);
        currentUser = userData;
        
        hideModal('registrationModal');
        updateUIForLoggedInUser();
        showSection('dashboard');
        updateActiveNav('dashboard');
        
        // Clear form
        e.target.reset();
        
        console.log('Registration completed successfully');
    } catch (error) {
        console.error('Error in registration:', error);
        alert('Registration failed. Please try again.');
    }
}

function handleLogin(e) {
    e.preventDefault();
    console.log('Handling login...');
    
    try {
        const email = document.getElementById('loginEmail').value;
        
        // Simple login simulation
        const userData = getUserData();
        if (userData && userData.email === email) {
            currentUser = userData;
            hideModal('loginModal');
            updateUIForLoggedInUser();
            showSection('dashboard');
            updateActiveNav('dashboard');
            
            // Clear form
            e.target.reset();
            
            console.log('Login successful');
        } else {
            alert('User not found. Please register first.');
        }
    } catch (error) {
        console.error('Error in login:', error);
        alert('Login failed. Please try again.');
    }
}

function updateUIForLoggedInUser() {
    console.log('Updating UI for logged in user:', currentUser);
    
    try {
        const loginBtn = document.getElementById('loginBtn');
        const registerBtn = document.getElementById('registerBtn');
        
        if (loginBtn && currentUser) {
            loginBtn.textContent = currentUser.fullName;
            loginBtn.classList.remove('btn--primary');
            loginBtn.classList.add('btn--secondary');
        }
        
        if (registerBtn) {
            registerBtn.style.display = 'none';
        }
    } catch (error) {
        console.error('Error updating UI:', error);
    }
}

// Aptitude Test Functions
function setupAptitudeTest() {
    console.log('Setting up aptitude test...');
    
    try {
        setupButton('startTestBtn', startAptitudeTest);
        setupButton('prevBtn', previousQuestion);
        setupButton('nextBtn', nextQuestion);
        setupButton('exploreCareerBtn', () => {
            showSection('careers');
            updateActiveNav('careers');
        });
        
        console.log('Aptitude test setup complete');
    } catch (error) {
        console.error('Error setting up aptitude test:', error);
    }
}

function startAptitudeTest() {
    console.log('Starting aptitude test...');
    
    if (!currentUser) {
        showModal('registrationModal');
        return;
    }
    
    try {
        currentQuestionIndex = 0;
        aptitudeAnswers = {};
        
        document.getElementById('testStart').classList.add('hidden');
        document.getElementById('testQuestions').classList.remove('hidden');
        document.getElementById('testResults').classList.add('hidden');
        
        displayQuestion();
    } catch (error) {
        console.error('Error starting test:', error);
    }
}

function displayQuestion() {
    try {
        const question = appData.aptitudeQuestions[currentQuestionIndex];
        console.log('Displaying question:', currentQuestionIndex + 1, question.question);
        
        document.getElementById('questionText').textContent = question.question;
        document.getElementById('questionProgress').textContent = `Question ${currentQuestionIndex + 1} of ${appData.aptitudeQuestions.length}`;
        
        const progress = ((currentQuestionIndex + 1) / appData.aptitudeQuestions.length) * 100;
        document.getElementById('testProgress').style.width = `${progress}%`;
        
        const optionsContainer = document.getElementById('answerOptions');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'answer-option';
            optionDiv.textContent = option;
            optionDiv.addEventListener('click', () => selectAnswer(index));
            
            if (aptitudeAnswers[question.id] === index) {
                optionDiv.classList.add('selected');
            }
            
            optionsContainer.appendChild(optionDiv);
        });
        
        // Update button states
        document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
        document.getElementById('nextBtn').disabled = aptitudeAnswers[question.id] === undefined;
        
        if (currentQuestionIndex === appData.aptitudeQuestions.length - 1) {
            document.getElementById('nextBtn').textContent = 'Finish Test';
        } else {
            document.getElementById('nextBtn').textContent = 'Next';
        }
    } catch (error) {
        console.error('Error displaying question:', error);
    }
}

function selectAnswer(optionIndex) {
    try {
        const question = appData.aptitudeQuestions[currentQuestionIndex];
        aptitudeAnswers[question.id] = optionIndex;
        console.log('Answer selected:', optionIndex, 'for question', question.id);
        
        // Update UI
        const options = document.querySelectorAll('.answer-option');
        options.forEach(option => option.classList.remove('selected'));
        options[optionIndex].classList.add('selected');
        
        document.getElementById('nextBtn').disabled = false;
    } catch (error) {
        console.error('Error selecting answer:', error);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < appData.aptitudeQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        finishTest();
    }
}

function finishTest() {
    console.log('Finishing test...');
    try {
        calculateResults();
        displayResults();
        
        document.getElementById('testQuestions').classList.add('hidden');
        document.getElementById('testResults').classList.remove('hidden');
    } catch (error) {
        console.error('Error finishing test:', error);
    }
}

function calculateResults() {
    console.log('Calculating results...');
    const scores = {};
    
    appData.aptitudeQuestions.forEach(question => {
        const answer = aptitudeAnswers[question.id];
        const score = 5 - answer; // Reverse scoring (Strongly Agree = 5, Strongly Disagree = 1)
        
        if (!scores[question.category]) {
            scores[question.category] = 0;
        }
        scores[question.category] += score;
    });
    
    console.log('Category scores:', scores);
    
    // Match scores with career compatibilities
    const careerMatches = appData.careerPaths.map(career => {
        let totalMatch = 0;
        let compatibilityCount = 0;
        
        if (career.compatibility) {
            Object.keys(career.compatibility).forEach(trait => {
                if (scores[trait]) {
                    totalMatch += (scores[trait] / 25) * career.compatibility[trait]; // Max score per category is 25 (5 questions * 5 points)
                    compatibilityCount++;
                }
            });
        }
        
        return {
            ...career,
            matchScore: compatibilityCount > 0 ? totalMatch / compatibilityCount : 0
        };
    });
    
    testResults = careerMatches.sort((a, b) => b.matchScore - a.matchScore).slice(0, 5);
    console.log('Test results:', testResults);
}

function displayResults() {
    try {
        const resultsContainer = document.getElementById('resultsContent');
        resultsContainer.innerHTML = '';
        
        testResults.forEach((career, index) => {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'career-result';
            
            const percentage = Math.round(career.matchScore * 20); // Convert to percentage
            
            resultDiv.innerHTML = `
                <h4>${career.title}</h4>
                <p>${career.description}</p>
                <p><strong>Stream:</strong> ${career.stream}</p>
                <p><strong>Salary Range:</strong> Entry: ${career.salaryRange.entry}, Mid: ${career.salaryRange.mid}, Senior: ${career.salaryRange.senior}</p>
                <span class="compatibility-score">${percentage}% Match</span>
            `;
            
            resultsContainer.appendChild(resultDiv);
        });
    } catch (error) {
        console.error('Error displaying results:', error);
    }
}

// Career Paths Functions
function renderCareerPaths() {
    console.log('Rendering career paths...');
    try {
        const careersGrid = document.getElementById('careersGrid');
        if (!careersGrid) {
            console.warn('Career grid not found');
            return;
        }
        
        careersGrid.innerHTML = '';
        
        appData.careerPaths.forEach(career => {
            const careerCard = createCareerCard(career);
            careersGrid.appendChild(careerCard);
        });
        
        // Setup filter buttons
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const stream = e.target.dataset.stream;
                filterCareers(stream);
                
                filterBtns.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
        
        console.log('Career paths rendered successfully');
    } catch (error) {
        console.error('Error rendering careers:', error);
    }
}

function createCareerCard(career) {
    const card = document.createElement('div');
    card.className = 'career-card';
    
    card.innerHTML = `
        <div class="career-card__header">
            <h3 class="career-card__title">${career.title}</h3>
            <span class="career-card__stream">${career.stream}</span>
        </div>
        <div class="career-card__body">
            <p class="career-card__description">${career.description}</p>
            <div class="career-info">
                <div class="info-item">
                    <span class="info-label">Roles:</span>
                    <span class="info-value">${career.jobRoles.join(', ')}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Salary:</span>
                    <span class="info-value">Entry: ${career.salaryRange.entry}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Skills:</span>
                    <span class="info-value">${career.skills.join(', ')}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Exams:</span>
                    <span class="info-value">${career.entranceExams.join(', ')}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function filterCareers(stream) {
    const careerCards = document.querySelectorAll('.career-card');
    careerCards.forEach(card => {
        const cardStream = card.querySelector('.career-card__stream').textContent;
        if (stream === 'all' || cardStream === stream || cardStream.includes(stream)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Colleges Functions
function renderColleges() {
    console.log('Rendering colleges...');
    try {
        const collegesGrid = document.getElementById('collegesGrid');
        if (!collegesGrid) {
            console.warn('Colleges grid not found');
            return;
        }
        
        collegesGrid.innerHTML = '';
        
        appData.colleges.forEach(college => {
            const collegeCard = createCollegeCard(college);
            collegesGrid.appendChild(collegeCard);
        });
        
        setupCollegeFilters();
        console.log('Colleges rendered successfully');
    } catch (error) {
        console.error('Error rendering colleges:', error);
    }
}

function createCollegeCard(college) {
    const card = document.createElement('div');
    card.className = 'college-card';
    
    const coursesHTML = college.courses.map(course => `
        <div class="course-item">
            <span class="course-name">${course.name}</span>
            <span class="course-details">${course.seats} seats, ${course.cutoff} cutoff</span>
        </div>
    `).join('');
    
    const facilitiesHTML = college.facilities.map(facility => 
        `<span class="facility-tag">${facility}</span>`
    ).join('');
    
    card.innerHTML = `
        <div class="college-card__header">
            <h3 class="college-card__name">${college.name}</h3>
            <p class="college-card__location">${college.location}</p>
        </div>
        <div class="college-card__body">
            <div class="courses-list">
                <h4>Courses Available:</h4>
                ${coursesHTML}
            </div>
            <div class="college-facilities">
                ${facilitiesHTML}
            </div>
            <p><strong>Fees:</strong> ${college.fees}</p>
            <p><strong>Contact:</strong> ${college.contact}</p>
        </div>
    `;
    
    return card;
}

function setupCollegeFilters() {
    try {
        const searchInput = document.getElementById('collegeSearch');
        const locationFilter = document.getElementById('locationFilter');
        const courseFilter = document.getElementById('courseFilter');
        
        if (searchInput) {
            searchInput.addEventListener('input', filterColleges);
        }
        if (locationFilter) {
            locationFilter.addEventListener('change', filterColleges);
        }
        if (courseFilter) {
            courseFilter.addEventListener('change', filterColleges);
        }
    } catch (error) {
        console.error('Error setting up college filters:', error);
    }
}

function filterColleges() {
    try {
        const searchTerm = document.getElementById('collegeSearch').value.toLowerCase();
        const location = document.getElementById('locationFilter').value;
        const course = document.getElementById('courseFilter').value;
        
        const collegeCards = document.querySelectorAll('.college-card');
        collegeCards.forEach(card => {
            const collegeName = card.querySelector('.college-card__name').textContent.toLowerCase();
            const collegeLocation = card.querySelector('.college-card__location').textContent;
            const collegeCourses = card.querySelector('.college-card__body').textContent;
            
            const matchesSearch = collegeName.includes(searchTerm);
            const matchesLocation = !location || collegeLocation.includes(location);
            const matchesCourse = !course || collegeCourses.includes(course);
            
            if (matchesSearch && matchesLocation && matchesCourse) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    } catch (error) {
        console.error('Error filtering colleges:', error);
    }
}

// Timeline Functions
function renderTimeline() {
    console.log('Rendering timeline...');
    try {
        const timelineContainer = document.getElementById('timelineContainer');
        if (!timelineContainer) {
            console.warn('Timeline container not found');
            return;
        }
        
        timelineContainer.innerHTML = '';
        
        appData.timeline.forEach(month => {
            const monthDiv = document.createElement('div');
            monthDiv.className = 'timeline-month';
            
            const eventsHTML = month.events.map(event => `
                <div class="timeline-event">
                    <div class="event-date">${event.date}</div>
                    <div class="event-details">
                        <div class="event-title">${event.event}</div>
                        <span class="event-category">${event.category}</span>
                    </div>
                </div>
            `).join('');
            
            monthDiv.innerHTML = `
                <h3>${month.month}</h3>
                <div class="timeline-events">
                    ${eventsHTML}
                </div>
            `;
            
            timelineContainer.appendChild(monthDiv);
        });
        
        console.log('Timeline rendered successfully');
    } catch (error) {
        console.error('Error rendering timeline:', error);
    }
}

// Scholarships Functions
function renderScholarships() {
    console.log('Rendering scholarships...');
    try {
        const scholarshipsGrid = document.getElementById('scholarshipsGrid');
        if (!scholarshipsGrid) {
            console.warn('Scholarships grid not found');
            return;
        }
        
        scholarshipsGrid.innerHTML = '';
        
        appData.scholarships.forEach(scholarship => {
            const scholarshipCard = createScholarshipCard(scholarship);
            scholarshipsGrid.appendChild(scholarshipCard);
        });
        
        console.log('Scholarships rendered successfully');
    } catch (error) {
        console.error('Error rendering scholarships:', error);
    }
}

function createScholarshipCard(scholarship) {
    const card = document.createElement('div');
    card.className = 'scholarship-card';
    
    card.innerHTML = `
        <h3>${scholarship.name}</h3>
        <div class="scholarship-amount">${scholarship.amount}</div>
        <div class="scholarship-details">
            <p><strong>Eligibility:</strong> ${scholarship.eligibility}</p>
            <p><strong>Subjects:</strong> ${scholarship.subjects}</p>
        </div>
        <div class="scholarship-deadline">Deadline: ${scholarship.deadline}</div>
        <button class="btn btn--primary btn--sm">Learn More</button>
    `;
    
    return card;
}

// Dashboard Functions
function updateDashboard() {
    console.log('Updating dashboard...');
    try {
        updateProfileProgress();
        updateRecommendedCareers();
        updateSavedColleges();
        updateUpcomingDeadlines();
    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

function updateProfileProgress() {
    try {
        const progress = currentUser ? currentUser.profileComplete || 100 : 0;
        const progressElement = document.getElementById('profileProgress');
        const statusElement = document.getElementById('profileStatus');
        
        if (progressElement) {
            progressElement.style.width = `${progress}%`;
        }
        if (statusElement) {
            statusElement.textContent = 
                progress === 100 ? 'Profile Complete!' : 'Complete your profile to get better recommendations';
        }
    } catch (error) {
        console.error('Error updating profile progress:', error);
    }
}

function updateRecommendedCareers() {
    try {
        const container = document.getElementById('recommendedCareers');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (testResults && testResults.length > 0) {
            const top3 = testResults.slice(0, 3);
            top3.forEach(career => {
                const div = document.createElement('div');
                div.className = 'recommendation-item';
                div.innerHTML = `
                    <strong>${career.title}</strong>
                    <span>${Math.round(career.matchScore * 20)}% Match</span>
                `;
                container.appendChild(div);
            });
        } else {
            container.innerHTML = '<p>Take the aptitude test to get personalized recommendations</p>';
        }
    } catch (error) {
        console.error('Error updating recommended careers:', error);
    }
}

function updateSavedColleges() {
    try {
        const container = document.getElementById('savedColleges');
        if (container) {
            container.innerHTML = '<p>Save colleges you\'re interested in to see them here</p>';
        }
    } catch (error) {
        console.error('Error updating saved colleges:', error);
    }
}

function updateUpcomingDeadlines() {
    try {
        const container = document.getElementById('upcomingDeadlines');
        if (!container) return;
        
        container.innerHTML = '';
        
        // Get current month's events
        const currentMonth = new Date().toLocaleString('default', { month: 'long' });
        const monthData = appData.timeline.find(month => month.month === currentMonth);
        
        if (monthData && monthData.events.length > 0) {
            monthData.events.slice(0, 3).forEach(event => {
                const div = document.createElement('div');
                div.className = 'deadline-item';
                div.innerHTML = `
                    <strong>${event.event}</strong>
                    <span>${event.date} ${currentMonth}</span>
                `;
                container.appendChild(div);
            });
        } else {
            container.innerHTML = '<p>No upcoming deadlines this month</p>';
        }
    } catch (error) {
        console.error('Error updating upcoming deadlines:', error);
    }
}

// Utility Functions
function saveUserData(userData) {
    console.log('Saving user data:', userData);
    try {
        window.careerGuideUser = userData;
        console.log('User data saved successfully');
    } catch (e) {
        console.error('Unable to save user data:', e);
    }
}

function getUserData() {
    try {
        return window.careerGuideUser || null;
    } catch (e) {
        console.error('Unable to load user data:', e);
        return null;
    }
}

// Add global error handling
window.addEventListener('error', function(e) {
    console.error('Global error:', e.error);
});

console.log('Career Guide app.js loaded successfully');