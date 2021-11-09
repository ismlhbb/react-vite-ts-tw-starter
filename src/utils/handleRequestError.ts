import { Dispatch } from 'react';
import { Meta } from 'models/Meta';

/**
 * Function to convert error object to Meta response format that
 * can be dispatched to reducer to indicate errors and show message
 * toast/dialogs
 * @param err Error object
 * @param dispatch Redux dispatch function
 */
export const handleRequestError = (err: any, dispatch: Dispatch<any>): Meta => {
  const meta: Meta = {
    code: 500,
    message: 'Please try again later',
  };

  if (err.response && err.response.data && err.response.data.meta) {
    process.env.NODE_ENV !== 'production' && console.log(err.response.data);

    meta.code = err.response.data.meta.code;
    meta.message =
      err.response.data.meta.message || err.response.data.meta.status;

    if (meta.code == 2001 || meta.code == 500) {
      console.log(meta);
    }
  } else {
    process.env.NODE_ENV !== 'production' && console.log(err);

    meta.code = '';
    meta.message = '';

    console.log(err);
  }

  return meta;
};
