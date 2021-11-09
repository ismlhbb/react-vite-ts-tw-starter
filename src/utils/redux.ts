import { AsyncThunk } from '@reduxjs/toolkit';
import { AnyAction, Dispatch } from 'redux';
import { Meta } from 'models/Meta';

export interface ThunkAPI {
  dispatch: Dispatch<any>;
  state: any;
  rejectValue: Meta;
}

type GenericAsyncThunk = AsyncThunk<unknown, unknown, ThunkAPI>;

type PendingAction = ReturnType<GenericAsyncThunk['pending']>;
type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>;

export class ReduxUtils {
  static isPendingAction(reducerPrefix: string) {
    return (action: AnyAction): action is PendingAction =>
      action.type.startsWith(reducerPrefix) && action.type.endsWith('/pending');
  }

  static isRejectedAction(reducerPrefix: string) {
    return (action: AnyAction): action is RejectedAction =>
      action.type.startsWith(reducerPrefix) &&
      action.type.endsWith('/rejected');
  }
}
