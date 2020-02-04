import React from 'react';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
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
    faFilePdf,
} from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { Typography } from '@material-ui/core';

const styles = theme => ({
    list: {
        width: 240,
        height: '100vh',
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: 240,
            flexShrink: 0,
        },
    },
    sideList: {
        fontSize: '0.87rem',
        position: 'absolute',
        top: '27%',
        left: '35%',
    },
    listItem: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '5%',
        }
    },
    listItemIcon: {
        width: 32,
    },
});
class TemporaryDrawer extends React.Component {
    getSecondarySideOptions = () => {
        const { handleSwitch } = this.props;
        return [
            {
                text: this.props.isLightTheme ? "Lights Off" : "Lights On",
                icon: this.props.isLightTheme ? <Fade in={this.props.isLightTheme} timeout={1000}><FontAwesomeIcon icon={faCloudMoon} size="2x" /></Fade> : <Fade in={!this.props.isLightTheme} timeout={1000}><FontAwesomeIcon icon={faCloudSun} size="2x" /></Fade>,
                switchMode: <Switch
                    checked={this.props.isLightTheme}
                    onChange={handleSwitch}
                    value="checkedB"
                    color="default"
                />
            },
        ];
    };

    linkTo = (link) => {
        const { history } = this.props;
        history.push(link);
    }

    render() {
        const { classes, open, onClose, isLightTheme } = this.props;

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
            // {
            //     text: 'Projects',
            //     icon: <FontAwesomeIcon icon={faCodeBranch} size="2x" />,
            //     link: '/projects',
            // },
            {
                text: 'Experience',
                icon: <FontAwesomeIcon icon={faBriefcase} size="2x" />,
                link: '/experience',
            },
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

        const drawerBackground = {
            background: isLightTheme ? '#f5f5f5' : '#2a2930',
        }

        const sideList = (
        <div className={classes.list} style={drawerBackground}>
            <List>
            {list.map(({text, icon, link}) => (
                <ListItem className={classes.listItem} button key={text} alignItems="center"
                    onClick={() => this.linkTo(link)}
                >
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText>
                    <Typography className={classes.sideList} color="textSecondary" variant="button">
                        {text}
                    </Typography>
                </ListItemText>
                </ListItem>
            ))}
            <ListItem button className={classes.listItem} alignItems="center"
                component="a"
                href="https://drive.google.com/file/d/17JMR6Sq7Lp2u2ixtRfRaIdMnl4-1m54n/view?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
            >
                <ListItemIcon>
                    <FontAwesomeIcon icon={faFilePdf} size="2x" />
                </ListItemIcon>
                <ListItemText>
                    <Typography className={classes.sideList} color="textSecondary" variant="button">
                        Resume
                    </Typography>
                </ListItemText>
            </ListItem> 
            {this.getSecondarySideOptions().map(({ text, icon, switchMode = null }) => (
                <ListItem button key={text} onClick={() => {}} alignItems="center">
                <ListItemIcon className={classes.listItemIcon}>{icon}</ListItemIcon>
                <ListItemText>
                    <Typography
                        variant="button"
                        color='textSecondary'
                        style={{whiteSpace: 'nowrap'}}
                    >
                        {text}
                    </Typography>
                </ListItemText>
                {switchMode}
                </ListItem>
            ))}
            </List>
        </div>
        );

        return (
        <div>
            <Drawer
                open={open} 
                onClose={onClose}
                className={classes.drawer}
            >
            <div
                tabIndex={0}
                role="button"
                onClick={onClose}
                onKeyDown={onClose}
            >
                {sideList}
            </div>
            </Drawer>
        </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(TemporaryDrawer));