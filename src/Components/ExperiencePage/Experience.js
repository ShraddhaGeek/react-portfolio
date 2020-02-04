import React from 'react'
import { withStyles, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const styles = theme => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            margin: '10%',
            marginTop: '12%',
        },
    },
    list: {
        margin: '0 8vw',
        [theme.breakpoints.down('sm')]: {
            margin: '3% -4%',
        },
    },
    duration: {
        color: '#8892B0'
    },
    desc: {
        margin: '-5vh 3vw',
        display: 'flex',
        color: theme.palette.text.primary,
    },
    textSecondary: {
        color: theme.palette.text.secondary,
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.secondary,
        cursor: 'pointer',
    }
});

const Experience = (props) => {
    const { classes } = props;

    const experiences = [
        {
            company: 'Policy Bazaar',
            role: 'Lead Front-end Developer',
            duration: 'Sept 2019 - Present',
            link: 'https://www.policybazaar.com/"',
            desc: [
                <p>Worked on the core project of the 
                    <a href="https://travel.policybazaar.com/" rel="noopener noreferrer"
                        target="_blank"
                        className={classes.link}
                    > Travel Insurance
                    </a>, 
                    to create a more interactive customer journey
                using technologies React</p>,
                <p>Created a 
                    <a href="https://travel.policybazaar.com/campaign-v1/" rel="noopener noreferrer"
                        target="_blank"
                        className={classes.link}
                    > Marketing Landing Page 
                    </a>, 
                    for handling new campaign</p>,
                <p>Desining Archeticeture and auditing code of other developers</p>
            ],
        },
        {
            company: 'Successive Technologies',
            role: 'Software Developer',
            duration: 'Feb 2018 - Sept 2019',
            link: 'https://successive.tech',
            desc: [
                <p>Worked on various parts of the 
                    <a href="https://nodexperts.com/enterprise-integration/" rel="noopener noreferrer"
                        target="_blank"
                        className={classes.link}
                    > Enterprise Integration
                    </a>, 
                    a data transformation tool, and created micro-services 
                using technologies like MERN Stack, TypeScript, Apollo, SQL, Datahub, Salesforce, etc. </p>,
                <p>Created backend part using NodeJs and GraphQL of FlagIt, an application for toggling features based on strategies.</p>,
                <p>Worked on the schema and the backend of a Chat POC.</p>
            ],
        },
        {
            company: 'Independent FreeLancer',
            role: 'Full Stack Developer',
            duration: 'Jan 2017 - Jan 2017',
            link: '',
            desc: [
                <p>Worked on the frontend and core functionalities of an entripse level hospital management project</p>,
                <p>Continued working as a freelancer helping them solve various issues.</p>,
            ],
        },
    ]
    
    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.heading} color="textSecondary">
                Experience
            </Typography>

            <List className={classes.list}>
                {
                    experiences.map(({company, role, duration, desc, link}) => (
                        <ListItem>
                            <ListItemText>
                                <Typography variant="h6" color="textPrimary">
                                    {role} @ <a href={link} rel="noopener noreferrer" target="_blank" className={classes.link}>{company}</a>
                                </Typography>
                                <Typography paragraph className={classes.duration}>
                                    {duration}
                                </Typography>
                                <List>
                                    {
                                        desc.map(points => (
                                            <ListItem key={points} className={classes.desc}>
                                                <ListItemIcon className={classes.textSecondary}>
                                                    <SendIcon style={{fontSize: '1em'}} />
                                                </ListItemIcon>
                                                <Typography variant="body1" color="textPrimary">{points}</Typography>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    )
}

export default withStyles(styles)(Experience);
