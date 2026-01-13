import { ShowOrders } from '../components/orders/Orders'
import { Profileview } from '../components/Profile/profile'
import { SearchBar } from '../components/SearchBar/searchbar'
import { ShowCards } from '../components/Cards/Cards'

import filterss from '../mocks/Ordersfilters.json'
import userfil from '../mocks/usersfilters.json'

export function Vistas ({ valor, elementss, orderss }) {
  if (valor === 0) {
    return <h2>Dashboards</h2>
  } else if (valor === 1) {
    return <ShowCards elementss={elementss} />
  } else if (valor === 2) {
    return (
      <div>
        <SearchBar filters={filterss.orderFilters} />
        <ShowOrders orderss={orderss} />
      </div>
    )
  } else if (valor === 3) {
    return (
      <SearchBar filters={userfil.UserFilters} />
    )
  } else if (valor === 4) {
    return (
      <Profileview />
    )
  }
}
