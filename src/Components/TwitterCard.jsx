import React from 'react'
import "../App.css"

export default function TwitterCard(props) {
  return (
    <div className='column col-4'>
      <div className="card">
    <div className="card-header">
        <figure className="avatar avatar-lg">
    <img src={props.avatar} alt='Pineda avatar' />
</figure>
        <p className='full_name_p'>{props.fullname}</p>
        <span className='user_name_span'>{props.username}</span>
        <span> <span className='dot_X'>•</span> Jan 29, 2022</span>
        <i class="fa-solid fa-ellipsis"></i>
    </div>


    <p>
    Ese momento cuando descubrí que A11y significa "accessibility" o
accesibilidad.
<br /><br />
Esto es un numerónimo (en inglés, numeronym) que no es mas que una
palabra donde se utiliza un número para formar una abreviación.
<br /><br />
En el caso del A11y: A + 11 caracteres + y
<br />
Pero existen otros 👇
    </p>
    <div className="card-footer">

      <button className="fa-regular fa-comment">
            <span>3</span>
      </button>

      <button className="fa-solid fa-layer-group">
      </button>

      
      <button className="fa-sharp fa-solid fa-retweet">
      </button>
      <button className="fa-regular fa-heart">
      </button>
     
      <button className="fa-solid fa-chart-column">
      
      </button>
      
      <button className="fa-solid fa-arrow-up-from-bracket">
      </button>
    </div>
</div>
        </div>
  )
}

TwitterCard.defaultProps = {
    fullname: "pinedax",
    username: '@pinedax_dev',
    avatar: "https://pbs.twimg.com/profile_images/1126328510199549954/mH73XZoI_400x400.jpg",
  }
  