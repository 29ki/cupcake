import React from 'react';
import {Path} from 'react-native-svg';
import {IconType} from '..';
import {COLORS} from '../../../../../../shared/src/constants/colors';
import Icon from '../Icon';

export const MicrophoneIcon: IconType = ({fill = COLORS.BLACK, style}) => (
  <Icon style={style}>
    <Path
      d="M15 17.097c1.912 0 3.324-1.432 3.324-3.522V7.228c0-2.09-1.412-3.522-3.324-3.522s-3.324 1.431-3.324 3.522v6.347c0 2.09 1.412 3.522 3.324 3.522ZM7.806 13.79c0 3.9 2.59 6.564 6.318 6.922v1.912h-3.456c-.499 0-.913.395-.913.894 0 .49.414.895.913.895h8.664a.91.91 0 0 0 .913-.895c0-.499-.414-.894-.913-.894h-3.456v-1.912c3.729-.358 6.319-3.023 6.319-6.922v-1.855a.88.88 0 0 0-.895-.885c-.5 0-.914.386-.914.885v1.79c0 3.21-2.175 5.32-5.386 5.32-3.211 0-5.386-2.11-5.386-5.32v-1.79c0-.499-.405-.885-.904-.885-.5 0-.904.386-.904.885v1.855Z"
      fill={fill}
    />
  </Icon>
);
