import { ShowOrders } from '../orders/Orders'
import { Profileview } from '../Profile/profile'
import { SearchBar } from '../components/SearchBar/searchbar'
import { ShowCards } from '../Products/Cards'
import { Dashboard } from '../Dashboard/Dashboard'
import { MiniDashboard } from '../components/CHART/MiniDashboards'


import filterss from '../mocks/Ordersfilters.json'
import userfil from '../mocks/usersfilters.json'
export function Vistas({ valor }) {
  if (valor === "dashboard") {
    return (
      <div className='Right'>
        <Dashboard endpoint={valor}/>
      </div>)
  } else if (valor === "products") {
    return (
      <div className='Right'>
        <MiniDashboard valor={valor}/>
        <ShowCards endpoint={valor} />
      </div>
    )
  } else if (valor === "orders") {
    return (
      <div className='Right'>
        <MiniDashboard valor={valor}/>
        <ShowOrders endpoint={valor}/>
      </div>
    )
  } else if (valor === "users") {
    return (
      <SearchBar
        endpoint={valor}
        filters={userfil.UserFilters}
      />
    )
  } else if (valor === "profile") {
    return (
      <Profileview />
    )
  }
}
