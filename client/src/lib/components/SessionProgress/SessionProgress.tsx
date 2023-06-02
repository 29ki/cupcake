import hexToRgba from 'hex-to-rgba';
import React, {Fragment, useCallback, useMemo} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {COLORS} from '../../../../../shared/src/constants/colors';

const ProgressContainer = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const ProgressLineCompleted = styled.View({
  flex: 1,
  height: 2,
  backgroundColor: COLORS.PRIMARY,
});

const ProgressLineCompletedGradient = styled(LinearGradient)({
  flex: 1,
  height: 2,
});

const ProgressLineNotStarted = styled.View({
  flex: 1,
  height: 2,
  backgroundColor: COLORS.PURE_WHITE,
});

const ProgressItem = styled.View<{completed: boolean}>(({completed}) => ({
  height: 14,
  width: 14,
  borderRadius: 24,
  backgroundColor: completed ? COLORS.MEDIUM_GREEN : COLORS.PURE_WHITE,
}));

type SessionProgressProps = {
  items: Array<boolean>;
};

const SessionProgress: React.FC<SessionProgressProps> = ({items}) => {
  const colors = useMemo(
    () => [
      hexToRgba(COLORS.MEDIUM_GREEN, 1),
      hexToRgba(COLORS.MEDIUM_GREEN, 1),
      hexToRgba(COLORS.PURE_WHITE, 1),
      hexToRgba(COLORS.PURE_WHITE, 1),
      hexToRgba(COLORS.PURE_WHITE, 1),
    ],
    [],
  );

  const start = useMemo(() => ({x: 0, y: 0}), []);
  const end = useMemo(() => ({x: 1, y: 0}), []);

  const renderProgressLine = useCallback(
    (index: number) => {
      if (items[index + 1]) {
        return <ProgressLineCompleted />;
      }
      return (
        <ProgressLineCompletedGradient
          colors={colors}
          start={start}
          end={end}
        />
      );
    },
    [items, colors, start, end],
  );

  return (
    <ProgressContainer>
      {items.map((completed, index) => (
        <Fragment key={index}>
          <ProgressItem completed={completed} />
          {index !== items.length - 1 &&
            (completed ? (
              renderProgressLine(index)
            ) : (
              <ProgressLineNotStarted />
            ))}
        </Fragment>
      ))}
    </ProgressContainer>
  );
};

export default React.memo(SessionProgress);
