import { FC } from 'react';
import goldStar from '../assets/btn/35788-ffc107.svg';
import grayStar from '../assets/btn/35788-9e9e9e.svg';

interface BtnAddFavoritesProps {
  onClick:() => void,
  active: boolean
}

const BtnAddFavorites: FC<BtnAddFavoritesProps> = ({ onClick, active }) => {

  return (
    <>
      {!active 
        ? <button className='form-btn' onClick={onClick}>
            <img className='star' src={goldStar} alt='Добавить в избранные' />{' '} 
            Добавить в избранные{' '}
            <img className='star' src={goldStar} alt='Добавить в избранные' />
          </button>
        : <button className='form-btn' onClick={onClick}>
            <img className='star' src={grayStar} alt='Удалить из избранных' />{' '}
            Удалить из избранных{' '}
            <img className='star' src={grayStar} alt='Удалить из избранных' />
          </button>
      }
    </>
  );
};

export default BtnAddFavorites;