import { Button, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';

interface ProductCardProps {
    picture: React.ReactNode;
    lable: string;
    description: string;
}


export const ProductCard: React.FC<ProductCardProps> = ({ picture, lable, description }) => {
    return (

        <Grid item lg={3} className='p-3 m-3'>
            <div
                className='p-3'
            >
                <div>
                    <img src={picture} alt={lable} style={{ borderRadius: "20px" }} />
                </div>
                <Typography component="body" variant="h6" color="primary" gutterBottom>
                    {lable}
                </Typography>
                <Typography component="body" variant="caption" gutterBottom>
                    {description}
                </Typography>
                <Button variant="contained">Add to cart</Button>
            </div>

        </Grid>

    );
};

export default ProductCard;
