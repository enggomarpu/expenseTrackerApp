import React, { useContext, useState } from 'react';
//import ReactDOM from 'react-dom';
import DispatchContext from '../DispatchContext';
import {Typography, FormControl, InputLabel, MenuItem, TextField, Select, Button} from '@material-ui/core';




function AddTransaction(props) {
    
    const [butype, setType] = useState('inc');
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();
    const  {addTran}  = useContext(DispatchContext);
   
    
    // function buttonClicked(){
    //     helloWorld();
    //     // const strin = helloWorld({type: 'DELETE'});
    //     // console.log(strin);


    // }
        
            const handleSubmit = (e) => {
                e.preventDefault();
                //console.log(description);
               let newItem;
            if( description.length > 0  && amount > 0 ){  
                if (butype === "exp") {
                    newItem = {id: new Date().getTime(), description: description, 
                    type: butype, value: amount};
                    addTran(newItem);
                } else if (butype === "inc") {
                        newItem = {id: new Date().getTime(), description: description, 
                        type: butype, value: amount};
                        addTran(newItem)
                }
                console.log('form input value', e.target.elements.description.value);
                //e.target.description.focus()
                setDescription('');
                setAmount(0.0);
                e.target.description.focus();
            }
            e.target.description.focus();
            }
    return( 
        <div>
             <Typography variant="h4">Add New Transaction</Typography>
       <form onSubmit={handleSubmit}>

         <TextField variant="outlined" name="description" label="Add Description" 
            margin="normal" fullWidth onChange={(e) => setDescription(e.target.value)} 
            autoComplete="off" value={description} />

        <div style={{marginTop: '10px'}}>
        <FormControl variant="outlined" style={{width: '30%'}}>
          <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"
              value={butype} label="Type" onChange={(e) => setType(e.target.value)}>
              <MenuItem value="inc">INC</MenuItem>
              <MenuItem value="exp">EXP</MenuItem>         
            </Select>    
        </FormControl>
                    
      <TextField style={{minWidth:'65%', marginLeft: '5%'}} variant="outlined" 
            onChange={(e) => setAmount(e.target.value)} name="amount"  label="Enter Amount" 
            autoComplete="off" type="number" value={amount} />
        </div>
      <Button type="submit" style={{margin: '20px 0'}} fullWidth variant="contained" 
            color="primary">Add Transaction</Button>    
          
        </form> 
        </div>
    );
}

export default AddTransaction;