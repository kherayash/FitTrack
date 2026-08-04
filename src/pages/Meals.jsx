import { useState } from "react";
import MealsTable from "../components/meals/MealsTable";
import MealToolbar from "../components/meals/MealToolbar";
import NutritionSummary from "../components/meals/NutritionSummary";
import { Plus } from "lucide-react";
import AddMealModal from "../components/meals/AddMealModal";
export default function Meals(){
    const [meals,setMeals] = useState([]);
    const[isModalOpen, setIsModalOpen] = useState(false);
     const[activeFilter,setActiveFilter] = useState("All")
     const[searchTerm,setSearchTerm] = useState("");
        const filteredMeals = meals.filter((meal) => {
           if (activeFilter === "All") {
                    return true;
                }
            return meal.type === activeFilter;
});
const searchedMeals = filteredMeals.filter((meal)=>{
    console.log(searchTerm);
    return meal.name.toLowerCase().includes(searchTerm.toLowerCase());
})
    function addMeal(newMeal){
        setMeals((prevMeals)=>[...prevMeals,newMeal]);
    }
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
               
                <button className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-emerald-700" onClick={() => {
    console.log("Button clicked");
    setIsModalOpen(true);
  }}>
                        <Plus size={16} />
                        Add Meal
                    </button>
            </div>
               <div>
                <NutritionSummary meals = {meals}/>
               </div>
                <div className="mb-5 mt-4 ">
                    <h2 className="text-xl font-semibold text-slate-900">
                        Recent Meals
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Track your daily nutrition intake.
                    </p>
    </div>
               <div>
                <MealToolbar  activeFilter={activeFilter}
                             setActiveFilter={setActiveFilter}
                              searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            />
                </div>
               
               <div>
                <MealsTable meals={searchedMeals} />
               </div>
               <div>
                  {isModalOpen && <AddMealModal setIsModalOpen = {setIsModalOpen}
                  addMeal={addMeal} />}
               </div>
          </div>
    )
}