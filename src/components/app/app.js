import AppInfo from '../app-info/app-info';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import './app.css';


function App(){

    const data = [
        {name:'Кирилл', salary: 1200 , increase: true, id: 1},
        {name:'Наташа', salary: 2600, increase: false, id: 2},
        {name:'Алена', salary: 3500, increase: false, id: 3},
    ];

    return(
        <div className="app">
        <AppInfo/>
            <div className='search-panel'>
            <SearchPanel/>
                <AppFilter/>
            </div>
                <EmployersList data = {data}/>
                <EmployersAddForm/>
        </div>
    )
}

export default App;