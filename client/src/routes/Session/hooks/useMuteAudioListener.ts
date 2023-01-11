import {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {MicrophoneOffIcon} from '../../../lib/components/Icons';

import {DailyContext} from '../../../lib/daily/DailyProvider';
import useSessionNotificationsState from '../state/sessionNotificationsState';
import useSessionState from '../state/state';
import useIsSessionHost from './useIsSessionHost';
import useSessionSlideState from './useSessionSlideState';

const useMuteAudioListener = () => {
  const {t} = useTranslation('Screen.Session');
  const {toggleAudio} = useContext(DailyContext);
  const sessionState = useSessionState(({state}) => state);
  const slideState = useSessionSlideState();
  const isSessionHost = useIsSessionHost();
  const addNotification = useSessionNotificationsState(
    state => state.addNotification,
  );

  useEffect(() => {
    if (sessionState?.playing && slideState?.current.type !== 'sharing') {
      toggleAudio(false);

      if (isSessionHost) {
        addNotification({
          text: t('notifications.muted'),
          Icon: MicrophoneOffIcon,
        });
      }
    }
  }, [
    toggleAudio,
    sessionState?.playing,
    addNotification,
    t,
    isSessionHost,
    slideState,
  ]);
};

export default useMuteAudioListener;
