import React from 'react'
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Tooltip from '@material-ui/core/Tooltip';
import styleClasses from './MenuBar.module.css';
import Fade from '@material-ui/core/Fade';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faUserCircle,
    faEnvelope,
    faCodeBranch,
    faCloudMoon,
    faCloudSun,
    faBriefcase,
    faFilePdf
} from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

const styles = theme => ({
    root: {
        display: 'block',
        marginTop: '25vh',
        // maxHeight: '70vh',
        width: '3%',
        position: 'fixed',
        height: '100vh',
        zIndex: '100',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        boxSizing: 'border-box',
    },
    listItem: {
        cursor: 'pointer',
    },
    tooltip: {
        position: 'relative',
        zIndex: 999,
    },
    active: {
        color: theme.palette.text.secondary,
    }
});

const MenuBar = (props) => {
    const { classes } = props;

    // const linkTo = (link) => {
    //     const { history } = props;
    //     history.push(link);
    // }

    const getSecondarySideOptions = () => {
        const { handleSwitch } = props;
        return [
            {
                text: props.isLightTheme ? "Lights Off" : "Lights On",
                icon: props.isLightTheme ? <Fade in={props.isLightTheme} timeout={1000}><FontAwesomeIcon icon={faCloudMoon} size="2x" /></Fade> : <Fade in={!props.isLightTheme} timeout={1000}><FontAwesomeIcon icon={faCloudSun} size="2x" /></Fade>,
                switchMode: handleSwitch,
            },
        ];
    };

    const list = [
        {
            text: 'Home',
            icon: <FontAwesomeIcon icon={faHome} size="2x" />,
            link: '/',
        },
        {
            text: 'About',
            icon: <FontAwesomeIcon icon={faUserCircle} size="2x" />,
            link: '/about',
        },
        {
            text: 'Experience',
            icon: <FontAwesomeIcon icon={faBriefcase} size="2x" />,
            link: '/experience',
        },
        // {
        //     text: 'Projects',
        //     icon: <FontAwesomeIcon icon={faCodeBranch} size="2x" />,
        //     link: '/projects',
        // },
        {
            text: 'Blogs',
            icon: <FontAwesomeIcon icon={faMedium} size="2x" />,
            link: '/blogs',
        },
        {
            text: 'Contact',
            icon: <FontAwesomeIcon icon={faEnvelope} size="2x" />,
            link: '/contact',
        },
    ];

    return (
        <div className={classes.root} >
            <List>
            {list.map(({text, icon, link}) => (
                <ListItem 
                    component={NavLink} to={link} 
                    key={text}
                    alignItems="center"
                    // className={styleClasses.MenubarItems}
                >
                    <Tooltip className={classes.tooltip} title={text} placement="right">
                        <ListItemIcon className={styleClasses.MenubarItems}>
                            {icon}
                        </ListItemIcon>
                    </Tooltip>
                </ListItem>
            ))}
            <ListItem className={classes.listItem} alignItems="center"
                component="a"
                href="https://drive.google.com/file/d/17JMR6Sq7Lp2u2ixtRfRaIdMnl4-1m54n/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
            >
                <Tooltip className={classes.tooltip} title="Resume" placement="right">
                    <ListItemIcon className={styleClasses.MenubarItems}>
                        <FontAwesomeIcon icon={faFilePdf} size="2x" />
                    </ListItemIcon>
                </Tooltip>
            </ListItem>
            {getSecondarySideOptions().map(({ text, icon, switchMode }) => (
                <ListItem key={text} className={classes.listItem} alignItems="center" onClick={() => {}}>
                <Tooltip className={classes.tooltip} title={text} placement="right">
                <ListItemIcon
                    onClick={switchMode} 
                    className={styleClasses.MenubarItems}
                >
                    {icon}
                </ListItemIcon>
                </Tooltip>
                </ListItem>
            ))}
            </List>
        </div>
    )
}

export default withStyles(styles)(withRouter(MenuBar));
