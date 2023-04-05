import LinearBar from "./LinearBar"

const Skills = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-white text-xs font-bold'>Skills and Competencies</span>
                <div className="flex flex-col space-y-4">
                    <LinearBar title='Python' percent='96%' />
                    <LinearBar title='Machine Learning' percent='90%' />
                    <LinearBar title="Deep Learning" percent='90%' />
                    <LinearBar title='Data Science' percent='80%' />
                    <LinearBar title='Computer Vision' percent='85%' />
                    <LinearBar title='Natural Language Processing' percent='70%' />
                    

                </div>
            </div>

        </div>
    )
}

export default Skills