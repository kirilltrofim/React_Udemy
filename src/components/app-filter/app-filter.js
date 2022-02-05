import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name:'all', label: 'Все сотрудники'},
        {name:'rise', label: 'На повышение'},
        {name:'moreThen3000', label: 'З/П больше 3000 руб.'}
    ];

    const buttons = buttonsData.map(({name,label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return(
            <button
                type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return(
        <div className='btn-group'>
            {buttons}
            {/*<button*/}
            {/*    className='btn btn-light'*/}
            {/*    type='button'>*/}
            {/*        Все сотрудники*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className='btn btn-outline-light'*/}
            {/*    type='button'>*/}
            {/*    На повышение*/}
            {/*</button>*/}
            {/*<button*/}
            {/*    className='btn btn-outline-light'*/}
            {/*    type='button'>*/}
            {/*    З/П больше 3000 руб.*/}
            {/*</button>*/}
        </div>
    )
}

export default AppFilter;