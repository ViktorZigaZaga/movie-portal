import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {addFavorite, deleteFavorite} from '../store/features/authSlice'
import { changeFavoriteList } from '../util/authUtil';

export const useFavorite = (id: string | undefined) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isAuth } = useAppSelector((state) => state.auth);
  const [inFavorite, setInFavorite] = useState(false);

  useEffect(() => {
    if (user?.favorites && isAuth && id) {
      setInFavorite(user.favorites.includes(id));
    } else {
      setInFavorite(false);
    }
  }, [user, isAuth, id]);

  const addInFavorite = () => {
    if (user?.name && isAuth && id) {
      if (inFavorite) {
        setInFavorite(false);
        dispatch(deleteFavorite(id));
        changeFavoriteList(user.name, id, false);
      } else {
        setInFavorite(true);
        dispatch(addFavorite(id));
        changeFavoriteList(user.name, id, true);
      }
    } else {
      navigate('/auth');
    }
  };

  return { inFavorite, addInFavorite };
};

