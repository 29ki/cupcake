import React from 'react';
import {Path} from 'react-native-svg';
import {IconType} from '..';
import {COLORS} from '../../../../../../shared/src/constants/colors';
import Icon from '../Icon';

export const SpeakerIcon: IconType = ({fill = COLORS.BLACK, style}) => (
  <Icon style={style}>
    <Path
      d="M14.07 22.5c.707 0 1.225-.527 1.225-1.224V6.896c0-.706-.518-1.27-1.243-1.27-.48 0-.82.206-1.337.696l-3.936 3.682a.298.298 0 0 1-.217.085H5.897c-1.394 0-2.147.772-2.147 2.232v3.503c0 1.46.753 2.231 2.147 2.231h2.665c.085 0 .15.029.217.085l3.936 3.71c.47.452.866.65 1.356.65Zm8.372-1.723c.434.264.961.17 1.262-.273 1.224-1.733 1.94-4.059 1.94-6.45 0-2.393-.706-4.728-1.94-6.451-.301-.443-.828-.546-1.262-.273-.452.282-.518.847-.178 1.346.998 1.47 1.572 3.381 1.572 5.377 0 1.987-.584 3.899-1.572 5.377-.33.5-.274 1.055.178 1.347Zm-3.785-2.524a.885.885 0 0 0 1.224-.245c.763-1.017 1.215-2.457 1.215-3.955 0-1.497-.452-2.928-1.215-3.955a.874.874 0 0 0-1.224-.235c-.462.301-.556.857-.179 1.403.518.744.81 1.742.81 2.787 0 1.046-.302 2.034-.81 2.788-.367.546-.283 1.101.179 1.412Z"
      fill={fill}
    />
  </Icon>
);