import React from 'react'
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.down('sm')]: {
            margin: '10%',
            marginTop: '12%',
        },
    },
    heading: {
        marginBottom: '2%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3em',
            marginBottom: '5%',
        },
    },
    para: {
        fontSize: '1.2em',
        // color: '#8892B0',
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
        },
    },
    findMe: {
        color: '#8892B0',
        margin: '2% 0',
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em',
            margin: '5%',
        },
    },
    button: {
        margin: '5%',
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('sm')]: {
            // fontSize: '2em',
            marginTop: '10vh',
        },
    }
});

const ContactPage = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography className={classes.heading} variant="h2" color="textSecondary">Get In Touch</Typography>
            <Typography className={classes.para}>
                I'm currently open for any employment opportunities based on my expertise & 
            </Typography>
            <Typography className={classes.para}>
                my inbox is always open. Feel free to contact me whether it's for  
            </Typography>
            <Typography className={classes.para}>
                opportunities in developer communities or just to say hello.
            </Typography>
            <Typography variant="h6" className={classes.findMe}>
                You can find me at:
            </Typography>
            <Typography variant="h6" color="textPrimary">
                shraddhagoel24@gmail.com
            </Typography>
            <Button 
                variant="outlined" 
                size="large" 
                color="inherit"
                href="mailto:shraddhagoel24@gmail.com"
                className={classes.button}
            >
                Say Hello
            </Button>
        </div>
    )
}

export default withStyles(styles)(ContactPage);
