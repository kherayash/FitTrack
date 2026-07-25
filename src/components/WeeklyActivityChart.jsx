import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";


export default function WeeklyActivityChart() {
    const weeklyData = [
    { day: "Mon", calories: 2100 },
    { day: "Tue", calories: 1800 },
    { day: "Wed", calories: 2300 },
    { day: "Thu", calories: 1900 },
    { day: "Fri", calories: 2500 },
    { day: "Sat", calories: 2200 },
    { day: "Sun", calories: 1700 },
];
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-6">
                Weekly Activity
            </h2>
                    
            {/* Chart goes here */}
             <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                            data={weeklyData}
                            barCategoryGap="30%"
                            margin={{
                                top: 15,
                                right: 10,
                                left: -15,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid
                                vertical={false}
                                stroke="#E5E7EB"
                                strokeDasharray="4 4"
                            />

                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: "#6B7280",
                                    fontSize: 13,
                                    fontWeight: 500,
                                }}
                            />

                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{
                                    fill: "#6B7280",
                                    fontSize: 13,
                                    fontWeight: 500,
                                }}
                            />

                            <Tooltip
                                cursor={{
                                    fill: "rgba(59,130,246,0.08)",
                                }}
                                contentStyle={{
                                    backgroundColor: "#fff",
                                    border: "none",
                                    borderRadius: "12px",
                                    boxShadow:
                                        "0 8px 24px rgba(0,0,0,0.08)",
                                }}
                                labelStyle={{
                                    color: "#111827",
                                    fontWeight: 600,
                                }}
                                itemStyle={{
                                    color: "#3B82F6",
                                    fontWeight: 500,
                                }}
                            />

                            <Bar
                                dataKey="calories"
                                fill="#60A5FA"
                                radius={[8, 8, 0, 0]}
                                barSize={20}
                            />
                        </BarChart>
</ResponsiveContainer>

        </div>
    );
}