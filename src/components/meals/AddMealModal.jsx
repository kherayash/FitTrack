import { useState } from "react"


export default function AddMealModal({setIsModalOpen,addMeal,}){
    const [search, setSearch] = useState("");
    const[results,setResults] = useState([]);
    const[loading,setLoading] = useState(false);
    const [selectedFood, setSelectedFood] = useState(null);
    const [mealType, setMealType] = useState("Breakfast");

    async function handleSearch(){
            setLoading(true);
                 const response = await fetch(
                    `https://api.nal.usda.gov/fdc/v1/foods/search?query=${search}&api_key=${import.meta.env.VITE_USDA_API_KEY}`
                );
            const data = await response.json();
             setResults(data.foods || []);
             setLoading(false);
             


    }

    function handleAddMeal() {
         console.log("Handle Add Meal called");
        if (!selectedFood){
              console.log("No food selected");
              return;
        } 
        console.log(selectedFood);
        console.table(selectedFood.foodNutrients);
    const protein = selectedFood.foodNutrients.find((nutrient)=>nutrient.nutrientName==="Protein")
    const carbs = selectedFood.foodNutrients.find((nutrient)=>nutrient.nutrientName==="Carbohydrate, by difference")
    const fats = selectedFood.foodNutrients.find((nutrient)=>nutrient.nutrientName==="Total lipid (fat)")
    const calories = selectedFood.foodNutrients.find((nutrient)=>nutrient.nutrientName==="Energy")
    
    
    const meal = {
    id: selectedFood.fdcId,
    name: selectedFood.description,
    protein: protein?.value || 0,
    carbs: carbs?.value || 0,
    fats: fats?.value || 0,
    calories: calories?.value || 0,
    type: mealType,
    
    
};
  if (selectedFood) {
        addMeal(meal);
        setIsModalOpen(false);
    }
}
 
    return (
        
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
               <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
    
    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-slate-900">
            Add Meal
        </h2>

        <button
            onClick={() => setIsModalOpen(false)}
            className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
            ✕
        </button>
    </div>
        <div className="p-6 space-y-5">

    <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
            Search Food
        </label>
       

        <div className="flex gap-3">
            <input
                type="text"
                placeholder=" roti, rice, paneer..."
                className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                value={search} onChange={(e)=>setSearch(e.target.value)}
            /> 
               
            <button className="rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-700" onClick={handleSearch}>
                {loading ? "Searching..." : "Search"}
            </button>
        </div>
          <div className="h-48 overflow-y-auto rounded-lg border border-slate-200 bg-slate-50 p-3">
             {results.length > 0 ? (
            results.map((item) => (
                <div
                    key={item.fdcId}
                    className={`
                                cursor-pointer rounded-lg p-3 transition-all
                                ${
                                    selectedFood?.fdcId === item.fdcId
                                        ? "bg-emerald-100 border border-emerald-500"
                                        : "hover:bg-white"
                                }
                            `}
                    onClick={() => setSelectedFood(item)}
                >
                    {item.description}
                </div>
            ))
        ) : (
            <div className="flex h-full items-center justify-center">
                <p className="text-sm text-slate-400">
                    Search for a food to see results.
                </p>
            </div>
        )}
    </div> 
    </div>
      
    
       <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
        Meal Type
    </label>

    <select
        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 outline-none transition-all duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
        value={mealType}
        onChange={(e)=>setMealType(e.target.value)}
    >
        <option>Breakfast</option>
        <option>Lunch</option>
        <option>Dinner</option>
        <option>Snack</option>
    </select>
</div>
   <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
    <button
        onClick={() => setIsModalOpen(false)}
        className="rounded-lg border border-slate-200 px-5 py-2 font-medium text-slate-600 transition-all duration-200 hover:bg-slate-100"
    >
        Cancel
    </button>

    <button
        className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 hover:shadow-md active:scale-95" onClick={handleAddMeal}
        
    >
        Add Meal
    </button>
</div>
</div>
        </div>
        </div>
        
    )
}