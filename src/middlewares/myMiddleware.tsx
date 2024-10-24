import { createListenerMiddleware } from '@reduxjs/toolkit';
import { getCurrentUser, isUserInUserList } from "../util/authUtil";
import { setUser } from '../store/features/authSlice';

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
    actionCreator: setUser,
    effect: async (action, listenerApi) => {
      listenerApi.cancelActiveListeners();
      if (!action.payload.isAuth) {
        const user = getCurrentUser();
        if (user) {
          const isUserInList = isUserInUserList(user.name);
          isUserInList &&
            listenerApi.dispatch(
              setUser({
                isAuth: true,
                user: { ...isUserInList, password: user.password },
              }),
            );
        }
      }
    }
})

