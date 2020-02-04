import React from 'react'
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Typing from '../Typist/Typist';
import TextLoop from "react-text-loop";

const styles = theme => ({
    root: {
        display: 'flex',
        marginLeft: '10vw',
        marginRight: '8%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
            
            marginTop: '10%',
        },
    },
    intro: {
        position: 'relative',
        flex: 1.2,
        paddingRight: '15px',
        paddingTop: '4%',
        padding: '5px',
        fontSize: '4.2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
        },
    },
    textSecondary: {
        color: theme.palette.text.secondary,
    },
    imageSection: {
        flex: 0.8,
        paddingTop: '4%',
        paddingLeft: '4%',
        padding: '5px',
    },
    image: {
        maxHeight: '100%',
        maxWidth: '90%',
        marginBottom: '8%',
        boxShadow: '25px 20px 15px #2a2931',
        [theme.breakpoints.down('sm')]: {
            width: '70%',
            borderRadius: '10px',
        },
    },
    introRole: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5rem',
        },
    },
});

const MainPage = (props) => {
    const { classes } = props;
    const intro = [ 'Full Stack Developer ', 'From India' ];
    return (
        <section className={classes.root}>
            <div className={classes.intro}>
                <Typography align="left" className={classes.intro} variant="h1" color="textPrimary">
                    <span className={classes.textSecondary}>&lt;b&gt;</span>
                    <TextLoop>
                        <span>Hello</span>
                        <span>Hola</span>
                        <span>Hallo</span>
                    </TextLoop>
                    <span className={classes.textSecondary}>&lt;/b&gt;</span> <span className={classes.textSecondary}>I'm Shraddha, </span>
                    <Typography variant="h4" className="introRole">
                        <Typing words={intro} />
                    </Typography>
                </Typography>
            </div>
            <div className={classes.imageSection}>
                <img className={classes.image} src="./Images/newme.png" alt="myphoto"/>
            </div>
        </section>
    )
}

export default withStyles(styles)(MainPage);
