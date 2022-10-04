import React from 'react';
import styled from 'styled-components/native';
import {ExerciseSlide} from '../../../../../../shared/src/types/Content';
import ParticipantSpotlight from './Slides/ParticipantSpotlight';
import {COLORS} from '../../../../../../shared/src/constants/colors';
import Content from './Slides/Content';
import useTempleExercise from '../../hooks/useTempleExercise';

type WrapperProps = {backgroundColor?: 'string'};
const Wrapper = styled.View<WrapperProps>(({backgroundColor}) => ({
  flex: 1,
  backgroundColor: backgroundColor ?? COLORS.WHITE,
}));

type SlideProps = {
  slide: ExerciseSlide;
  active: boolean;
};

export const Slide = React.memo(({slide, active}: SlideProps) => {
  const exercise = useTempleExercise();
  return (
    <Wrapper backgroundColor={exercise?.theme?.backgroundColor}>
      {slide.type === 'participantSpotlight' && (
        <ParticipantSpotlight active={active} />
      )}
      {slide.type === 'content' && <Content slide={slide} active={active} />}
      {slide.type === 'reflection' && <Content slide={slide} active={active} />}
      {slide.type === 'sharing' && <Content slide={slide} active={active} />}
    </Wrapper>
  );
});
