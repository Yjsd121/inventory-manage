import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

function getKeys(data) {
  if (!data || data.length === 0) return {}

  const keys = Object.keys(data[0])

  const labelKey = keys.find(k => k !== 'Total' )
  const valueKey = keys.find(k => k === 'Total' )

  return { labelKey, valueKey }
}
export default function MyChart({ data }) {
  const { labelKey, valueKey } = getKeys(data)
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey={labelKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Total" fill="#9694b8" />
    </BarChart>
  );
}