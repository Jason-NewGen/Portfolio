'use client'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ImageHolder from './components/ImageHolder'
import { Nerko_One } from 'next/font/google'

// use vercel to deploy next js site

const nerkoFont = Nerko_One({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const imageFiles = [
    "ChessRobot_Presentation2024.jpg",
    "Hackathon_Win.jpg",
    "PhuQuoc_2024.jpg",
    "Vistar_Presentation2024.JPG",
  ]

  const imageList = imageFiles.map(file => `images/${file}`);
  const captionList = [
    "Chess Robot Symposium - May 2024",
    "DragonHacks Hackathon - April 2024",
    "Phu Quoc, Vietnam - August 2023",
    "Vistar Internship Presentation - August 2024"
  ]

  const PageSection = styled(Box)(({
    display: 'flex',
    width: '100%',
    height: '100vh',
  }))

  const SidebarButton = styled(Button)(({
    position: 'fixed',
    borderRadius: '4px',
    borderColor: 'white',
    width: 2,
    height: 4,
    marginTop: 8,
  }))

  return (
    <Box
      display = "flex"
      flexDirection = "column"
    >
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <SidebarButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FormatListBulletedIcon color='primary'/>
      </SidebarButton>
      <PageSection> { /*  First Page ig */}
        <Box className="summary and name" display="flex" flexDirection="column">
          <Typography fontSize={48} fontStyle={nerkoFont.style.fontFamily} className={nerkoFont.className}>
            Jason Nguyen
          </Typography>
          <Typography>
            Former SWE Intern @ Vistar Media
          </Typography>
          <Typography>
            Honors Senior at Rutgers University
          </Typography>
        </Box>
        <Box className="rotatingPictures">
          <ImageHolder imageList={imageList} isRotating={true} height="65vh" width="33vw" captionList={captionList}/>
        </Box>
      </PageSection>
      <PageSection>

      </PageSection>
    </Box>
  );
}
