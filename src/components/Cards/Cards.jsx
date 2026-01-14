import './Cards.css'
function Cards ({ Item }) {
  return (
    <ul className='inventario'>
      {
        Item
          .filter(item => { return (item.unitPrice >= 0 && (item.status === 'available')) })
          .map(item => (
            <li key={item.id}>
              <div className='Cards'>
                <img src='/react.svg' />
                <div className='Info'>
                  <p>Id: {item.id}</p>
                  <p>Name: {item.name}</p>
                  <p>status: {item.status}</p>
                  <p>Cant:{item.quantity}</p>
                  <p>${item.unitPrice}</p>
                </div>
              </div>
            </li>
          ))
      }
    </ul>
  )
}

export function ShowCards ({ elementss }) {
  const hasinventory = elementss?.length > 0
  return (
    <div className='show'>
      <div className='ShowCards'>
        {
          hasinventory
            ? <Cards Item={elementss} />
            : <h1> No hay inventario</h1>
        }
      </div>
    </div>
  )
}
