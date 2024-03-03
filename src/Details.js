import React from 'react';
import { Card, Container, Typography, CardContent, Grid, Divider } from '@mui/material';

const Details = (props) => {
    const { dog } = props;
    return <>
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <Card sx={{ maxWidth: 600, margin:"0 auto", marginTop: "20px" }}>
                        <CardContent>
                            <img src={dog.image} alt={dog.name} style={{ width: "100%", height: "100%" }} />
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} md={9}>
                    <Card style={{ margin:"0 auto", width: "100%", marginTop: "20px", marginBottom:"40px" }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="h5" component="h2" style={{ margin: "0 auto", padding: "10px" }}>
                                    {dog.name}
                                </Typography>
                                <Divider style={{ width: "100%" }} />
                                <Typography style={{ margin: "0 auto", padding: "20px" }}>
                                    {dog.description.map((value, index) => {
                                        return <p key={index}>{value}</p>
                                    })}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </>
}

export default Details;