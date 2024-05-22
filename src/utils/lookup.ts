import axios from 'axios';
import {SubscriberDetail} from '../types';
import {redis} from './redis';
import {config} from './config';

export async function getSubscriberDetails(
  subscriber_id: string,
  unique_key_id: string
) {
  const value = await redis.get(`${subscriber_id}-${unique_key_id}`);
  const subscribers: SubscriberDetail[] = JSON.parse(
    value === null ? '{}' : value
  );

  if (subscribers.length === 0) {
    const response = await axios.post(config.registryUrl, {
      subscriber_id,
      ukId: unique_key_id,
    });
    response.data
      .map((data: object) => {
        const {subscriber_url, ...subscriberData} = data as SubscriberDetail;
        return {
          ...subscriberData,
          unique_key_id: subscriber_url,
        };
      })
      .forEach((data: SubscriberDetail) => {
        try {
          subscribers.push({
            subscriber_id: data.subscriber_id,
            unique_key_id: data.unique_key_id,
            type: data.type,
            signing_public_key: data.signing_public_key,
            valid_until: data.valid_until,
          });
        } catch (error) {
          console.log(error);
        }
      });
    await redis.set(
      `${subscriber_id}-${unique_key_id}`,
      JSON.stringify(subscribers)
    );
  }

  return subscribers;
}
