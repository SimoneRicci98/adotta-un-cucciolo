import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, pink } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const handleShareClick = async (dog) => {
    const url = 'https://adotta-un-cucciolo.vercel.app/?cucciolo=' + dog.name + '#' + dog.name;
    try {
        // Check if the Web Share API is supported
        if (navigator.share) {
            await navigator.share({
                title: document.title,
                text: 'Guarda questo bellissimo cucciolo!',
                url: url,
            });
        } else {
            // Fallback for browsers that do not support the Web Share API
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(url);
                alert('Link copiato!');
            } else {
                alert('Impossibile condividere');
            }
        }
    } catch (error) {
        console.error('Error sharing:', error.message);
    }
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function StyledCard(props) {
    const { dog, cucciolo } = props;
    const [expanded, setExpanded] = React.useState(false);
    React.useEffect(() => {
        if (cucciolo === dog.name)
            setExpanded(true)
    }, [cucciolo])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Card sx={{ maxWidth: 345, margin: '0 auto' }} onClick={handleExpandClick}>
            <section id={dog.name} name={dog.name}/>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: dog.gender === 'm' ? blue[500] : pink[100] }} aria-label="recipe">
                        {dog.gender.toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings" onClick={() => { handleShareClick(dog) }}>
                        <ShareIcon />
                    </IconButton>
                }
                title={dog.name}
                subheader={dog.short_desc}
            />

            <CardMedia
                component="img"
                image={dog.image}
                alt={dog.name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {dog.pitch_sale}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {/*<IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
            </IconButton>*/}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {dog.description.map(value => <Typography paragraph>{value}</Typography>)}
                </CardContent>
            </Collapse>
        </Card>
    );
}