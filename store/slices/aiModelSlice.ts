import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AIModelState {
  modelTrained: boolean;
  accuracy: number | null;
  modelInfo: any | null;
  prediction: string | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AIModelState = {
  modelTrained: false,
  accuracy: null,
  modelInfo: null,
  prediction: null,
  isLoading: false,
  error: null,
};

const aiModelSlice = createSlice({
  name: 'aiModel',
  initialState,
  reducers: {
    setModelTrained: (state, action: PayloadAction<boolean>) => {
      state.modelTrained = action.payload;
    },
    setAccuracy: (state, action: PayloadAction<number | null>) => {
      state.accuracy = action.payload;
    },
    setModelInfo: (state, action: PayloadAction<any>) => {
      state.modelInfo = action.payload;
    },
    setPrediction: (state, action: PayloadAction<string | null>) => {
      state.prediction = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    resetState: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { 
  setModelTrained, 
  setAccuracy, 
  setModelInfo, 
  setPrediction, 
  setLoading, 
  setError,
  resetState
} = aiModelSlice.actions;

export default aiModelSlice.reducer;

// Utility functions
export const selectAIModelState = (state: { aiModel: AIModelState }) => state.aiModel;
export const selectIsModelTrained = (state: { aiModel: AIModelState }) => state.aiModel.modelTrained;
export const selectAccuracy = (state: { aiModel: AIModelState }) => state.aiModel.accuracy;