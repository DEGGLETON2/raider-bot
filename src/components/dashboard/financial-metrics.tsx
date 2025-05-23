import { Card, Title, AreaChart, DonutChart, BarChart } from '@tremor/react';
import { useState } from 'react';

interface MetricCard {
  title: string;
  value: string;
  change: number;
  changeType: 'increase' | 'decrease';
}

const mockData = {
  revenue: [
    { date: '2024-01', value: 2890000 },
    { date: '2024-02', value: 2950000 },
    { date: '2024-03', value: 3100000 },
    { date: '2024-04', value: 3250000 },
    { date: '2024-05', value: 3400000 },
  ],
  expenses: [
    { date: '2024-01', value: 2200000 },
    { date: '2024-02', value: 2300000 },
    { date: '2024-03', value: 2400000 },
    { date: '2024-04', value: 2500000 },
    { date: '2024-05', value: 2600000 },
  ],
};

const marketShare = [
  { name: 'Refrigerated', value: 45 },
  { name: 'Dry Van', value: 30 },
  { name: 'Flatbed', value: 15 },
  { name: 'Other', value: 10 },
];

export default function FinancialMetrics() {
  const [metrics] = useState<MetricCard[]>([
    {
      title: 'Revenue',
      value: '$3.4M',
      change: 12.5,
      changeType: 'increase',
    },
    {
      title: 'Operating Margin',
      value: '24%',
      change: 2.1,
      changeType: 'increase',
    },
    {
      title: 'Load Count',
      value: '1,247',
      change: -3.2,
      changeType: 'decrease',
    },
  ]);

  return (
    <div className="space-y-6 p-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric) => (
          <Card key={metric.title} className="p-4">
            <Title>{metric.title}</Title>
            <div className="mt-2">
              <span className="text-2xl font-bold">{metric.value}</span>
              <span
                className={`ml-2 text-sm ${
                  metric.changeType === 'increase'
                    ? 'text-green-500'
                    : 'text-red-500'
                }`}
              >
                {metric.changeType === 'increase' ? '↑' : '↓'} {Math.abs(metric.change)}%
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Revenue Chart */}
      <Card>
        <Title>Revenue vs Expenses</Title>
        <AreaChart
          className="h-72 mt-4"
          data={mockData.revenue.map((item, i) => ({
            date: item.date,
            Revenue: item.value,
            Expenses: mockData.expenses[i].value,
          }))}
          index="date"
          categories={['Revenue', 'Expenses']}
          colors={['emerald', 'red']}
        />
      </Card>

      {/* Market Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Title>Market Share by Type</Title>
          <DonutChart
            className="h-48 mt-4"
            data={marketShare}
            category="value"
            index="name"
            colors={['emerald', 'blue', 'amber', 'rose']}
          />
        </Card>

        <Card>
          <Title>Monthly Load Distribution</Title>
          <BarChart
            className="h-48 mt-4"
            data={mockData.revenue.map((item) => ({
              month: item.date,
              'Load Count': Math.floor(item.value / 2800),
            }))}
            index="month"
            categories={['Load Count']}
            colors={['blue']}
          />
        </Card>
      </div>
    </div>
  );
} 