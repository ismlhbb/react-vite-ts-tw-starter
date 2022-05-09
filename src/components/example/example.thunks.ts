import { createAsyncThunk } from '@reduxjs/toolkit';
import { ExampleService } from 'services/example.service';
import { ThunkAPI } from 'utils/redux';

// Here we create our thunks so we can dispatch multiple action creators in asynchronous matter.
// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const getExampleData = createAsyncThunk<
  // Return type of the payload creator
  void,
  // First argument to the payload creator
  undefined,
  // Types for ThunkAPI
  ThunkAPI
>('@example/getExampleData', async (args, { rejectWithValue }) => {
  try {
    const response = await ExampleService.getSampleData();
    return response.results;
  } catch (err: any) {
    return rejectWithValue({
      code: '500',
      message: err.response.data,
    });
  }
});

export const editExampleData = createAsyncThunk<
  void,
  { id: string; name: string; age: string },
  ThunkAPI
>(
  '@example/editExampleData',
  async ({ id, name, age }, { rejectWithValue }) => {
    try {
      await ExampleService.editData(id, name, age);
    } catch (err: any) {
      return rejectWithValue({
        code: err.response.data.status.code,
        message: err.response.data.status.message,
      });
    }
  }
);
