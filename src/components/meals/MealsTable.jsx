import { Trash2 } from "lucide-react";
export default function MealsTable({meals, deleteMeal }){
  
   const mealTypeColors = {
  Breakfast: "bg-yellow-100 text-yellow-700",
  Lunch: "bg-blue-100 text-blue-700",
  Dinner: "bg-purple-100 text-purple-700",
  Snack: "bg-green-100 text-green-700",
};
  return (
        <div  className="mt-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
             <table className="w-full border-separate border-spacing-0">
                <thead>
                       <tr className="border-b border-slate-200 ">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide"> Meals</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide"> type</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide"> Calories</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide"> Protein</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide"> Carbs</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide"> Fats</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
                       </tr>
                        
                  
                    
                </thead>
                <tbody>
                     { meals.map((item)=>(
                          <tr
    key={item.id}
    className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
>
                            <td className="px-6 py-4 font-medium text-slate-900">{item.name}</td>
                             <td className="px-6 py-4">
                              <span className={`rounded-full px-3 py-1 text-xs font-medium ${mealTypeColors[item.type]}`}>
                              {item.type} </span> 
                              </td>
                            <td className="px-6 py-4 text-slate-600">{item.calories}kcal</td>
                            <td className="px-6 py-4">{item.protein}g</td>
                            <td className="px-6 py-4">{item.carbs}g</td>
                            <td className="px-6 py-4">{item.fats}g</td>
                            <td className="px-6 py-4">
    <button
        onClick={() => deleteMeal(item.id)}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600"
    >
        <Trash2 size={18} />
    </button>
</td>
                          </tr>
                     )) }

                </tbody>
             </table>
        </div>
     )
}