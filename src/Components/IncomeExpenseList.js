import React, {useContext} from 'react';
import StateContext from '../StateContext';
import { makeStyles } from '@material-ui/core/styles';
import Transaction from './Transaction';
import {Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
    
      //backgroundColor: theme.palette.background.paper,
    },
  }));
  
function IncomeExpenseList(props) {
    //let listStyle;
    const { allTransactions }  = useContext(StateContext);
    //const classes = useStyles();

    return (
        <div style={{margin:'30px 0'}}>
             <Typography variant="h4">History</Typography>
            {/* <List variant="filled" component="nav">
           {allTransactions.length > 0 ? allTransactions.map((item, i) => (
            <ListItem dense button key={i} style={listStyle}>
            <ListItemText>{item.description}&nbsp;&nbsp;&nbsp;&nbsp;Rs:+{item.value}</ListItemText>
            <DeleteIcon edge="end"  />
            </ListItem>)) : null}
            </List> */}
            {allTransactions.length > 0 ? allTransactions.map((trans)=>(
            <Transaction key={trans.id} transac = {trans} />)) : null
        }
        </div>
    );
}

export default IncomeExpenseList;