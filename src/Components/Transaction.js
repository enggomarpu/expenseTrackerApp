import React, { useContext } from 'react';
import { List, ListItem, ListItemText,  ListItemSecondaryAction, ListItemIcon,IconButton }  from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import DispatchContext from '../DispatchContext';

const useStyles = makeStyles((theme) => ({
    root: {
    
      //backgroundColor: theme.palette.background.paper,
    },
    listItems: { 
      width: '100%',
    backgroundColor: theme.palette.background.paper,
    }
  }));

let redBorder = {
    borderRight: '2px solid red', marginBottom: '5px', backgroundColor: 'white'
  }
  let greenBorder = {
    borderRight: '2px solid green', 
    marginBottom: '5px',
    backgroundColor: 'white',
    

  }  

const Transaction = ({transac}) => {

    const { DeleteTran } = useContext(DispatchContext);
    const classes = useStyles();

    const buttonDelClicked = (id) => {
        DeleteTran(id);
    }

    const listStyle = transac.type === 'exp' ? redBorder : greenBorder;
    const sign =   transac.type === 'exp'  ? '-' : '+';
    return(
            // <List>
            // <ListItem dense button divider={true} style={listStyle}>
            // <ListItemText>{transac.description}</ListItemText>
            // <ListItemText alignItems='center' divider>$&nbsp;{sign}&nbsp;{transac.value}</ListItemText>
            // <DeleteIcon edge="end" onClick = {()=>{buttonDelClicked(transac.id)}} />
            // </ListItem>
            // </List>
            <List className={classes.root}>
            <ListItem divider={true} dense style={listStyle} color="textPrimary">
              <ListItemIcon >
                <ListItemText id="switch-list-label-wifi" primary={transac.description}
                style={{color: '#000', fontWeight: 'bold'}}/>
              </ListItemIcon>
              <ListItemText id="switch-list-label-wifi" primary={`${sign} ${transac.value.toFixed(2)} USD`} />
              <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon onClick = {()=>{buttonDelClicked(transac.id)}}  />
              </IconButton>
              </ListItemSecondaryAction>
            </ListItem>  
          </List>




    );
}

export default Transaction;