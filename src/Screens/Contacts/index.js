import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});
class App extends Component {
    render() {
  const { classes } = this.props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome </TableCell>
            <TableCell >Sobrenome </TableCell>
            <TableCell numeric>Telefone </TableCell>
            <TableCell> Rua </TableCell>
            <TableCell numeric> Número Residência/Edifício</TableCell>
            <TableCell> Bairro</TableCell>
            <TableCell> Cidade</TableCell>
            <TableCell> Estado</TableCell>
            <TableCell> País</TableCell>
            <TableCell> Complemento</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </Paper>
     );
   }
};

export default withStyles(styles) (App);


