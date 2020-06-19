import React, { useReducer } from 'react';

import DispatchContext from './DispatchContext';
import StateContext from './StateContext';
import {createMuiTheme, responsiveFontSizes, MuiThemeProvider, makeStyles} from "@material-ui/core";
import Balance from './Components/Balance';
import ExpenseIncome from './Components/ExpenseIncome';
import IncomeExpenseList from './Components/IncomeExpenseList';
import AddTransaction from './Components/AddTransaction';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#eee',
    paddingTop: '10px',
    
  },
 
}));
let theme = createMuiTheme({
  // overrides: {
  //   MuiCardContent: {
  //     root: {
  //       margin: "20px",
  //       backgroundColor: 'aqua',
  //       padding: "20px"
  //     }
  //   }
  // }
});
theme = responsiveFontSizes(theme);


const initialTrasanctions = {
    name: 'helloword',
    allTransactions: [{id: 1, description: 'Car', type: 'exp', value: 1000}, 
                        {id: 2, description: 'Salary', type: 'exp', value: 6000},
                        {id: 3, description: 'Salary', type: 'inc', value: 6000}],
}

export const appReducer = (state, action) => {
  //let tranType;
  switch(action.type) {

    case 'DELETE':
      
      return {
        // tranType = action.tranType === 'exp' ? state.expenses : state.incomes,
        ...state,
        allTransactions: state.allTransactions.filter(item => item.id !== action.payload) 
      }
    case 'ADD_TRANSACTION':
      return {
         ...state,
        allTransactions: [action.payload, ...state.allTransactions]
      //expenses: [{id: 3, description: 'Salaryss', value: 6000}, ...state.expenses]
       }
    default:
      return 'hello from default';
  }
  //console.log('reducer called');
}

function App(props) {
   const [state, dispatch] = useReducer( appReducer, initialTrasanctions );
   const classes = useStyles();

   function DeleteTran(id){
    const stron = dispatch({type: 'DELETE', payload: id});
    console.log('case delelted', stron);
  }

  function addTran(payload){
    const stron = dispatch({type: 'ADD_TRANSACTION', payload: payload});
    console.log('case delelted', stron);
  }
  return (
    <MuiThemeProvider theme={theme}>
      <StateContext.Provider value={state}>      
        <DispatchContext.Provider value={{DeleteTran, addTran}}>
          <Container maxWidth="xs" className={classes.root}>
          <Balance />
          <ExpenseIncome />
          <IncomeExpenseList />
          <AddTransaction />
          </Container>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </MuiThemeProvider>
     
  );
}

export default App;
