import React, { useState, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const ExpenseTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root} variant = "outlined">
      <CardHeader title="FINANZA" align = "center"/>
      <CardContent>
        <Typography align="center" variant="h5">Total Balance: Rs. {balance}</Typography>
        <Divider className={classes.divider} />
        <Typography align="center" variant="subtitle1">Enter your income or expense</Typography>
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ExpenseTracker;
