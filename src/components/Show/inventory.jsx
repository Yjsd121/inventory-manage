import elementos from '../../mocks/Elementos.json'

export function Inventory () {
  const elementss = elementos.inventory
  return (
    <section>
      <ul>
        {
          elementss.map(ele => (
            <li key={ele.id}>
              <p>{ele.name}</p>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
