import { Utensils,Banana,Sandwich,Apple } from 'lucide-react';
export default function RecentMealsCard(){

    let mealData = [
        {    id: 1,
            food:"Greek Yogurt & Berries",
            calories:"300 kcal",
             mealType: "Breakfast",
            time: "7:30 AM",
            icon:<Utensils size={18} className="text-gray-500" /> 
        },
         {   id: 2,
            food:"Oatmeal with Banana",
            calories:"250 kcal",
             mealType: "Breakfast",
            time: "8:00 AM",
             icon:  <Banana size={18} className="text-gray-500" />
        },
            
        {    id: 3,
            food:"Grilled sandwich",
            calories:"350 kcal",
            mealType: "Lunch",
            time: "12:30 PM",
             icon: <Sandwich size={18} className="text-gray-500" />
        },
          {  id: 4,
            food:"Apple",
            calories:"150 kcal",
            mealType: "Snack",
            time: "1:00 PM",
             icon:  <Apple size={18} className="text-gray-500" />
        },
    ]
    return (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 transition-shadow duration-300 hover:shadow-md">

    <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-900">
            Recent Meals
        </h2>

        <span className="bg-slate-100 text-sm font-medium px-3 py-1 rounded-full">
            7 today
        </span>
    </div>

    <div className="space-y-5">

        {mealData.map((item) => (
            <div
                key={item.id}
               className="group flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 hover:shadow-sm transition-all duration-300 cursor-pointer">

                <div className="flex items-center gap-4 ">

                    <div className="
                                w-12 h-12
                                rounded-xl
                                bg-slate-100
                                flex
                                items-center
                                justify-center
                                transition-all
                                duration-300
                                ease-out
                                group-hover:scale-105
                                group-hover:bg-slate-200"> 
                         
                            
                    
                                                 {item.icon}
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 transition-colors duration-300 group-hover:text-slate-700">
                            {item.food}
                        </h3>

                        <p className="text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                            {item.mealType} • {item.time}
                        </p>
                    </div>

                </div>

                <p className="font-semibold text-slate-900 transition-transform duration-300 group-hover:-translate-x-1">
                    {item.calories}
                </p>

            </div>
        ))}

    </div>

</div>
        
        
    )
}