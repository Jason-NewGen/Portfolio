'use client'

import React, { useEffect, useRef } from 'react';
import { Box, Card, CircularProgress, Button } from '@mui/material'
import Monospace from '@/app/components/styled/Monospace'
import 'mui-player/dist/mui-player.min.css';
import { Mp } from '@mui/icons-material';
import BouncingArrow from '@/app/components/BouncingArrow';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {GitHub, Description} from '@mui/icons-material'


export default function ChessRobotBlog(){

    const pageOne = useRef<HTMLDivElement>(null);
    const pageTwo = useRef<HTMLDivElement>(null);

    const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
        sectionRef.current?.scrollIntoView({behavior: "smooth"});
    }

    const ContentText = styled(Monospace)(({ theme }) => ({
        textIndent: '50px',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        fontSize: 14, // Default font size for xs screens
        [theme.breakpoints.up('md')]: {
          fontSize: 16, // Font size for md screens and up
        },
    }));

    const PageSection = styled(Box)(({
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        fontSize: 4
    }));

    useEffect(() => {
        // Dynamically import MuiPlayer to prevent TypeScript errors
        import('mui-player').then(({ default: MuiPlayer }) => {
            const player = new MuiPlayer({
                container: '#mui-player',
                src: '../files/ChessRobotDemo.mp4', // Update the path to your video file
                autoplay: true,
                // Add other options as needed
            });
        });

    }, []);

    return (
        <Box>
            {/* Header */}
            <Box height="100vh" display="flex" width="100%" flexDirection="column" alignItems="center" ref={pageOne}>
                <Box display="flex" width="100%" justifyContent="center">
                <Monospace fontSize="8vh" my={3} textAlign="center">King&apos;s Gambit</Monospace>
                </Box>
                {/* Video File + Caption */}
                <Box display="flex" width="100%" justifyContent="center" alignItems="center" flexDirection="column">
                    <Box width="60%" height="80%" display="flex" justifyContent="center" alignItems="center">
                        <Box id="mui-player" width="100%" height="100%"/>
                    </Box>
                    <Monospace textAlign="center" my={3}>Figure 1: Video Demo of Player Getting Checkmated</Monospace>
                </Box>
                <Button
                    disableRipple
                    startIcon={<BouncingArrow sx={{
                    color: "white"
                    }}/>}
                    onClick={() => scrollToSection(pageTwo)}
                />
            </Box>
            {/* Explanation + Link to Github + Final Paper */}
            <Box height="100vh" ref={pageTwo}>
                <Box m={4}>
                    <Monospace sx={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                    }} py={2}>Introduction</Monospace>
                    <ContentText>
                        The King&apos;s Gambit is the name for our fully autonomous Chess Robot, capable of recognizing, computing, and physically executing chess moves. This
                        project combines hardware and software to design an autonomous, intelligent robot capable of playing a full game of chess against a human opponent.
                        This product aims to expand the scope of digital engines to the phyiscal world. Playing against the robot will allow anyone to interact directly with
                        the mind of the greatest chess players.
                    </ContentText>
                    <ContentText>
                        We utilize mechanical calculations to physically execute the instructions suggested by the Stockfish API, via a gantry. We use a camera in order to detect
                        the chessboard and the pieces on it, then use external APIs to convert the board and the pieces on it to digtal values called FEN notation, which is standard notation
                        for chessboard arrangements. These are fed into the Stockfish API, the most powerful CPU chess engine, which then calculates the next beest move based on the level of difficulty. 
                    </ContentText>
                    <ContentText>
                        The gantry synthesizes the digital elements to create the robot with great functionality. The design fits around any play space less than or equal to 16 inches. 
                        Servo motors, stepper motos, and timing belts actuate the gantry in discrete steps to pick up and move pieces. The frame consists of off-shelf-hardware and custom-designed 
                        3D printed components. A micro-controller and stepper motor drivers instruct the motors on the gantry. The electronic components and motors are powered from the laptop
                        connected to the micro-controller and an external power supply, respectively.
                    </ContentText>
                    <Box display="flex" width="100%" justifyContent="center" mt={4}>
                        <Box
                            component="img"
                            src="../images/ChessRobot_Gantry.gif"
                            sx={{
                                objectFit: 'contain',
                                width: '75vh'
                            }}
                        />
                    </Box>
                    <Box display="flex" justifyContent="center" mt={1}><Monospace sx={{textDecoration: 'underline'}}>More Info</Monospace><Monospace>:</Monospace></Box>
                    <Box display="flex" width="100%" justifyContent="center">
                    <IconButton
                        title="GitHub"
                        sx={{
                            color: "white",
                            "&:hover": {
                            color: "#18ad55",
                            },
                            mx: 1
                        }}
                        onClick={() => window.open('https://github.com/HRBialik18/Gambit2.0')}
                    >
                        <GitHub />
                    </IconButton>
                    <IconButton
                        title="Research Paper"
                        sx={{
                            color: "white",
                            "&:hover": {
                            color: "#18ad55",
                            },
                            mx: 1
                        }}
                        onClick={() => window.open('/files/KingsGambitPaper.pdf')}
                    >
                        <Description />
                    </IconButton>
                    </Box>
                </Box>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}