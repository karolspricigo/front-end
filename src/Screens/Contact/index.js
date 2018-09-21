import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
//import red from '@material-ui/core/colors/red'


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  iconSmall: {
    fontSize: 40,
  },
  iconSend: {
      marginLeft: theme.spacing.unit,
  }
  
});


class App extends Component {
  render() {
      const { classes } = this.props;
      
    return (
            <div>
      <Grid item xs={6}>
 <TextField
          id="standard-search"
          label="Nome"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        <TextField
          id="standard-search"
          label="Sobrenome"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        </Grid>
      <Grid item xs={6}>
 <TextField
          id="standard-search"
          label="Telefone"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        <TextField
          id="standard-search"
          label="Rua"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        </Grid>
        <Grid item xs={6}>
 <TextField
          id="standard-search"
          label="Número Residência/Edifício"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        <TextField
          id="standard-search"
          label="Bairro"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        </Grid>
        <Grid item xs={6}>
         <TextField
          id="standard-search"
          label="Cidade"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        <TextField
          id="standard-search"
          label="Estado"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        </Grid>
        <Grid item xs={6}>
         <TextField
          id="standard-search"
          label="País"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        <TextField
          id="standard-search"
          label="Complemento"
          type="search"
          className={classes.textField}
          margin="normal"
        />  
        </Grid>
         <Button variant="contained" color="primary" size= "large" className={classes.button}>
        Enviar
        <SendIcon   className={classes.iconSend}  />
        </Button>
    </div>
    );
  }
};

export default withStyles(styles)(App);


