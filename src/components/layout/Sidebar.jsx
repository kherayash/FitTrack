import {
  LayoutDashboard,
  UtensilsCrossed,
  Dumbbell,
  Target,
  ChartColumn,
  SquareActivity,
  CircleUserRound

} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar(){
    const sideBarItems = [
                        {name : "Dashboard",
                         icon: LayoutDashboard,
                         path: "/"
                        },
                        {name : "Meal Tracker",
                            icon:  UtensilsCrossed,
                            path: "/meals"
                        },
                        {name : "Workouts",
                         icon:  Dumbbell,
                         path: "/workouts"
                        },
                        { name : "Goals",
                         icon: Target,
                         path: "/goals"
                        },
                        {name : "Analytics",
                        icon:  ChartColumn,
                        path: "/analytics"
                        }
                                             ];
                                            
    return (
<>
    <div>
       <div className="sticky top-0 w-72 h-screen bg-white border-r border-slate-200">
            <h2 className="  flex items-center  justify-center gap-x-6 text-black px-6 py-4 tracking-wide  text-2xl font-bold">
                <SquareActivity className="px-6"/> 
                <span>FitTrack</span>
            </h2>
            &nbsp;
       

    {sideBarItems.map((item, index) => {
      const Icon = item.icon;

      return (
        <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
            `flex items-center w-full h-12 gap-4 px-6 text-black transition-colors duration-200 cursor-pointer ${
          isActive
             ? "opacity-100 bg-emerald-100 text-emerald-700 font-semibold rounded-lg"
             : "opacity-60 hover:opacity-100 hover:bg-gray-100 hover:rounded-lg"}`
            }>

                      
                <Icon size={22} />

            <div className="px-2">
                {item.name}
            </div>
            </NavLink>
      );
    })}
    <div className="absolute bottom-0 left-0 w-full px-5 py-4 hover:bg-[oklch(87.2%_0.01_258.338)] cursor-pointer hover:rounded-lg transition-colors duration-200">
  <div className="flex justify-center  items-center  gap-3">
    
      <CircleUserRound className="w-6 h-6" />
    

    <div className="flex  flex-col">
      <h3 className="font-semibold text-black">Yash Khera</h3>
      <p className="text-sm text-gray-500">Pro Plan</p>
    </div>
  </div>
</div>
     
    
</div>
 </div>

</>
    )
}