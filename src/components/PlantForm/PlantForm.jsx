import React, { useState }from 'react';
import { useDispatch } from 'react-redux';

const PlantForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newPlant, setPlant] = useState({id: 4, name: '', kingdom: '', clade: '', order: '', family: '', subfamily: '', genus: '' });

    const handleNameChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, name: event.target.value})
    }
    const handleKingdomChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, kingdom: event.target.value})
    }
    const handleCladeChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, clade: event.target.value})
    }
    const handleOrderChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, order: event.target.value})
    }
    const handleFamilyChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, family: event.target.value})
    }
    const handleSubfamilyChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, subfamily: event.target.value})
    }
    const handleGenusChange = (event) => {
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant({...newPlant, genus: event.target.value})
    }

    const addNewPlant = event => {
        event.preventDefault();
        dispatch({ type: 'NEW_PLANT', payload: newPlant });
        //updates the next plant to have a new id
        setPlant({id:newPlant.id + 1, name: '', kingdom: '', clade: '', order: '', family: '', subfamily: '', genus: ''});

    }
    return (
        <div>
            <h3>This is the form</h3>
            <pre>{JSON.stringify(newPlant)}</pre>
            <form onSubmit={addNewPlant}>
                <input type='text' placeholder='name' value={newPlant.name} onChange={handleNameChange} /><br/>
                <input type='text' placeholder='kingdom' value={newPlant.kingdom} onChange={handleKingdomChange} /><br />
                <input type='text' placeholder='clade' value={newPlant.clade} onChange={handleCladeChange} /><br />
                <input type='text' placeholder='order' value={newPlant.order} onChange={handleOrderChange} /><br />
                <input type='text' placeholder='family' value={newPlant.family} onChange={handleFamilyChange} /><br />
                <input type='text' placeholder='subfamily' value={newPlant.subfamily} onChange={handleSubfamilyChange} /><br />
                <input type='text' placeholder='genus' value={newPlant.genus} onChange={handleGenusChange} /><br />

                <input type='submit' value='Add New Plant' />
            </form>
        </div>
    );
}


export default PlantForm;
