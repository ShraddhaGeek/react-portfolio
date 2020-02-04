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
            company: 'React Admin - Open Source',
            role: 'Full Stack Developer',
            duration: 'August 2019',
            link: 'https://github.com/marmelab/react-admin',
            desc: [
                <p>It is a frontend Framework for building admin applications running in the browser on top of 
                REST/GraphQL APIs, using ES6, React, and Material Design.</p>,
                <p>Worked on various issues. You can have a look at my PRs <a href="https://github.com/marmelab/react-admin/pulls/Kunnu01" rel="noopener noreferrer" target="_blank" className={classes.link}>here</a>.</p>,
            ],
        },
        {
            company: 'Pesto Tech',
            role: 'Engineering Mate',
            duration: 'Jun 2019 - Present',
            link: 'https://pesto.tech',
            desc: [
                <p>Spent 8 weeks reviewing web development best practices and learning soft skills for remote work
                and creating <a href="https://coderhood.netlify.com" rel="noopener noreferrer" target="_blank" className={classes.link}>Slack Clone</a> as team project utilizing the skills learned.</p>,
                <p>Spent 4 weeks contributing to Open Source Project - 
                <a href="https://github.com/marmelab/react-admin" rel="noopener noreferrer" target="_blank" className={classes.link}> React Admin</a>.
                It is a frontend Framework for building admin applications running in the browser on top of REST/GraphQL APIs, 
                using ES6, React and Material Design. <a className={classes.link} href="https://docs.google.com/document/d/1lH8tlUGaBR4tzEsdgAz4BvsvRjXIJtMgc4lA6KVnbnM/edit#heading=h.l5pg374f3boy" rel="noopener noreferrer" target="_blank">Here </a>
                are the details of all 
                PR merged or simply view all PR <a href="https://github.com/marmelab/react-admin/pulls/Kunnu01" rel="noopener noreferrer" target="_blank" className={classes.link}>here</a>.</p>,
            ],
        },
        {
            company: 'Successive Technologies',
            role: 'Software Developer',
            duration: 'Jan 2019 - Jun 2019',
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
            company: 'Beryl India',
            role: 'Full Stack Developer Intern',
            duration: 'Jun 2018 - Sep 2018',
            link: 'https://beryl.agency',
            desc: [
                <p>Worked on the frontend and core functionalities of 
                    <a href="https://www.oranonline.in/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className={classes.link}> Oran</a>, an e-commerce site for batteries.</p>,
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
