import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../../types/interfaces';

export interface AuthData {
  user: UserData | null,
  isAuth: boolean,
}

const initialState: AuthData = {
  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthData>) => {       
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    },
    addFavorite: (state, action: PayloadAction<string>) => {
      state.user?.favorites.push(action.payload);
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.favorites = state.user?.favorites.filter(
          (id) => id !== action.payload,
        );
      }
    },
    logout: () => (initialState),
  },
});

export const { setUser, addFavorite, deleteFavorite, logout } = authSlice.actions;
export default authSlice.reducer;