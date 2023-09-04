import 'firebase-functions';
import {firestore} from 'firebase-admin';
import {Timestamp} from 'firebase-admin/firestore';
import {Feedback} from '../../../shared/src/types/Feedback';
import {getData} from '../../../shared/src/modelUtils/firestore';
import {SessionMode} from '../../../shared/src/schemas/Session';

const EVENTS_COLLECTION = 'metricsEvents';
const USER_PROPERTIES_COLLECTION = 'metricsUserProperties';
const FEEDBACK_COLLECTION = 'metricsFeedback';

type Property = boolean | number | string;
type Properties = {[key: string]: Property};

export const logEvent = async (
  userId: string,
  timestamp: Date,
  event: string,
  properties: Properties = {},
) => {
  await firestore()
    .collection(EVENTS_COLLECTION)
    .add({
      userId,
      timestamp: Timestamp.fromDate(timestamp),
      event,
      properties,
    });
};

export const setUserProperties = async (
  userId: string,
  properties: Properties = {},
  once = false, // Overwrite existing properties?
) => {
  const collectionRef = firestore()
    .collection(USER_PROPERTIES_COLLECTION)
    .doc(userId);

  if (once) {
    // Does not overwrite already exising properties
    await firestore().runTransaction(async transaction => {
      const propertiesRef = await transaction.get(collectionRef);

      await transaction.set(
        collectionRef,
        {
          ...properties,
          ...propertiesRef.data(),
          updatedAt: Timestamp.now(),
        },
        {merge: true},
      );
    });
  } else {
    await collectionRef.set(
      {
        ...properties,
        updatedAt: Timestamp.now(),
      },
      {merge: true},
    );
  }
};

export const addFeedback = async (feedback: Feedback) => {
  await firestore()
    .collection(FEEDBACK_COLLECTION)
    .add({
      ...feedback,
      createdAt: Timestamp.now(),
    });
};

export const getFeedbackByExercise = async (
  exerciseId: string,
  mode?: SessionMode,
) => {
  let query = firestore()
    .collection(FEEDBACK_COLLECTION)
    .where('exerciseId', '==', exerciseId);

  if (mode) {
    query = query.where('mode', '==', mode);
  }

  const snapshot = await query.orderBy('createdAt', 'desc').get();
  return snapshot.docs.map(getData<Feedback>);
};
