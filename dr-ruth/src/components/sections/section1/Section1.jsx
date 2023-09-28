import { Card, CardContent, CardMedia, Container, Grid, Typography, containerClasses } from '@mui/material';

//importo las img
import img_1 from '../../../assets/images/Rectangle 3.png'
import img_2 from '../../../assets/images/Rectangle 4.png'
import img_3 from '../../../assets/images/Rectangle 5.png'
import img_4 from '../../../assets/images/Rectangle 6.png'

import './Section1.css';

export default function Section1() {
    return (
        <Container maxWidth="sm">
            <Grid container rowSpacing={1} columnSpacing={{xs:1,sm:2,md:3}}  style={{ paddingTop: 50 }}>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia component="img" image={img_1} alt='algo' />
                        <CardContent>
                            <Typography variant='h5'>Acido Iluronico</Typography>
                            <Typography component="p" variant='body2'>
                            Aqui algo mas de contenido.
                            </Typography>
                    </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia component="img" image={img_2} alt='algo' />
                        {/* <CardContent>
                            <Typography variant='h5'>Acido Iluronico</Typography>
                            <Typography component="p" variant='body2'>
                            Aqui algo mas de contenido.
                            </Typography>
                    </CardContent> */}
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia component="img" image={img_4} alt='algo' />
                       {/*  <CardContent>
                            <Typography variant='h5'>Acido Iluronico</Typography>
                            <Typography component="p" variant='body2'>
                            Aqui algo mas de contenido.
                            </Typography>
                    </CardContent> */}
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardMedia component="img" image={img_3} alt='algo' />
                        <CardContent>
                            <Typography variant='h5'>Acido Iluronico</Typography>
                            <Typography component="p" variant='body2'>
                            Aqui algo mas de contenido.
                            </Typography>
                    </CardContent>
                    </Card>
                </Grid>
            </Grid>
     </Container>   
     
      
    );
}