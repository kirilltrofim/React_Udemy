import "./app-info.css";

const AppInfo = ({num, numIncrease}) => {
    return(
        <div className="app-info">
            <h1>Учет сотрудников в "Воруд"</h1>
            <h2>Общее число сотрудников:{num} </h2>
            <h2>Премию получат: {numIncrease}</h2>
        </div>
    )
}

export default AppInfo;