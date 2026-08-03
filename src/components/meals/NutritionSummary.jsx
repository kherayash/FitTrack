import SummaryCard from "./SummaryCard";

export default function NutritionSummary({meals}){
   
   const totalCalories = meals.reduce((total, meal) => {
    return total + meal.calories;
}, 0);

const totalProtein = meals.reduce((total, meal) => {
    return total + meal.protein;
}, 0);

const totalCarbs = meals.reduce((total, meal) => {
    return total + meal.carbs;
}, 0);

const totalFats = meals.reduce((total, meal) => {
    return total + meal.fats;
}, 0);
console.log({
    totalCalories,
    totalProtein,
    totalCarbs,
    totalFats,
});
   
   
    const summaryData = [
    {
        title: "Calories",
        value: totalCalories,
        unit: "kcal",
        color: "emerald",
    },
    {
        title: "Protein",
        value: totalProtein,
        unit: "g",
        color: "orange",
    },
    {
        title: "Carbs",
        value: totalCarbs,
        unit: "g",
        color: "blue",
    },
    {
        title: "Fat",
        value: totalFats,
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