const ItemListContainer = ( {greeting} ) =>{
    return(
        <div>
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer

/*
import PropTypes from 'prop-types';

function ItemListContainer( {saludo, despedida} ) {

    return (
        <>
            <div>
                {saludo}
            </div>
            <div>
                    {despedida}
            </div>
        </>
        )
}

ItemListContainer.propTypes = {
    saludo: PropTypes.string.isRequired,
    despedida: PropTypes.string.isRequired
};

export default ItemListContainer;
*/