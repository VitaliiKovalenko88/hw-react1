import { MagnifyingGlass } from 'react-loader-spinner';
import { Box, Wrapper } from './Loader.styled';
 import { createPortal } from 'react-dom';

const loaderRoot = document.querySelector('#loader-root');

export const Loader = () => {
  return createPortal (
    <Wrapper>
      <Box>
        <MagnifyingGlass
          visible={true}
          height="100"
          width="100"
          glassColor='#c0efff' color='#e15b64'
        />
      </Box>
    </Wrapper>, 
  loaderRoot,)
};