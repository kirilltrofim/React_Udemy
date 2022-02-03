import EmployersListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data}) => {

    const elem = data.map(i => {
        const {id, ...iProps} = i;
        return(
            <EmployersListItem key={id} {...iProps}/>
        )
    })

    return(
        <ul className='app-list list-group'>
            {elem}
        </ul>
    )
}

export default EmployersList;