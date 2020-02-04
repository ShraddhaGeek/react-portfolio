import React from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import AdvancedGridList from './GridComponent/Grid';

const styles = theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            margin: '10%',
            marginTop: '12%',
        },
    },
});

const ProjectsPage = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography color="textSecondary" variant="h3">
                Projects
            </Typography>
            <AdvancedGridList />
        </div>
    )
}

export default withStyles(styles)(ProjectsPage);
