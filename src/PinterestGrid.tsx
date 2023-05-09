import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Button,
  Box,
} from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import photos from './photos.json';
import _ from 'lodash';

const randomPhotos = _.shuffle(photos);

export default function PinterestGrid() {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  return (
    <Box>
      <Masonry columns={7} spacing={2}>
        {randomPhotos.map((photo, index) => (
          <Box
            onMouseEnter={() => setActiveIndex(index)}>
            <img
              style={{
                width: '100%',
                display: 'block',
                borderRadius: '8px',
                marginBottom: '8px',
                cursor: 'pointer',
                filter: activeIndex === index ? 'brightness(80%)' : 'brightness(100%)',
              }}
              src={photo.regular}
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  );
}
