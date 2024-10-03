import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Course {
  id: string;
  title: string;
  progress: number;
}

interface CourseState {
  courses: Course[];
}

const initialState: CourseState = {
  courses: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action: PayloadAction<Course[]>) => {
      state.courses = action.payload;
    },
    updateCourseProgress: (state, action: PayloadAction<{ id: string; progress: number }>) => {
      const course = state.courses.find(c => c.id === action.payload.id);
      if (course) {
        course.progress = action.payload.progress;
      }
    },
  },
});

export const { setCourses, updateCourseProgress } = courseSlice.actions;
export default courseSlice.reducer;