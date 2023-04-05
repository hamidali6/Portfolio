import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";

const eduCards = [
    {
        id: 0,
        title: 'University of Engineering and Technology, Peshawar',
        degree: 'MS, Computer Science',
        detail: "Master's Degree in Computer Scince from UET Peshawar.",
        cgpa: '3.85/4.0',
        Thesis: 'In Progress working on Natural language Processing',
        year: '2020-Present'
    },
    {
        id: 0,
        title: 'University of Engineering and Technology, Peshawar',
        degree: 'BS, Computer Science',
        detail: "Bachelor's Degree in Computer Scince from UET Peshawar.",
        cgpa: '3.64/4.0',
        Theis: 'Web Based TestBed for Evaluation of Trading Algorithm(s)',
        year: '2015-2019'
    },    
]

const expCards = [
    {
        id: 0,
        title: 'Machine Learning Engineer',
        role: 'JMM Technologies',
        url: 'https://spatay.com/',
        desc: 'Lorem ipusm sfke sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '02/2023 - Present',
        location: 'Peshawar, Pakistan'
    },
    {
        id: 1,
        title: 'Research Assistant (AI)',
        role: 'National Center for Artificial Intelligence',
        url: 'https://b2c.otawix.com/',
        desc: 'Lorem ipusm sfke sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '12/2021 - 12/2022',
        location: 'Peshawar, Pakistan'
    },
    {
        id: 1,
        title: 'Machine Learning Engineer',
        role: 'EncoderBytes',
        url: 'https://spatay.com/',
        desc: 'Lorem ipusm sfke sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '07/2020 - 11/2021',
        location: 'Peshawar, Pakistan'
    },
    {
        id: 1,
        title: 'Research Assitant',
        role: 'National Center for Big Data and Cloud Computing-NCBC',
        url: 'https://spatay.com/',
        desc: 'Lorem ipusm sfke sfdea kwaa contan safe  eka earere fsatita kakwig  faa eie sfiioaap faira',
        year: '09/2019 - 02/2020',
        location: 'Peshawar, Pakistan'
    },
]
function background() {
    return (
        <BannerLayout>
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-yellow-600 px-4 pb-2 pt-10">
                <div className="order-2 md:order-1">
                    <div className="mt-10 md:mt-0 text-xl text-white font-semibold">Education</div>
                    {
                        eduCards.map((data, key) =>
                            <Edu_Card key={key} data={data} />
                        )
                    }

                </div>
                <div className="order-1 md:order-2">
                    <div className="md:ml-12">
                        <div className="md:pt-0 pt-4 text-xl text-white font-semibold">Experience</div>

                        {
                            expCards.map((data, key) =>
                                <Exp_Card key={key} data={data} />
                            )
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default background;
