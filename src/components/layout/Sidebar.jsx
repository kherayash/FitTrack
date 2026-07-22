import {
  LayoutDashboard,
  UtensilsCrossed,
  Dumbbell,
  Target,
  ChartColumn,
  SquareActivity,
  CircleUserRound

} from "lucide-react";

export default function Sidebar(){
    const sideBarItems = [
                        {name : "Dashboard",
                         icon: LayoutDashboard
                        },
                        {name : "Meal Tracker",
                            icon:  UtensilsCrossed
                        },
                        {name : "Workout",
                         icon:  Dumbbell
                        },
                        { name : "Goals",
                         icon: Target
                        },
                        {name : "Analytics",
                        icon:  ChartColumn
                        }
                                             ];
                                            
    return (
<>
    <div>
        <div className=" relative heading w-72 h-screen bg-white ">
            <h2 className="  flex items-center  justify-center gap-x-6 text-black px-6 py-4 tracking-wide  text-2xl font-bold">
                <SquareActivity className="px-6"/> 
                <span>FitTrack</span>
            </h2>
            &nbsp;
       

    {sideBarItems.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="flex items-center w-full h-12  gap-4 px-6  text-black opacity-60 hover:opacity-100 hover:bg-[oklch(87.2%_0.01_258.338)]  hover:rounded-lg cursor-pointer transition-colors duration-200"
        >
          &nbsp; <Icon size={22} />
                 
          <div className="px-2 ">
                {item.name}
            
          </div>
          
        </div>
        
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