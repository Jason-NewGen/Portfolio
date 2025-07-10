'use client'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {GitHub, LinkedIn, Description} from '@mui/icons-material'
import * as React from 'react';
import Sidebar from './components/Sidebar';
import { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ImageHolder from './components/ImageHolder';
import BouncingArrow from './components/BouncingArrow';
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid2';
import Chip from './components/styled/Chip';
import SkillCard from './components/SkillCard';
import Monospace from './components/styled/Monospace';

export default function Home(){
  
  const pageOne = useRef<HTMLDivElement>(null);
  const pageTwo = useRef<HTMLDivElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mHeight = "45vh"

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

  const projectList = [
    {
      title: "Chess Robot",
      image: "images/ChessRobot_Presentation2024.jpg",
      skills: ["C++", "Arduino", "Computer Vision", "AI", "Python",],
      learnMore: "/skills/chessRobot"
    },
    {
      title: "Mathathon",
      image: "images/Hackathon_Win.jpg",
      skills: ["Hackathon Winner", "AI", "MongoDB", "React", "Typescript", "Node.JS", "Auth",],
      learnMore: "https://github.com/mv5903/dragonhacks2024"
    },
    {
      title: "ReLearn Craft",
      image: "images/minecraftRL.jpg",
      skills: ["AI", "Distributed Data Parallelism", "Reinforcement Learning", "numpy", "python"],
    }
  ]

  const PageSection = styled(Box)(({
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
  }));

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
      width="100%"
    >
      <Sidebar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <SidebarButton
        onClick={() => setSidebarOpen(!sidebarOpen)}
        disableRipple
      >
        <FormatListBulletedIcon sx={{
          color: 'white',
          mr: 1, 
          mt: 1,
          "&:hover": {
            color: '#18ad55'
          }
        }}/>
      </SidebarButton>
      <PageSection display="flex" flexDirection="column" ref={pageOne}>
        <Box className="name and pics" display="flex" justifyContent="center" flexDirection="column" alignItems="center" mb={1}>
          <Monospace fontSize="5vw">
            Jason Nguyen
          </Monospace>
          <Box display="flex" justifyContent="center" width="100%">
            {/* This is where all the links will go */}
            <IconButton
              title="GitHub"
              sx={{
                color: "white",
                "&:hover": {
                  color: "#18ad55",
                },
                mx: 1
              }}
              onClick={() => window.open('https://www.github.com/Jason-NewGen')}
            >
              <GitHub />
            </IconButton>
            <IconButton
              title="LinkedIn"
              sx={{
                color: "white",
                "&:hover": {
                  color: "#18ad55"
                },
                mx: 1
              }}
              onClick={() => window.open('https://www.linkedin.com/in/jason-nguyen-146165223/')}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              title="Resume"
              sx={{
                color: "white",
                "&:hover": {
                  color: "#18ad55",
                },
                mx: 1
              }}
              onClick={() => window.open('files/JasonNguyen_Resume2024.pdf')}
            >
              <Description />
            </IconButton>
          </Box>
        </Box>
        <Box className="rotatingPictures">
          <ImageHolder imageList={imageList} isRotating={true} height="63vh" width="35vw" captionList={captionList}/>
        </Box>
        <Box display="flex" justifyContent="center" mt={7}>
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
            Skills
          </Monospace>
        </Box>
        <Box display="flex" width="100%">
          <Grid container spacing={3} width="100%" padding={2}>
            {projectList.map((project) => {
              return (
                <Grid size={{md: 4}} minHeight={mHeight} key={project.title}>
                  <SkillCard {...project}/>
                </Grid>
              )
            })}
          </Grid>
        </Box>
      </PageSection>
      <PageSection>

      </PageSection>
    </Box>
  );
}
