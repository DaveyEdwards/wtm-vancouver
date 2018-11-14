import * as functions from 'firebase-functions';
import * as request from 'request';

export const meetupEventsApi = functions.https.onRequest(async (req, res) => {
  await request(
    `https://api.meetup.com/GDGCloudVancouver/events?&key=${
      functions.config().meetup.key
    }&sign=true&photo-host=public&page=20&fields=featured_photo`,
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        res.set('Access-Control-Allow-Origin', '*');
        res.json(response);
      }
    },
  );
});
