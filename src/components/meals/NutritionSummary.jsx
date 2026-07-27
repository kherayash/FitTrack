import SummaryCard from "./SummaryCard";

export default function NutritionSummary(){
    const summaryData = [
    {
        title: "Calories",
        value: 2460,
        unit: "kcal",
        color: "emerald",
    },
    {
        title: "Protein",
        value: 185,
        unit: "g",
        color: "orange",
    },
    {
        title: "Carbs",
        value: 245,
        unit: "g",
        color: "blue",
    },
    {
        title: "Fat",
        value: 72,
        unit: "g",
        color: "purple",
    },
];
    return(
     <div className="grid grid-cols-4 gap-6">
    {summaryData.map((item) => (
        <SummaryCard
            key={item.title}
            title={item.title}
            value={item.value}
            unit={item.unit}
            color={item.color}
        />
    ))}
</div>
        
    );
}