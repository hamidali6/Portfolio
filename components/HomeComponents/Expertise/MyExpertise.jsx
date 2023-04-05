import ExpertiseCard from "./ExpertiseCard"

const expertiseCard = [
    {
        id: 0,
        title: 'Python Development',
        desc: 'I am a skilled python developer with extensive 3 years experience in building robust applications for Data Science and AI. I possess a strong understanding of Python3, Data Science Libraries (Pandas, Numpy, Matplotlib, Seaborn, plotly), Machine Learning libraries (Scikit-Learn), Deep Learning libraries (TensorFlow, Keras), Image Processing (OpenCV, PIL), Nature Language Processing (NLTK, Stanza), Parallel Programming, Threading and database (MySQL Connector). With my expertise, I can deliver Machine Learning/Deep Learning and Data Science solutions tailored to meet the unique requirements of clients.',
    },
    {
        id: 1,
        title: 'Data Analysis and Data Visualization',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
    {
        id: 2,
        title: 'Machine Learning',
        desc: 'I am proficient in using design software such as Figma, Adobe XD, and Adobe Illustrator. Through participating in hackathons and freelance work, I have gained practical experience in UI/UX design and graphic design. Designing is my passion, and it has allowed me to continue to develop my creative skills and grow in the field.',
    },
    {
        id: 3,
        title: 'Deep Learning',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Computer Vision',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
    {
        id: 4,
        title: 'Nature Language Processing',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
    {
        id: 4,
        title: 'Time Series Analysis',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
    {
        id: 4,
        title: 'Professional Tensorflow Developer',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
]

const MyExpertise = () => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-white">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >

                {expertiseCard.map((data, key) => <ExpertiseCard key={key} data={data} />)}

            </div >
        </>
    )
}

export default MyExpertise