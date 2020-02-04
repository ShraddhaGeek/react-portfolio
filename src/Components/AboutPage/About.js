import React from 'react'
import { withStyles, Typography, List, ListItem } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root: {
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
    expHeading: {
        margin: '3% 0',
        marginBottom: '2%',
        [theme.breakpoints.down('sm')]: {
            fontSize: '3em',
            marginBottom: '5%',
        },
    },
    para: {
        fontSize: '1.2em',
        color: '#8892B0',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1em',
        },
    },
    skillsContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('sm')]: {
            margin: '0 -7vw',
        },
    },
    skills: {
        margin: '0 1%',
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
            margin: '0',
        },
    },
    chip: {
        margin: '3%',
    },
    languagesContainer: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '0 -7vw',
        },
    },
    languages: {
        margin: '0',
        display: 'flex',
        color: theme.palette.text.primary,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            flexDirection: 'column',
        },
    },
    listIcon: {
        color: theme.palette.text.secondary,
    },
});

const About = (props) => {

    const skills = [
        'Javascript',
        'ReactJs',
        'Redux',
        'NodeJs',
        'Typescript',
        'MongoDB',
        'SQL',
        'GraphQL',
        'Git & Github',
        'Express',
        'Material-UI',
        'Shopify',
        'Kong Api Management',
        'AWS',
        'Project Management',
        'Data Structures',
        'Meteor'
    ];

    const languages = [
        'English',
        'Hindi',
        'Spanish (Intermediate)',
        'German (Beginner)',
    ]

    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.heading} color="textSecondary">About Me</Typography>

            <Typography variant="h6" className={classes.para}>
                A growing engineer who has the technical knowledge of how things
            </Typography>
            <Typography variant="h6" className={classes.para}>
                work in the world of zeros and ones, ready with an edge to dive into the
            </Typography>
            <Typography variant="h6" className={classes.para}>
                design process to discover, ideate and build some cool products.
            </Typography>
            <Typography variant="h6" className={classes.para}>
            I always want to learn more, do more, and be more. 
            I’m also a firm believer that we should never settle.
            </Typography>

            <Typography variant="h6" color="textSecondary" style={{margin: '2% 0', marginBottom: '1%'}}>
                Tools & technologies that I have experience with:
            </Typography>
            
            <div className={classes.skillsContainer}>
                <List className={classes.skills}>
                    {
                        skills.map(skill => (
                                <Chip label={skill} className={classes.chip} />
                            ))
                    }
                </List>
            </div>
                <Typography variant="h6" color="textSecondary" style={{marginBottom: '1%'}}>
                    Languages I know:
                </Typography>
                <div className={classes.languagesContainer}>
                    <List className={classes.languages}>
                        {
                            languages
                                .map(language => (
                                    <ListItem key={language}>
                                        <ListItemIcon className={classes.listIcon}>
                                            <SendIcon />
                                        </ListItemIcon>
                                        <ListItemText 
                                            variant="h4"
                                            primary={language}
                                        />
                                    </ListItem>
                                ))
                        }
                    </List>
                </div>
        </div>
    )
}

export default withStyles(styles)(About);
