import { Flame, Zap, GlassWater, Footprints } from "lucide-react";
import StatCard from "../components/StatCard";
import MacrosCard from "../components/MacrosCard";
import WeeklyActivityChart from "../components/WeeklyActivityChart";
import RecentMealsCard from "../components/RecentMealsCard";
import RecentWorkoutCard from "../components/RecentWorkoutCard";
import GoalProgress from "../components/GoalProgress";


export default function Dashboard() {
    return (
        <div className="px-10 py-8  flex flex-col gap-8">

            {/* Greeting Section */}
            <div>
                <p className="text-gray-500 text-sm">
                    Sunday, July 13, 2026
                </p>

                <h1 className="text-4xl font-bold mt-1 tracking-tight">
                    Welcome back, Yash 
                </h1>

                <p className="text-gray-500 mt-2">
                    Here's your fitness summary for today.
                </p>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-4 gap-6">
                <StatCard 
                    title="Calories Consumed"
                    value="2,150"
                    subtitle="of 2,500 kcal goal"
                    icon={Flame}
                />

                <StatCard
                    title="Calories Burned"
                    value="300"
                    subtitle="from today's workout"
                    icon={Zap}
                />

                <StatCard
                    title="Water Intake"
                    value="2.1 L"
                    subtitle="of 4.0 L goal"
                    icon={GlassWater}
                />

                <StatCard
                    title="Steps Today"
                    value="7,842"
                    subtitle="of 10,000 step goal"
                    icon={Footprints}
                />
           
                      
  
            </div>

            <div className="grid grid-cols-3 gap-6">

                    <MacrosCard />
                    <div className="col-span-2">
                        <WeeklyActivityChart />
                    </div>

                    

            </div>

            <div className="grid grid-cols-2 gap-6">
                <RecentMealsCard/>
                <RecentWorkoutCard/>
            </div>
                
               <div className="grid grid-cols-1">
                    <GoalProgress />
                </div>

        </div>
    );
}