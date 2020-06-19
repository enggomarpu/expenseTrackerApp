import React, {useContext} from 'react';
import StateContext from '../StateContext';
import {Card, CardContent, Typography} from '@material-ui/core';


function Balance(props) {
    const {allTransactions} = useContext(StateContext);
    let totalIncome, totalExpense;
    {totalIncome = allTransactions.length > 0 ? allTransactions
        .filter(item => item.type === 'inc')
        .reduce((acc, item) => (acc += parseInt(item.value)), 0)
        .toFixed(2): 0.0}
    {totalExpense = allTransactions.length > 0 ? allTransactions
        .filter(item => item.type === 'exp')
        .reduce((acc, item) => (acc += parseInt(item.value)), 0)
        .toFixed(2): 0.0}
    return (
        <div>
            <Typography style={{margin: '10px 0', textAlign:'center'}} variant="h4">Expense Tracker App</Typography>
            <Card style={{margin: '20px 0', textAlign:'center'}}>
       <CardContent style={{borderRight: '5px solid #3f51b5', borderLeft: '5px solid #3f51b5'}}> 
       <Typography variant="h6" color="textSecondary">Your Balance</Typography>
         <Typography variant="h4" color="textPrimary">
        $ {(totalIncome-totalExpense).toFixed(2)}
         </Typography>
       </CardContent>
     </Card>
        </div>
    );
}

export default Balance;