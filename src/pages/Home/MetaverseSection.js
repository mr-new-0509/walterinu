import React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import { COLOR_DARK } from '../../utils/constants';
import {
  SecondaryTypography,
  BrightTypography,
  PrimaryTypography
} from '../../utils/styledComponents';
import Carousel from '../../components/Carousel';

const SLIDER_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, centerPadding: '0' }
    }
  ]
};

const CarouselItem = (dataItem) => {
  return (
    <Box

    ></Box>
  );
};

export default function MetaverseSection() {
  return (
    <Box bgcolor="#131313">
      {/* Title */}
      <Container maxWidth="lg" sx={{ mt: { xs: 6, md: 12 } }}>
        <PrimaryTypography fontSize={{ xs: 16, md: 20 }} textAlign="center">
          Metaverse. P2E Game. Staking.
        </PrimaryTypography>
        <BrightTypography
          fontSize={{ xs: 36, md: 58 }}
          fontWeight={900}
          textAlign="center"
        >
          More than just a Meme Token
        </BrightTypography>
        <SecondaryTypography fontSize={{ md: 18 }} textAlign="center">
          Walter is here to stay, not only as attribute to Elon's dog, but to bring you a full suite of treats, including his lauchpad, BSC Bridge, NFT's and NFT Marketplace
        </SecondaryTypography>
      </Container>

      {/* Twitter mentions */}
      <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 12 } }}>
        <Grid container spacing={{ xs: 1, md: 0 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <PrimaryTypography
              fontSize={{ xs: 16, md: 20 }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Twitter mentions
            </PrimaryTypography>
            <BrightTypography
              fontSize={{ xs: 36, md: 58 }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Inspired by Elon Fueled by the community
            </BrightTypography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" justifyContent="center">
              <Box
                component="img"
                src="/assets/images/twitter_mentions.png"
                alt="Twitter mentions"
                width="70%"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>

      <Box>
        {/* <Carousel 
          sliderSettings={SLIDER_SETTINGS}
        /> */}
      </Box>
    </Box>
  );
}