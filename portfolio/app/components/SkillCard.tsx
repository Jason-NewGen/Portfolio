import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import * as React from 'react';
import Card from '@mui/material/Card'
import { styled } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia'
import Monospace from './styled/Monospace';
import CardHeader from '@mui/material/CardHeader';
import Chip from './styled/Chip';

const SkillCardBase = styled(
    Card, 
    { shouldForwardProp: (prop) => prop !== 'hoverable'} // shouldForwardProp is kind of like a failsafe, assuming the prop that gets passed isn't "hoverable", an error won't occur. Long answer is that the prop won't get forwarded to the DOM if it isn't "hoverable" before the element renders, causing no issue of it returning an error
    )<{hoverable: boolean}>(({hoverable, theme}) => ({
        borderColor: "#18ad55",
        borderWidth: 2,
        backgroundColor: "inherit",
        borderStyle: 'solid',
        width: "100%",
        height: "100%",
        transition: hoverable
            ? 'transform 0.3s ease, border-color 0.3s ease'
            : undefined,
        ...(hoverable && {
            '&:hover': {
                transform: 'scale(1.01)',
                borderColor: 'white',
                cursor: 'pointer',
            },
        }),
}));

interface SkillCardProps {
    title: string;
    image: string; 
    skills: string[];
    learnMore?: string; // link
}

const LearnMoreButton = styled(Button)(({
    width: "8%",
    height: "2.5%",
    borderWidth: "1px",
    borderColor: "#18ad55",
    borderStyle: "solid",
    color: 'white',
    minWidth: 'unset',
    minHeight: 'unset',
    borderRadius: '32px'
}))

const SkillCard: React.FC<SkillCardProps> = ({
    image,
    skills,
    learnMore,
    title,
}) => {

    const hoverable = Boolean(learnMore);

    const SkillCardContent = (
        <SkillCardBase hoverable={hoverable}>
            <CardMedia
                sx={{
                    height: "50%"
                }}
                image={image}
            />
            <CardContent>
                <CardHeader title={<Monospace fontSize="100%" color="white">{title}</Monospace>} 
                    sx={{
                        ml: -1,
                        mt: -2,
                    }}
                />
                <Box display="flex" flexWrap="wrap" width="100%" height="100%" mt={-2}>
                    {skills.map((skill) => {
                        return (
                            <Chip 
                                sx={{
                                    mx: {
                                        md: 0.5,
                                        xs: 0.5,
                                    },
                                    my: {
                                        md: 0.5,
                                        xs: 0.25,
                                    }
                                    
                            }} key={skill}><Monospace>{skill}</Monospace></Chip>
                        )
                    })}
                </Box>
            </CardContent>
        </SkillCardBase>
    )

    return learnMore ? <a href={learnMore}>{SkillCardContent}</a> : SkillCardContent
}

export default SkillCard;