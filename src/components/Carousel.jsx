
import React from "react";
import Slider from "react-slick";
import {Box,Image} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}
const theme = extendTheme({ breakpoints })

export default function AutoPlay() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000
    };
    return (
      <Box w={theme}  >
        <Slider {...settings}>
          <Box >
            <Image  width={"100%"} height={"250px"}   src='https://i.ytimg.com/vi/--IpDY5o3vw/maxresdefault.jpg' alt='banner'/>
          </Box>
          <Box >
            <Image  width={"100%"} height={"250px"} src='https://s01.sgp1.digitaloceanspaces.com/facebook/692422-16448ea9-e5d0-4e02-9f60-b3b4620560f5.jpg' alt='image'/>
          </Box>
          <Box >
            <Image width={"100%"} height={"250px"} src='http://www.team-bhp.com/forum/attachments/vintage-cars-classics-india/1525750d1467922114-old-bollywood-indian-films-best-archives-old-cars-psx_20160708_013810.jpg' alt='frome'/>
          </Box>
          <Box>
             <Image width={"100%"} height={"250px"} src='https://media.zigcdn.com/media/content/2015/Apr/standard-2000-4-pic-photo-image-29042015-m4_720x540.jpg' alt='image'/>
          </Box>
          <Box >
             <Image width={"100%"} height={"250px"} src='https://www.cartoq.com/wp-content/uploads/2016/01/Tata-Sierra-.jpg' alt='image'/>
          </Box>
          <Box>
            <Image width={"100%"} height={"250px"} src='http://www.team-bhp.com/forum/attachments/modifications-accessories/904128d1331987008-pics-tastefully-modified-cars-india-12032012422.jpg' alt='image'/>
          </Box>
        </Slider>
      </Box>
    );
  }