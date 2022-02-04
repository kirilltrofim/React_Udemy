import {Component} from "react";

import AppInfo from '../app-info/app-info';
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';



class App extends Component{
    constructor(props) {
        super(props);
        this.state= {
            data: [
                {name:'Кирилл', salary: 1200,increase: false, rise: true, id: 1},
                {name:'Наташа', salary: 2600,increase: false, rise: false, id: 2},
                {name:'Алена', salary: 3500,increase: false, rise: false, id: 3}
            ],
            term: ''
        }
        this.maxId = 4;
    }
    //elem каждый обьект по порядку
    //сравниваем elem.id(из this.state.data) с id который приходит в deleteItem
    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(elem => elem.id !== id)
            }
        })
    }

    //создание обьекта в массив
    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }

        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return{
                data: newArr
            }
        })

    }

    // onToggleIncrease = (id) =>{
        // this.setState(({data})=>{
        //     const index = data.findIndex(elem => elem.id === id)
        //
        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0,index), newItem, ...data.slice(index + 1)];
        //
        //     return{
        //         data: newArr
        //     }
        // })
    //      this.setState(({data})=>({
    //          data: data.map(item =>{
    //              if (item.id === id){
    //                  return{...item, increase: !item.increase}
    //              }
    //              return item;
    //          })
    //      }))
    // }
    //Меняет в обьексте элемент rise на противоположный
    // onToggleRise = (id) =>{
    //     this.setState(({data})=>({
    //         data: data.map(item =>{
    //             if (item.id === id){
    //                 return{...item, rise: !item.rise}
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) =>{
        this.setState(({data})=>({
            data: data.map(item =>{
                if (item.id === id){
                    return{...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0){ //Если ничего нет в поиске , то ничего не делаем
            return items;
        }
    }

    render() {
        const {data, term} = this.state;
        const num = this.state.data.length;
        const numIncrease = this.state.data.filter(item => item.increase).length;
        return(
            <div className="app">
                <AppInfo
                    num = {num}
                    numIncrease = {numIncrease}/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList
                    data = {this.state.data}
                    onDelete = {this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;