import WorkoutTable from "../components/workout/WorkoutTable";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
export default function Workouts(){

 const [workouts, setWorkouts] = useState(() => {
    const savedworkout = localStorage.getItem("workouts");
    return savedworkout ? JSON.parse(savedworkout) : [];
});

function addWorkout(newWorkout){
        setWorkouts((prevWorkout)=>[...prevWorkout,newWorkout]);
    }
    function deleteWorkout(deleteId){
        setWorkouts((prevWorkout)=>{
            return prevWorkout.filter((workout)=>{
                return workout.id!=deleteId;
            })
        })
    }
useEffect(()=>{
     console.log("Saving to Local Storage:", workout);
    localStorage.setItem("workouts",JSON.stringify(workout));
},[workout])
    return (
    
          <div>
            
                 <div>
                     <h1 className="text-4xl font-bold mt-1 tracking-tight">
                      Workout Tracker
                </h1>

                <p className="text-gray-500 mt-2">
                  Log workouts and explore exercises
                </p>
                 </div> 
                  <button className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-emerald-700" onClick={() => {
    console.log("Button clicked");
    }}>
         <Plus size={16} />
                        Add Workout
                    </button>

                 <div>
                    <WorkoutTable workouts={workouts}/>
                 </div>
          </div>
                          
    )
}