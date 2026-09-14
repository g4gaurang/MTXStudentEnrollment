import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

type ChartDatum = {
  name: string
  value: number
}

function AnalyticsChart({ view, data }: { view: 'journey' | 'operations' | 'planning'; data: ChartDatum[] }) {
  const colors = ['#1675e5', '#22a59a', '#f2a93b', '#7a68d4', '#ef6a6a']

  return (
    <ResponsiveContainer width="100%" height={280}>
      {view === 'journey' ? (
        <AreaChart data={data} margin={{ left: 8, right: 8 }}>
          <defs>
            <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1675e5" stopOpacity={0.38} />
              <stop offset="100%" stopColor="#1675e5" stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="#e7edf4" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#1675e5" strokeWidth={3} fill="url(#areaFill)" />
        </AreaChart>
      ) : view === 'operations' ? (
        <BarChart data={data}>
          <CartesianGrid vertical={false} stroke="#e7edf4" />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="value" fill="#1675e5" radius={[6, 6, 0, 0]} />
        </BarChart>
      ) : (
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={62} outerRadius={104} paddingAngle={3}>
            {data.map((entry, index) => <Cell key={entry.name} fill={colors[index]} />)}
          </Pie>
          <Tooltip />
        </PieChart>
      )}
    </ResponsiveContainer>
  )
}

export default AnalyticsChart
