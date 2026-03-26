
import { getcolor } from './getcolor';

export function KipsMap({chart}){
  return(
    chart.labels.map((item, index) => (
          <div className='chart' key={index}>

            <span className='title'>{item.name}</span>

            <span className='value'>{item.value}</span>

            <div className={`indicador ${getcolor(item.value)}`}></div>

          </div>
        ))
  )
}