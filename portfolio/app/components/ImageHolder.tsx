import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {useState} from 'react'

interface ImageHolderProps {
  isRotating: boolean;
  width: number | string;
  height: number | string;
  imageList: string[];
  captionList: string[];
}

const ImageHolder: React.FC<ImageHolderProps> = ({
  width,
  height,
  imageList,
  isRotating,
  captionList,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveringIndex, setHoveringIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const animationDuration = 500; // Duration in milliseconds

  const imageCount = imageList.length;

  const clearRotationInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const startRotationInterval = () => {
    if (isRotating && imageCount > 1) {
      clearRotationInterval();
      intervalRef.current = setInterval(() => {
        nextPicture();
      }, 4000);
    }
  };

  const prevPicture = () => {
    if (!isAnimating) {
      clearRotationInterval();
      setDirection('prev');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((currentIndex) =>
          currentIndex === 0 ? imageCount - 1 : currentIndex - 1
        );
        setIsAnimating(false);
        startRotationInterval();
      }, animationDuration);
    }
  };

  const nextPicture = () => {
    if (!isAnimating) {
      clearRotationInterval();
      setDirection('next');
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((currentIndex) => (currentIndex + 1) % imageCount);
        setIsAnimating(false);
        startRotationInterval();
      }, animationDuration);
    }
  };

  React.useEffect(() => {
    if (isRotating) startRotationInterval();
    return () => clearRotationInterval(); // Cleanup on unmount
  }, [isRotating, imageList]);

  // Calculate indices for previous and next images
  const prevImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
  const nextImageIndex = (currentImageIndex + 1) % imageCount;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%" overflow="hidden">
      <Box
        sx={{
          position: 'relative',
          width,
          height,
        }}
      >
        {[prevImageIndex, currentImageIndex, nextImageIndex].map((index, idx) => {
          const position = idx - 1; // -1 for previous, 0 for current, 1 for next
          let transform = `translateX(${position * 50}%)`;
          const scale = position === 0 ? 1 : 0.8;
          const opacity = position === 0 ? 1 : 0.6;
          const zIndex = position === 0 ? 2 : 1;
          const imageSrc = imageList[index];

          // Apply animation if animating
          if (isAnimating) {
            const animationOffset = direction === 'next' ? -100 : 100;
            transform = `translateX(${position * 100 + animationOffset}%)`;
          }

          return (
            <Box
              key={index}
              component="img"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                cursor: position !== 0 ? 'pointer' : 'default',
                transition: `transform ${animationDuration}ms ease-in-out`,
                transform: (isHovering && position === hoveringIndex) ? `${transform} scale(${0.9})` :`${transform} scale(${scale})`,
                opacity: (isHovering && position === hoveringIndex) ? 0.8 : opacity,
                zIndex,
              }}
              src={imageSrc}
              onClick={() => {
                if (isAnimating) return; // don't allow duplicate clicks
                if (position === -1) {
                  prevPicture();
                } else if (position === 1) {
                  nextPicture();
                }
              }}
              onMouseOver={() => {
                if(position !== 0){
                    setIsHovering(true);
                    setHoveringIndex(position);
                }
              }}
              onMouseOut={() => {
                if(position !== 0){
                    setIsHovering(false);
                    setHoveringIndex(0);
                }
              }}
            />
          );
        })}
      </Box>
      <Typography mt={1}>{captionList[currentImageIndex]}</Typography>
    </Box>
  );
};

export default ImageHolder;
