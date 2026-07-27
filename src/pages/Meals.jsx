import NutritionSummary from "../components/meals/NutritionSummary";
import { Plus } from "lucide-react";

export default function Meals(){
    return (
          <div className="">
            {/* header section */}
            <div className="flex justify-between py-4">
                 <div>
                     <h1 className="text-4xl font-bold mt-1 tracking-tight">
                   Meal Tracker
                </h1>

                <p className="text-gray-500 mt-2">
                    Log and monitor your daily nutrition
                </p>
                 </div>
               
                <button className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-emerald-700">
                        <Plus size={16} />
                        Add Meal
                    </button>
            </div>
               <div>
                <NutritionSummary/>
               </div>
          </div>
    )
}