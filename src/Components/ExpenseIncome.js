import React, {useContext} from 'react';
import StateContext from '../StateContext';
import {Card, CardContent, Typography, Divider} from '@material-ui/core';

function ExpenseIncome(props) {
    //let accExpense, accIncome;
    const {allTransactions} = useContext(StateContext);
    return (
        <div>
            <Card style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
       <CardContent style={{flex: '1', textAlign: 'center', borderLeft:'5px solid green'}}> 
       <Typography variant="subtitle1" color="textSecondary">
             Total Income
           </Typography>
           <Typography variant="h5" color="textPrimary">
{/*                
          $ {allTransactions.length > 0 ? allTransactions.reduce((acc, curr) => {
                    return acc += parseInt(curr.value)}, 0): 0.0} */}

           $ {allTransactions.length > 0 ? allTransactions
            .filter(item => item.type === 'inc')
            .reduce((acc, item) => (acc += parseInt(item.value)), 0)
            .toFixed(2): 0.0}
 
          </Typography>
       </CardContent>
       <Divider orientation="vertical" flexItem/>
       <CardContent style={{flex: '1', textAlign: 'center', borderRight:'5px solid red'}}>
       <Typography variant="subtitle1" color="textSecondary">
             Total Expense
           </Typography>
           <Typography variant="h5" color="textPrimary">
                    {/* $ {allTransactions.length > 0 ? allTransactions.reduce((acc, curr) => {
                           return acc += parseInt(curr.value);      
                     }, 0): 0.0} */}

           $ {allTransactions.length > 0 ? allTransactions
            .filter(item => item.type === 'exp')
            .reduce((acc, item) => (acc += parseInt(item.value)), 0)
            .toFixed(2): 0.0}     
                  
           </Typography>
       </CardContent>
     </Card>
        </div>
    );
}

export default ExpenseIncome;