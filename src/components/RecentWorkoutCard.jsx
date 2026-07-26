import {
  Dumbbell,
  PersonStanding,
  Flame,
Footprints
} from "lucide-react";
export default function RecentWorkoutCard(){
    
    let workoutData = [
        {    id: 1,
            type:"Morning Run",
            calories: 320 ,
             day: "Today",
            duration: "35 min",
            icon:< Footprints size={18} className="text-emerald-500" />
        },
         {   id: 2,
           type:"Upper Body Strength",
            calories:400,
             day: "Today",
            duration: "55 min",
            icon:<Dumbbell size={18} className="text-emerald-500" /> 
        },
            
        {    id: 3,
            type:"Yoga Flow",
            calories:120,
             day: "Yesterday",
            duration: "40 min",
            icon:<PersonStanding size={18} className="text-emerald-500" /> 
        },
          {  id: 4,
             type:"HIIT Circuit",
            calories:390,
             day: "2 days ago",
            duration: "45 min",
            icon:<Flame size={18} className="text-emerald-500" /> 
        },
    ]



    return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 transition-shadow duration-300 hover:shadow-md">

        <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">
                Recent Workouts
            </h2>

            <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium">
             4 Sessions
            </span>
        </div>
         <div className="space-y-5">

        {workoutData.map((item) => (
            <div
                key={item.id}
                className="group flex justify-between items-center p-3 rounded-xl hover:bg-slate-50 hover:shadow-sm transition-all duration-200">

                <div className="flex items-center gap-4 ">

                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center transition-all duration-300 group-hover:scale-110  group-hover:bg-emerald-100">
                        {item.icon}
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
                            {item.type}
                        </h3>

                        <p className="text-sm text-slate-500">
                            {item.duration}  • {item.day}
                        </p>
                    </div>

                </div>

                <p className="  text-lg  font-semibold text-slate-900  transition-transform duration-300 group-hover:-translate-x-1">
                    {item.calories} kcal
                </p>

            </div>
        ))}

    </div>

</div>

    )
}