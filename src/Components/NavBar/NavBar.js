import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Tilt from 'react-tilt';
import SideDrawer from './SideDrawer/SideDrawer';
import MenuBar from './MenuBar/MenuBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin, faMediumM, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const styles = theme => ({
    root: {
        width: '100%',
        zIndex: '1000',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    appBar: {
        background: 'transparent',
    }
});

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
        };
    }

    toggleDrawer = () => {
        const { isDrawerOpen } = this.state;
        this.setState({
        isDrawerOpen: !isDrawerOpen,
        });
    };

    render() {
        const { classes, handleSwitch } = this.props;
        const { isDrawerOpen } = this.state;

        return (
            <>
                <div className={classes.root}>
                    <AppBar style={{boxShadow: 'none', background: 'transparent'}} position="fixed">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer} className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.grow} />
                        <div>
                        <IconButton target="_blank" href="https://github.com/ShraddhaGeek" color="inherit">
                            <Tilt className="Tilt" options={{ max : 100 }} style={{height: 30, width: 30}} >
                                <div className="Tilt-inner">
                                    <FontAwesomeIcon icon={faGithub} size="1x" />
                                </div>
                            </Tilt>
                        </IconButton>
                        <IconButton target="_blank" href="https://www.linkedin.com/in/shraddha-goel-21b692121" color="inherit">
                            <Tilt className="Tilt" options={{ max : 100 }} style={{height: 30, width: 30}} >
                                <div className="Tilt-inner">
                                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                                </div>
                            </Tilt>
                        </IconButton>
                        <IconButton target="_blank" href="https://stackoverflow.com/users/9945438/shraddha-goel" color="inherit">
                            <Tilt className="Tilt" options={{ max : 100 }} style={{height: 30, width: 30}} >
                                <div className="Tilt-inner"> 
                                    <FontAwesomeIcon icon={faStackOverflow} size="1x" />
                                </div>
                            </Tilt>
                        </IconButton>
                        <IconButton target="_blank" href="https://www.instagram.com/shraddhagoel24" color="inherit">
                            <Tilt className="Tilt" options={{ max : 100 }} style={{height: 30, width: 30}} >
                                <div className="Tilt-inner"> 
                                    <FontAwesomeIcon icon={faInstagram} size="1x" />
                                </div>
                            </Tilt>
                        </IconButton>
                        <IconButton target="_blank" href="https://medium.com/@shraddhagoel24" color="inherit">
                            <Tilt className="Tilt" options={{ max : 100 }} style={{height: 30, width: 30}} >
                                <div className="Tilt-inner"> 
                                    <FontAwesomeIcon icon={faMediumM} size="1x" />
                                </div>
                            </Tilt>
                        </IconButton>
                        </div>
                    </Toolbar>
                    </AppBar>
                    <MenuBar 
                        handleSwitch={handleSwitch}
                        isLightTheme={this.props.isLightTheme}
                    />
                </div>
                <SideDrawer
                    handleSwitch={handleSwitch}
                    isLightTheme={this.props.isLightTheme}
                    open={isDrawerOpen}
                    onClose={this.toggleDrawer}
                />
            </>
            );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);