import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';


function PlantList() {
    const dispatch = useDispatch();

    const plantList = useSelector(store => store.plantList);

    const getPlants=()=>{
        dispatch({type:'GET_PLANTS'});
    };

    const deletePlant=(plant)=>{
        dispatch({type: 'DELETE_PLANT', payload: plant});
    };

    useEffect(() => {
        // dispatch an action to request the plantList from the API
        getPlants();
    }, []); 

    return (
        <div>
            <h3>This is the plant list</h3>
            <ul>
                {plantList.map((plant)=>{
                    return(
                        <li key={plant.id}>name: {plant.name} <button onClick={(event)=>deletePlant(plant.id)}>DELETE</button></li>
                    )
                })}
            </ul>
        </div>
    );
}

export default PlantList;
