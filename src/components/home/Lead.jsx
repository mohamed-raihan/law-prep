import LeadCard from './LeadCard'

const cards = [
  {
    id: 1,
    title: 'Top-Tier NLU Legal Mentors',
    paragraph:
      'Our faculty consists of alumni from top NLUs like NLSIU, NALSAR, and WBNUJS who have cracked these exams themselves, providing professional insights into evolving exam patterns and legal reasoning.',
    image: '/1.png',
    expandedContent: [
      'The NLU Edge: Our faculty consists of alumni from top NLUs like NLSIU, NALSAR, and WBNUJS who have cracked these exams themselves',
      'Expert Pedagogy: Beyond just lectures, our legal experts provide professional insights into evolving exam patterns and legal reasoning',
      'Strategic Roadmaps: Get personalized strategies for time management and section-wise attempts directly from those who have mastered the journey',
      'Interactive Digital Sessions: High-definition live classes where you can interact directly with mentors in real-time'
    ]
  },
  {
    id: 2,
    title: '100+ All India Mock Tests',
    paragraph:
      'Mocks designed to mirror the exact difficulty, interface, and time pressure of CLAT, AILET, and other major exams, allowing you to compete with thousands of aspirants across India to understand your real-time standing and percentile.',
    image: '/2.png',
    expandedContent: [
      'Real Exam Simulation: Mocks designed to mirror the exact difficulty, interface, and time pressure of CLAT, AILET, and other major exams',
      'National Benchmarking: Compete with thousands of aspirants across India to understand your real-time standing and percentile',
      'Video Solutions: Every mock is followed by detailed video explanations by experts to clarify complex logic',
      'Dynamic Updating: Our mock bank is updated monthly to reflect the latest changes in entrance trends'
    ]
  },
  {
    id: 3,
    title: 'Topic-Wise Practice & Sectional Tests',
    paragraph:
      'Practice thousands of questions mapped to specific topics—from Legal Maxims to Quantitative Techniques. Use sectional tests to bridge the gap between concept learning and full-length mock stamina.',
    image: '/3.png',
    expandedContent: [
      'Granular Focus: Practice thousands of questions mapped to specific topics—from Legal Maxims to Quantitative Techniques',
      'Skill-Building: Use sectional tests to bridge the gap between concept learning and full-length mock stamina',
      'Adaptive Difficulty: Practice sets that evolve in difficulty as you improve, ensuring consistent growth',
      'Immediate Feedback: Instant results and correct explanations provided the moment you submit a practice set'
    ]
  },
  {
    id: 4,
    title: 'Performance Review & Analysis',
    paragraph:
      'Detailed analytics tracking your accuracy, speed, and time-spent per question. Visual charts highlight your strongest and weakest areas across the syllabus with automated recommendations on which topics to revisit.',
    image: '/4.png',
    expandedContent: [
      'AI-Backed Insights: Detailed analytics tracking your accuracy, speed, and time-spent per question',
      'Gap Identification: Visual charts highlighting your strongest and weakest areas across the syllabus',
      'Improvement Roadmap: Automated recommendations on which topics to revisit based on your mock performance',
      'Progress Tracking: Historical data logs to monitor your growth from the first day of prep to the final exam'
    ]
  },
  {
    id: 5,
    title: 'Topic-Focused Learning & Practice',
    paragraph:
      'Digital study materials and legal reasoning workbooks designed around the latest NLU entrance patterns. Step-by-step learning modules break down complex topics into digestible, easy-to-understand segments.',
    image: '/5.png',
    expandedContent: [
      'Curated Workbooks: Digital study materials and legal reasoning workbooks designed around the latest NLU entrance patterns',
      'Concept Clarity: Step-by-step learning modules that break down "scary" topics into digestible, easy-to-understand segments',
      'One-Stop Resource: All your notes, explanations, and revision materials organized in a single, easy-to-access online dashboard',
      'Focused Practice: Targeted question banks for every lesson to ensure mastery before moving to the next level'
    ]
  },
  {
    id: 6,
    title: 'Mentor Guidance & Doubt Support',
    paragraph:
      'Post your queries anytime on our portal and get resolutions from expert faculty within hours. Regular weekly sessions dedicated entirely to solving student queries and discussing tricky concepts.',
    image: '/6.png',
    expandedContent: [
      '24/7 Digital Doubt Room: Post your queries anytime on our portal and get resolutions from expert faculty within hours',
      'Live Doubt-Clearing Sessions: Regular weekly sessions dedicated entirely to solving student queries and discussing tricky concepts',
      'One-on-One Mentorship: Book virtual slots with NLU graduates for personalized counseling and motivation',
      'Peer Learning Community: Access to an exclusive online group of serious aspirants for collaborative learning and support'
    ]
  }
]

export default function Lead() {
  return (
    <section className="my-4 bg-white rounded-[20px] md:rounded-[28px] p-6 md:p-8 lg:p-10">
      {/* Top Section with Title and Illustration */}
      <div className="mb-8 md:mb-10 lg:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4 md:mb-6">
          Where Preparation meets Purpose
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-black max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed">
          Guided by mentors from top law schools, our strategically designed programs combine concept clarity, exam-focused practice, and performance analysis to help serious law aspirants prepare smarter and reach top law colleges.
        </p>
        <div className="flex justify-center items-center">
          <img 
            src="/coursePrep.svg" 
            alt="Graduation celebration illustration" 
            className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
          />
        </div>
      </div>

      {/* Header */}
      <div className="mb-6 md:mb-8 lg:mb-10">
        <span className="inline-block px-3 py-1.5 md:px-4 bg-[#F4F2F0] rounded-full text-xs md:text-sm text-[#666666] font-medium mb-3 md:mb-4">
          Our Course Details
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-black">
          Everything You Need to Know <br /> About Our Course
        </h2>
      </div>

      {/* Cards Grid */}
      {/* Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {cards.map((card) => (
    <LeadCard
      key={card.id}
      title={card.title}
      paragraph={card.paragraph}
      image={card.image}
      expandedContent={card.expandedContent}
      className="h-[450px]"
    />
  ))}
</div>
    </section>
  )
}

