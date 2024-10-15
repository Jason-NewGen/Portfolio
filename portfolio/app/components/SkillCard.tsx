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


const SkillCardBase = styled(Card)(({
    borderColor: "#18ad55",
    borderWidth: "2px",
    backgroundColor: "inherit",
    width: "100%",
    height: "100%",
}))

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

    const handleCardClick = {

    }

    const SkillCardContent = (
        <SkillCardBase>
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