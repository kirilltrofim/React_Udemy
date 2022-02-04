import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = ({data, onDelete, onAdd, onToggleProp}) => {
    //Ходит по дате и возвращает id(key) и все остальные элементы
    const elem = data.map(i => {
        const {id, ...iProps} = i;
        return(
            <EmployeesListItem
                key={id}
                {...iProps}
                onDelete={() => onDelete(id)}
                onAdd={()=> onAdd(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return(
        <ul className='app-list list-group'>
            {elem}
        </ul>
    )
}

export default EmployeesList;