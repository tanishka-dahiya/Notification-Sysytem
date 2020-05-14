import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Zoom from 'react-reveal/Zoom';


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '5 8px 10px 10px rgba(255, 105, 135, .3)',
        // margin: theme.spacing(0, 20),
        maxWidth: 350,
    },

}));

export default function ImgMediaCard({ title, imageSrc, desc, onClick }) {
    const classes = useStyles();

    return (
        <Zoom>
            <Card className={classes.root} onClick={onClick}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={title}
                        height="200"
                        image={imageSrc}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </Zoom >
    );
}