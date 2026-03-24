import { useState, useEffect } from "react"

export function useChartData(endpoint) {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/${endpoint}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Server error")
        }
        return res.json()
      })
      .then(data => {
        if (Array.isArray(data)) {
          setChartData(data)
        } else {
          setChartData(data.data || [])
        }
      })
      .catch(error => console.log("AQUI HAY UN GRAN ERROR", error))
  }, [endpoint]) 

  return chartData
}