'use client' // without this line, this file would default to a React Server Component, so the page would run on the server rather than the client.
// This allows us to import React Hooks like useState, whereas a server component would not have let us

import React, { useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import Monospace from '@/app/components/styled/Monospace'
import BouncingArrow from '@/app/components/BouncingArrow';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {GitHub, Description} from '@mui/icons-material'
import { useRouter } from 'next/navigation'
import HomeIcon from '@mui/icons-material/Home';

export default function ReLearnCraftBlog(){

    const router = useRouter();
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

    return (
        <Box>
            <Button
                disableRipple
                onClick={() => {router.push('/')}}
            >
                <HomeIcon
                    sx={{
                        color: "white",
                        mt: 1,
                        "&:hover": {
                            color: '#18ad55'
                        }
                    }}
                />
            </Button>
            <Box height="100vh" display="flex" width="100%" flexDirection="column" alignItems="center" ref={pageOne}>
                <Box display="flex" width="100%" justifyContent="center">
                    <Monospace fontSize="8vh" my={3} textAlign="center">ReLearnCraft: Reinforcement Learning Meets Minecraft</Monospace>
                </Box>
                {/* Slides from DDL */}
                <Box>
                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTCDMQFh4kcW9Xji6PfhSCuvWGc0iK3c4o_-PS_w7Oxik6CjJzRzM7Et-PL7__JhvEKE9Tzz0uddfTG/pubembed?start=false&loop=false&delayms=3000" width="960" height="569"></iframe>
                </Box>

                <Monospace mt={3}>Distributed Deep Learning Presentation on Reinforcement Learning in Minecraft</Monospace>
                <Button
                    disableRipple
                    startIcon={<BouncingArrow sx={{
                        color: "white",
                        my: 3
                    }}/>}
                    onClick={() => scrollToSection(pageTwo)}
                />
            </Box>

            <Box height="100vh" ref={pageTwo}>
                <Box m={4}>
                    <Monospace sx={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                    }} py={2}>Introduction</Monospace>
                    <ContentText>
                        ReLearnCraft (Or RLCraft for short) is our way of attempting to contribute to the growing environment of AI in minecraft. Our idea is mainly to get an agent to
                        complete tasks required to beat the game. Our focus for this project was getting our agent to chop a tree. However, with most reinforcement learning techniques, we
                        needed a foundation.
                    </ContentText>
                    <Monospace sx={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                    }} py={2}>Foundational Model</Monospace>
                    <ContentText>
                        Starting to teach an agent to chop a tree from scratch is really <u>really</u> <span style={{color: 'red'}}>hard</span>. It's like teaching a rock how to move. Get it? Cause it can't.    
                    </ContentText>
                    <Monospace>
                        That's why setting the foundation of movement and fundamentals of inputs is really important. 
                    </Monospace>
                    <br/>
                    <Monospace>
                        The data we use to get our agent some fundamental understanding is utilizing the internet's endless collection of Minecraft gameplay. A problem that comes with this, however,
                        is that we have no idea what inputs the video is doing in order to create those actions. Sure, we can assume that if we see the player jump, we can assume that the user clicked the spacebar
                        and we can just label that one frame as that.
                    </Monospace>
                    <br></br>
                    <Monospace>Which is fine! ... If we didn't have a life.</Monospace>
                    <br></br>
                    <Monospace>
                        Now what if I told you there's a way to automate the labelling of Minecraft footage, frame by frame, and record each and every input <span style={{fontWeight: 'bold'}}>JUST</span> from the video alone. Yea, it's called the Inverse Dynamics Model...
                        I'd be more excited to tell you about this if I had footage of the model labelling each frame and sending it in a json...
                    </Monospace>
                    <Monospace>Cool! Now what did we do with all of this input data? Heh</Monospace>
                    <Monospace>Heh... <span style={{fontSize: 10}}>hehehe...</span> <span style={{fontSize: 6}}>nothing...</span></Monospace>
                    <Monospace>
                        Instead, we decided to record our <span style={{fontWeight: 'bold'}}>OWN</span> data by playing Minecraft and chopping wood repeatedly for about 20 videos and had a labelling script ourselves, documenting all of our inputs
                        through a python script and returning a JSON file, which will be used to train our agent. Why use other people's data when we can use our own! Yep... That's why we came to that decision...
                    </Monospace>
                    <Monospace>After getting our input data into JSONs though, we can finally use input data and start training an agent. Our goal was for the agent to replicate our movements, so a common method for training a model to do this is through behavioural cloning.</Monospace>
                    <Monospace sx={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                    }} py={2}>Behavioural Cloning</Monospace>
                    <ContentText>
                        
                    </ContentText>
                    <Monospace sx={{
                        fontWeight: 'bold',
                        textDecoration: 'underline'
                    }} py={2}>Distributed Data Parallelism and Perlmutter, the SuperComputer</Monospace>
                </Box>
            </Box>
        </Box>
    )
}
