import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { Category: 'Electronics', Total: 112 },
  { Category: 'Books', Total: 29 }
];

export default function MyChart() {
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="Category" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="Total" fill="#9694b8" />
    </BarChart>
  );
}