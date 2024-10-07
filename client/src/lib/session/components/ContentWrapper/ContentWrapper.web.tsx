import React from 'react';
import styled from 'styled-components/native';

const ContentWrapper = styled.View({
  flex: 1,
  overflow: 'scroll',
});

export default React.memo(ContentWrapper);