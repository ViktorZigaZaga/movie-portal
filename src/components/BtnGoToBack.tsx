import { useNavigate } from 'react-router-dom';

function BtnGoToBack() {
  const navigate = useNavigate();
  return <button className='form-btn btn-goBack'  onClick={() => navigate(-1)}>&laquo; Назад</button>;
}

export default BtnGoToBack;