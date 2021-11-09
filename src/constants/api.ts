/**
 * List of media types
 */
export const MediaType = {
  APPLICATION_JSON: 'application/json',
  APPLICATION_URLENCODED: 'application/x-www-form-urlencoded',
  MULTIPART_FORM_DATA: 'multipart/form-data',
};

/**
 * List of API endpoints
 */
export const Api = {
  BaseURL: import.meta.env.VITE_APP_API_BASE_URL || '',
  SAMPLE_DATA: '/api/sample-data',
  SAMPLE_DATA_BY_ID: (id: string) => `/api/sample-data/${id}`,
  GetPokeList: () => `/pokemon`,
};
