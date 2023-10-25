import styled from 'styled-components'

import user from '../assets/she.jfif'

import { AiOutlineMail, AiTwotoneSecurityScan } from 'react-icons/ai'




export const CardCliente = ({nombre,  apellido, correo, dni}) => {
  return (
    <Card>
        <div className="card__img">
          <img src= {user} alt="Foto de usuario" />
        </div>
        
        <div className="card__user">
            <h3 className='card__name'>{ `${nombre}   ${apellido} ` }</h3>

            <div className='card__correo'>
              <span><AiOutlineMail/></span>
              <p>{correo}</p>
            </div>

            <div className='card__id'>
              <span> <AiTwotoneSecurityScan/> </span>
              <p>{dni}</p>
            </div>

            
        </div>

        <div className="card__buttons">
           <button className='btn btn--blue'>Fallowing</button> 
           <button className='btn btn--white'>Add</button> 
        </div>  
    </Card>
  )
}


const Card = styled.div`
  width: 100%;
  width: 212px;
  height: 230px;
  border-radius: 20px;
  padding: 10px 20px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;


  .card__img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 5px;

    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  .card__user{
    text-align: center;
    color: #423b3be6;
    width: 100%;
    height: 70px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .card__name{
      color: #1d1919e6;
    }
  }

  .card__correo, .card__id{
    display: flex;
    align-items: center;
    justify-content: center;

    span{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right:2px;
    }
  }

  .card__buttons{
    width: 100%;
    display: flex;
    justify-content: space-around;

    .btn{
      border: none;
      outline: none;
      padding: 5px 10px;
      border-radius: 6px;
      width: 45%;
      cursor: pointer;

    }
    .btn--blue{
      background-color: blue;
      color: #eee;
    }

    .btn--white{
      border: 1px solid #a1a1a1 ;
    }
  }


`;
