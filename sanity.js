/* eslint-disable import/prefer-default-export */
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SANITY_PROJECT_ID } from '@env';

const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v1',
});

const builder = imageUrlBuilder(client);

export const getImageUrl = (source) => builder.image(source);

export default client;
