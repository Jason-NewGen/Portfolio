'use client'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Sidebar from './components/Sidebar';
import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ImageHolder from './components/ImageHolder';
import BouncingArrow from './components/BouncingArrow';

export default function Home(){
  
  const pageOne = useRef<HTMLDivElement>(null);
  const pageTwo = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const imageFiles = [
    "PhuQuoc_2024.jpg",
    "ChessRobot_Presentation2024.jpg",
    "Hackathon_Win.jpg",
    "Vistar_Presentation2024.JPG",
  ];

  const imageList = imageFiles.map(file => `images/${file}`);
  const captionList = [
    "Phu Quoc, Vietnam - August 2023",
    "Chess Robot Symposium - May 2024",
    "DragonHacks Hackathon - April 2024",
    "Vistar Internship Presentation - August 2024"
  ];

  const PageSection = styled(Box)(({
    display: 'flex',
    width: '100%',
    height: '100vh',
  }));

  const Monospace = styled(Typography)(({
    fontFamily: "cursive"
  }))

  const SidebarButton = styled(Button)(({
    position: 'fixed',
    borderRadius: '4px',
    borderColor: 'white',
    width: 2,
    height: 4,
    marginTop: 8,
  }));

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <SidebarButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        
      >
        <FormatListBulletedIcon sx={{color: '#18ad55', mr: 1, mt: 1}}/>
      </SidebarButton>
      <PageSection display="flex" flexDirection="column" ref={pageOne}>
        <Box className="name and pics" display="flex" justifyContent="center">
          <Monospace fontSize="5vw" mb={2}>
            Jason Nguyen
          </Monospace>
        </Box>
        <Box className="rotatingPictures">
          <ImageHolder imageList={imageList} isRotating={true} height="63vh" width="35vw" captionList={captionList}/>
        </Box>
        <Box display="flex" justifyContent="center" mt={9}>
          <Button
            disableRipple
            startIcon={<BouncingArrow sx={{
              color: "white"
            }}/>}
            onClick={() => scrollToSection(pageTwo)}
          />
        </Box>
      </PageSection>
      <PageSection ref={pageTwo} display="flex" flexDirection="column">
            <Box className="" display="flex" justifyContent="center">
              <Monospace fontSize="5vw" mb={2}>
                Education
              </Monospace>
            </Box>
      </PageSection>
      <PageSection>

      </PageSection>
    </Box>
  );
}
