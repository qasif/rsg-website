import './card.css'

function Card  ({url, messg, messg2}) {
    return (
        <div className='maindiv2'>
              <div className='carddiv'>
                <div className='imgdiv'>
                  <img className='img' src={url}></img>
                </div>
                <div>
                  <span className='spantext my-2'>{messg}</span>
                </div>
                <div className='btn'>
                  <button className='btn100'>{messg2}</button>
                </div>
              </div>
            </div>
    )
}

export default Card;