import { ShowOrders } from '../orders/Orders'
import { Profileview } from '../Profile/profile'
import { SearchBar } from '../components/SearchBar/searchbar'
import { ShowCards } from '../Products/Cards'
import { Dashboard } from '../Dashboard/Dashboard'
import { MiniDashboard } from '../components/CHART/MiniDashboards'


import filterss from '../mocks/Ordersfilters.json'
import userfil from '../mocks/usersfilters.json'
export function Vistas({ valor }) {
  if (valor === "Dashboard") {
    return (
      <div className='Right'>
        <Dashboard />
      </div>)
  } else if (valor === "Products") {
    return (
      <div className='Right'>
        <MiniDashboard />
        <ShowCards endpoint={valor} />
      </div>
    )
  } else if (valor === "Orders") {
    return (
      <div className='Right'>
        <MiniDashboard />
        <ShowOrders endpoint={valor}/>
      </div>
    )
  } else if (valor === "Users") {
    return (
      <SearchBar
        endpoint={valor}
        filters={userfil.UserFilters}
      />
    )
  } else if (valor === "Profile") {
    return (
      <Profileview />
    )
  }
}
