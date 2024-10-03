import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { 
  setModelTrained, 
  setAccuracy, 
  setModelInfo, 
  setPrediction, 
  setLoading, 
  setError,
  selectAIModelState
} from '@/store/slices/aiModelSlice';
import { trainModel, makePrediction } from '@/services/api';

export const useAIModel = () => {
  const dispatch = useDispatch<AppDispatch>();
  const aiModelState = useSelector(selectAIModelState);

  const handleTrainModel = async () => {
    try {
      dispatch(setLoading(true));
      const response = await trainModel();
      dispatch(setModelTrained(true));
      dispatch(setAccuracy(response.data.accuracy));
      dispatch(setModelInfo(response.data.model_info));
    } catch (error) {
      dispatch(setError('Error training model: ' + (error instanceof Error ? error.message : String(error))));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleMakePrediction = async (features: number[]) => {
    try {
      dispatch(setLoading(true));
      const response = await makePrediction(features);
      dispatch(setPrediction(response.data.prediction));
    } catch (error) {
      dispatch(setError('Error making prediction: ' + (error instanceof Error ? error.message : String(error))));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return { ...aiModelState, handleTrainModel, handleMakePrediction };
};