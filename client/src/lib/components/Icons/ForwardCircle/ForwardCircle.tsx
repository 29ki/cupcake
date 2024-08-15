import React from 'react';
import {Path} from 'react-native-svg';
import {IconType} from '..';
import {COLORS} from '../../../../../../shared/src/constants/colors';
import Icon from '../Icon';

export const ForwardCircleIcon: IconType = ({fill = COLORS.BLACK, style}) => (
  <Icon style={style}>
    <Path
      d="M14.99 24.728c5.34 0 9.747-4.407 9.747-9.737s-4.416-9.737-9.755-9.737c-5.33 0-9.728 4.407-9.728 9.737s4.407 9.737 9.737 9.737Zm0-1.94a7.76 7.76 0 0 1-7.777-7.797 7.75 7.75 0 0 1 7.769-7.788 7.783 7.783 0 0 1 7.806 7.788 7.77 7.77 0 0 1-7.797 7.797Zm4.86-7.797c0-.254-.094-.461-.31-.669l-3.203-3.154a.766.766 0 0 0-.564-.226c-.443 0-.763.33-.763.772a.81.81 0 0 0 .245.574l1.139 1.093 1.055.857-1.921-.095h-4.596c-.48 0-.819.358-.819.848 0 .48.339.847.82.847h4.595l1.93-.084-1.054.847-1.15 1.093a.74.74 0 0 0-.244.574c0 .443.32.782.763.782a.775.775 0 0 0 .564-.236l3.202-3.145c.207-.207.311-.414.311-.678Z"
      fill={fill}
    />
  </Icon>
);
