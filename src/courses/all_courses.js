import javascript from '../components/assets/javascript.jpg'
import react from '../components/assets/react.jpg'
import data from '../components/assets/data.jpg'
import uiux from '../components/assets/uiux.jpg'
import cybersecurity from '../components/assets/cybersecurity.jpg'
import finance from '../components/assets/finance.jpg'
import machine from '../components/assets/machine.jpg'
import digital from '../components/assets/digital.jpg'

const all_courses = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: react,
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM-8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.'
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.'
        },
        // Additional weeks and topics...
      ]
    },
    // Additional course models...
    {
      id: 2,
      name: 'Advanced JavaScript Applications',
      instructor: 'Jane Smith',
      description: 'Explore advanced concepts and techniques in JavaScript for robust application development.',
      enrollmentStatus: 'Open',
      thumbnail: javascript,
      duration: '10 weeks',
      schedule: 'Mondays and Wednesdays, 7:00 PM-9:00 PM',
      location: 'Online',
      prerequisites: ['Intermediate JavaScript knowledge', 'HTML/CSS basics'],
      syllabus: [
        {
          week: 1,
          topic: 'Asynchronous Programming',
          content: 'Understanding asynchronous JavaScript using Promises and Async/Await.'
        },
        {
          week: 2,
          topic: 'Functional Programming Paradigm',
          content: 'Exploring functional programming concepts in JavaScript.'
        },
        // Additional weeks and topics...
      ]
    },
    {
        id: 3,
        name: 'Data Science Fundamentals',
        instructor: 'Emily Johnson',
        description: 'An introduction to key concepts in data science and practical applications.',
        enrollmentStatus: 'Open',
        thumbnail: data,
        duration: '12 weeks',
        schedule: 'Fridays, 5:00 PM-7:00 PM',
        location: 'Online',
        prerequisites: ['Basic statistics', 'Python programming basics'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Data Science',
            content: 'Overview of data science, its applications, and tools.'
          },
          {
            week: 2,
            topic: 'Data Wrangling',
            content: 'Data cleaning, manipulation, and preprocessing techniques.'
          },
          // Additional weeks and topics...
        ]
      },
      // Add more courses...
      {
        id: 4,
        name: 'UX/UI Design Essentials',
        instructor: 'Michael Brown',
        description: 'Learn the principles and practices of user experience (UX) and user interface (UI) design.',
        enrollmentStatus: 'Open',
        thumbnail: uiux,
        duration: '6 weeks',
        schedule: 'Saturdays, 10:00 AM-12:00 PM',
        location: 'Online',
        prerequisites: ['Basic design principles'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to UX/UI Design',
            content: 'Fundamental concepts, usability principles, and design thinking.'
          },
          {
            week: 2,
            topic: 'Wireframing and Prototyping',
            content: 'Creating wireframes and prototypes for user interfaces.'
          },
          
        ]
      },
     
      {
        id: 5,
        name: 'Cybersecurity Fundamentals',
        instructor: 'Alex Rodriguez',
        description: 'Explore the basics of cybersecurity, threat landscape, and defensive strategies.',
        enrollmentStatus: 'Open',
        thumbnail: cybersecurity,
        duration: '10 weeks',
        schedule: 'Wednesdays, 6:30 PM-8:30 PM',
        location: 'Online',
        prerequisites: ['Basic IT knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Cybersecurity',
            content: 'Overview of cybersecurity, threats, and security frameworks.'
          },
          {
            week: 2,
            topic: 'Network Security',
            content: 'Understanding network vulnerabilities and security measures.'
          },
          // Additional weeks and topics...
        ]
      },
      // Add more courses...
      {
        id: 6,
        name: 'Machine Learning Applications',
        instructor: 'Sophia Lee',
        description: 'Apply machine learning algorithms to real-world problems and datasets.',
        enrollmentStatus: 'Open',
        thumbnail: machine,
        duration: '14 weeks',
        schedule: 'Mondays and Fridays, 5:00 PM-7:00 PM',
        location: 'Online',
        prerequisites: ['Basic Python programming', 'Statistics'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Machine Learning',
            content: 'Basic concepts, algorithms, and applications of ML.'
          },
          {
            week: 2,
            topic: 'Supervised Learning',
            content: 'Regression and classification algorithms.'
          },
          
        ]
      },
      {
        id: 7,
        name: 'Digital Marketing Strategy',
        instructor: 'Sarah Thompson',
        description: 'Learn the fundamentals of digital marketing and strategies for online campaigns.',
        enrollmentStatus: 'Open',
        thumbnail: digital,
        duration: '6 weeks',
        schedule: 'Tuesdays and Thursdays, 4:00 PM-6:00 PM',
        location: 'Online',
        prerequisites: ['Basic marketing knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Introduction to Digital Marketing',
            content: 'Overview of digital marketing channels and tools.'
          },
          {
            week: 2,
            topic: 'SEO and Content Marketing',
            content: 'Search engine optimization and content strategies.'
          },
          // Additional weeks and topics...
        ]
      },
      // Add more courses...
      {
        id: 8,
        name: 'Financial Planning and Investment',
        instructor: 'David Miller',
        description: 'Understand personal finance, investment strategies, and wealth management.',
        enrollmentStatus: 'Open',
        thumbnail: finance,
        duration: '8 weeks',
        schedule: 'Mondays and Wednesdays, 6:00 PM-8:00 PM',
        location: 'Online',
        prerequisites: ['Basic financial knowledge'],
        syllabus: [
          {
            week: 1,
            topic: 'Fundamentals of Finance',
            content: 'Introduction to financial planning and budgeting.'
          },
          {
            week: 2,
            topic: 'Investment Strategies',
            content: 'Exploring different investment options and risk management.'
          },
          // Additional weeks and topics...
        ]
      },
  ];
  
  export default all_courses;