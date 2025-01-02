import React from 'react';
import './styles.scss';
import { useNavigate } from 'react-router-dom';

const Left = () => {
  const navigate = useNavigate();

  const toAuth = () => {
    navigate('/auth');
  };
  return (
    <div className='left-welcome'>
      <div className='information-welcome'>
        <h1>Vlog Your Travel</h1>
        <h2>ВОСПОМИНАНИЯ В КАЖДОМ КАДРЕ</h2>
        <p>
          Делитесь яркими моментами из разных уголков мира, создавая свой личный
          тревел-влог. <br></br>
          Присоединяйтесь к нашему сообществу путешественников и делитесь своими
          впечатлениями с миром!
        </p>
        <a onClick={toAuth} className='button-welcome'>
          ПРИСОЕДИНИТЬСЯ
        </a>
      </div>
    </div>
  );
};

export default Left;
