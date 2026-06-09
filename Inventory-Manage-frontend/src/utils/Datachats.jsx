import { useState, useEffect } from "react"

export function useChartData(endpoint) {
  const [chartData, setChartData] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
    fetch(`http://localhost:3000/${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Server error")
        return res.json()
      })
      .then(data => {
        setChartData(data || [])
      })
      .catch(error => console.log(error))
  }, [endpoint])

  return chartData
}