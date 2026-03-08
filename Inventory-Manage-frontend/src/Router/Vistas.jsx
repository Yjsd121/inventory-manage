import { ShowOrders } from '../components/orders/Orders'
import { Profileview } from '../components/Profile/profile'
import { SearchBar } from '../components/SearchBar/searchbar'
import { ShowCards } from '../components/Cards/Cards'

import cards from '../mocks/ProductsFilters.json'
import filterss from '../mocks/Ordersfilters.json'
import userfil from '../mocks/usersfilters.json'

export function Vistas ({ valor, SelectedData, setFilters, selectedfilters, setselectedData }) {
  if (valor === "Dashboard") {
    return <h2>Dashboards</h2>
  } else if (valor === "Products") {
    return (
      <div>
        <SearchBar endpoint ={valor} filters={cards.productFilters} setFilters={setFilters} setselectedData={setselectedData} />
        <ShowCards elementss={SelectedData} selectedfilters={selectedfilters} />
      </div>
    )
  } else if (valor === "Orders") {
    return (
      <div>
        <SearchBar endpoint ={valor} filters={filterss.orderFilters} setFilters={setFilters} setselectedData={setselectedData} />
        <ShowOrders orderss={SelectedData} />
      </div>
    )
  } else if (valor === "Users") {
    return (
      <SearchBar endpoint ={valor} filters={userfil.UserFilters} setFilters={setFilters} setselectedData={setselectedData} />
    )
  } else if (valor === "Profile") {
    return (
      <Profileview />
    )
  }
}
