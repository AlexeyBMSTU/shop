import React from 'react';
import './styles.scss';

const Left = () => {
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
        <a className='button-welcome' href='#'>
          ПРИСОЕДИНИТЬСЯ
        </a>
      </div>
    </div>
  );
};

export default Left;
