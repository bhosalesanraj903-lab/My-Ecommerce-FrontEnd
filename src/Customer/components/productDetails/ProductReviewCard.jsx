import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const ProductReviewCard = () => {
    let store=useSelector(store=>store)
    console.log("store in ProductReviewCard",store)
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={2}  sm={2} md={1}    >
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height:56 }}>{store.auth?.user?.firstName?.[0]}</Avatar>
                    </Box>
                </Grid>

                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className='font-semibold text-lg'>{store.auth?.user?.firstName}</p>
                            <p className='opacity-70'>feb 18, 2025</p>
                        </div>
                    </div>
                     <Rating value={3.5} name='half-rating' readOnly precision={.5} />   {/*//precision is used for half */}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nemo officia quis aliquam pariatur.</p>
                </Grid>

                
            </Grid>
        </div>
    )
}

export default ProductReviewCard
