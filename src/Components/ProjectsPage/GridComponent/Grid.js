import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Modal from '../Modal/Modal';
import Card from '../Card/Card';

const styles = theme => ({
    root: {
        display: 'flex',
        marginTop: '5%',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    gridList: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '85vw',
        height: 'auto',
        transform: 'translateZ(0)',
        [theme.breakpoints.down('sm')]: {
            width: '100vw',
        },
    },
    titleBar: {
        background:
        'linear-gradient(to bottom, rgba(0,0,0,0.5) 70%, ' +
        'rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.3) 100%)',
        [theme.breakpoints.down('sm')]: {
          height: '40%',
        },
    },
    icon: {
        color: 'white',
    },
    projects: {
        cursor: 'pointer',
        width: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
          height: '20%',
        },
    },
});

const tileData = [
    {
      img: './Images/Slack.png',
      title: 'Slack Clone',
      github: 'https://github.com/pesto-students/batch-8-CODERHOOD',
      desc: `It is a clone of Slack. Built during the training at Pesto Tech. I worked on the architecture and code of the application.
      Tech stack used is NodeJs, ReactJs, MongoDb, Express, Jest etc.`,
      live: 'https://coderhood.netlify.com/',
    },
    {
        img: './Images/Burger.png',
        title: 'Burger App',
        github: 'https://github.com/Kunnu01/burger-app',
        desc: 'It is an application to order customized burgers. Tech stack used is ReactJS, Redux, Firebase.',
        live: 'https://kunnu01.github.io/burger-app',
    },
    {
        img: './Images/geekoconnector.JPG',
        title: 'GeekoConnector',
        github: 'https://github.com/Kunnu01/GeekoConnector',
        desc: 'It a social hub for developers. Tech stack used is NodeJs, ReactJs, MongoDB, Express, Redux.',
        live: 'https://ancient-atoll-49922.herokuapp.com/',
    },
    {
        img: './Images/Snake.png',
        title: 'Snake Game',
        github: 'https://github.com/Kunnu01/snake-game',
        desc: 'A snake game with arcade and classic playing modes. Tech stack used is ReactJs, Firebase.',
        live: 'https://kunnu01.github.io/snake-game',
    },
    {
        img: './Images/colorGame.JPG',
        title: 'Color Game',
        github: 'https://github.com/Kunnu01/Color-Game',
        desc: 'A color code guessing game made using HTML, CSS and Javascript.',
        live: 'https://kunnu01.github.io/Color-Game/index.html',
    },
    {
        img: './Images/weatherApp.JPG',
        title: 'Weather App',
        github: 'https://github.com/Kunnu01/Weather-App',
        desc: 'An application to provide weather info of a location. Created using NodeJs and Google APIs.',
        live: '',
    },
    {
        img: './Images/noteApp.JPG',
        title: 'Notes App',
        github: 'https://github.com/Kunnu01/Node-Note-App',
        desc: 'An application to keep notes. You can add, edit and delete notes. Created using NodeJs',
        live: '',
    },
    {
        img: './Images/patatp.png',
        title: 'Patatap Clone',
        github: 'https://github.com/Kunnu01/patatap_clone',
        desc: 'It is like a musical board. On clicking of each key, a unique sound and animation appears. Created using Javascipt, PaperJS, and HowlerJS.',
        live: 'https://kunnu01.github.io/patatap_clone/circles.html',
    },
    {
        img: './Images/mySketched.JPG',
        title: 'My Sketches',
        github: 'https://github.com/Kunnu01/sketch_and_code',
        desc: 'A simple website to display my sketches. Tech stack used is HTMl, CSS, Javascript',
        live: 'https://kunnu01.github.io/sketch-and-code/Index.html',
    },
    {
        img: './Images/todoapp.JPG',
        title: 'Todo App',
        github: 'https://github.com/Kunnu01/ToDo-List-App',
        desc: 'An application where you can add and delete your tasks. Created using HTMl, CSS, and Javascript.',
        live: 'https://kunnu01.github.io/ToDo-List-App/index.html',
    },
];

function AdvancedGridList(props) {
  const { classes } = props;

  const [activeTile, setActiveTile] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSetActiveTile = tile => {
    setActiveTile(tile);
    setModalOpen(true);
  }

  const handleModalClose = () => setModalOpen(false);

  return (
    <div className={classes.root}>
      <GridList cellHeight="auto" cols={2} spacing={24} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile
            onClick={() => handleSetActiveTile(tile)}
            target="_blank"
            col="1"
            className={classes.projects}
            key={tile.img}
          >
            <img
              src={tile.img}
              style={{height: '100%', width: '100%', borderRadius: '3%'}} 
              alt={tile.title} 
              />
            <GridListTileBar
              title={tile.title}
              color="#53f6c7"
              titlePosition="bottom"
              className={classes.titleBar}
              />
          </GridListTile>
        ))}
        <Modal open={isModalOpen} handleClose={handleModalClose}>
          <Card data={activeTile} />
        </Modal>
      </GridList>
    </div>
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvancedGridList);
