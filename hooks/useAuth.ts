import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { auth } from "@/lib/firebase";
import { setUser, setLoading, setError, clearUser } from '@/store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleLogout = async () => {
    try {
      dispatch(setLoading(true));
      await auth.signOut();
      dispatch(clearUser());
    } catch (error) {
      console.error("Error signing out:", error);
      dispatch(setError("Failed to sign out. Please try again."));
    }
  };

  return { user, isLoading, error, handleLogout };
};