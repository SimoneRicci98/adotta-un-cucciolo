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
    }, [cucciolo, dog.name])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const getBackgroundColor = () => {
        switch (dog.adopted) {
            case '(STOP RICHIESTE)':
                return 'rgba(255, 218, 185, 0.3)'
            case '(Nuovamente disponibile!)':
                return 'rgba(144, 238, 144, 0.3)'
            default:
                return 'white'
        }
    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }
    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }

    return (

        <Card sx={{ maxWidth: 345, margin: '0 auto' }} >
            <section id={dog.name} name={dog.name} />
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
                titleTypographyProps={{
                    fontSize: 22,
                  }}
                title={dog.name}
                subheader={<>{dog.short_desc} <br /> {dog.adopted}</>}
                style={{ backgroundColor: getBackgroundColor() }}
                onClick={handleExpandClick}
            />
            <CardMedia
                component="img"
                image={dog.image}
                alt={dog.name}
                onClick={onClickUrl(dog.url)}
            />
            <CardContent style={{ backgroundColor: getBackgroundColor() }} onClick={handleExpandClick}>
                <Typography variant="body2" color="text.secondary">
                    {dog.pitch_sale}
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ backgroundColor: getBackgroundColor() }} onClick={handleExpandClick}>
                {/* <Button >Segui la mia crescita!</Button>*/}
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
                <CardContent style={{ backgroundColor: getBackgroundColor() }}>
                    {dog.description.map(value => <Typography paragraph>{value}</Typography>)}
                </CardContent>
            </Collapse>
        </Card>
    );
}