import Badge from "../Badge"

const Tools = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-white text-xs font-bold'>Tools and Libraries</span>
                <div className="flex flex-wrap gap-2">
                    <Badge title={"Jupyter Notebook"} />
                    <Badge title={"Pycharm"} />
                    <Badge title={"Google Colab"} />
                    <Badge title={"Netbeans"} />
                    <Badge title={"Tensorflow"} />
                    <Badge title={"Keras"} />
                    <Badge title={"Scikit-Learn"} />
                    <Badge title={"OpenCV"} />
                    <Badge title={"PIL"} />
                    <Badge title={"NLTK"} />
                    <Badge title={"Pandas"} />
                    <Badge title={"NumPy"} />
                    <Badge title={"Matplotlib"} />
                    <Badge title={"Seaborn"} />
                    <Badge title={"Plotly"} />
                    <Badge title={"LaTeX"} />
                </div>
            </div>

        </div>
    )
}

export default Tools