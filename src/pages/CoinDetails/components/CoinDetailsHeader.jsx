import React from 'react';

const CoinDetailsHeader = ({ imgSrc, title }) => {
  return (
    <Flex gap={'20px'}>
      <Image src={imgSrc} height={'25px'} width="25px" alt="icon" />
      <Text color="#f2f2f2" fontSize="2.5rem">
        {title}
      </Text>
    </Flex>
  );
};
export default CoinDetailsHeader;
