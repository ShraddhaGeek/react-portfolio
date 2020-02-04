import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    padding: '0.5em',
  },
  button: {
    color: theme.palette.text.secondary,
    borderColor: theme.palette.text.secondary,
  },
}));

export default function ImgMediaCard({ data }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Typography gutterBottom variant="h5" color="textSecondary" component="h2">
            {data.title}
        </Typography>
        <CardMedia
          component="img"
          alt={data.title}
          height="140"
          image={data.img}
          title={data.title}
        />
        <CardContent>
          <Typography variant="body2" color="textPrimary" component="p">
            {data.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Button
          href={data.github}
          target="_blank"
          size="small" 
          variant="outlined" 
          className={classes.button}
        >
          Source
        </Button>
        <Button 
          href={data.live}
          target="_blank"
          disabled={data.live ? false : true}
          size="small" 
          variant="outlined" 
          className={classes.button}
        >
          Visit
        </Button>
      </CardActions>
    </Card>
  );
}