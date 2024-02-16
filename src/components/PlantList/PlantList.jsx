import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();

    const reduxState = useSelector(store => store.plantList);

    const getPlants=()=>{
        dispatch({type:'GET_PLANTS'});
    };

    useEffect(() => {
        // dispatch an action to request the plantList from the API
        getPlants();
    }, []); 

    return (
        <div>
            <h3>This is the plant list</h3>
            <pre>{JSON.stringify(reduxState)}</pre>
        </div>
    );
}

export default PlantList;
