import { useState } from "react";


export default function AddWorkoutModal({ setIsModalOpen,
    addWorkout,}){
    const [search, setSearch] = useState("");
    const[results,setResults] = useState([]);
    const[loading,setLoading] = useState(false);
const [selectedExercise, setSelectedExercise] = useState(null);
const [sets, setSets]  = useState("");
const [reps, setReps] = useState("");
const [weight, setWeight] = useState("");

    async function handleSearch(){
            setLoading(true);
                const response = await fetch(
    `https://api.api-ninjas.com/v1/exercises?name=${search}`,
    {
        headers: {
            "X-Api-Key": import.meta.env.VITE_API_NINJAS_KEY,
        },
    }
);
            const data = await response.json();
          setResults(data);
             setLoading(false);
             


    }

   function handleAddWorkout() {
    console.log("Handle Add Workout called");

    if (!selectedExercise) {
        console.log("No exercise selected");
        return;
    }

    const workout = {
        id: Date.now(),
        name: selectedExercise.name,
        muscle: selectedExercise.muscle,
        equipment: selectedExercise.equipment,
        difficulty: selectedExercise.difficulty,
        type: selectedExercise.type,
        sets,
        reps,
        weight,
    };

    addWorkout(workout);
    setIsModalOpen(false);
}
 

    return (
        
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
               <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
    
    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
    <h2 className="text-xl font-semibold text-slate-900">
        Add Workout
    </h2>

    <button
        onClick={() => setIsModalOpen(false)}
        className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
    >
        ✕
    </button>
</div>
        
</div>
<div className="p-6 space-y-5">
        <label className="mb-2 block text-sm font-medium text-slate-700">
            Search Exercise
        </label>
       

        <div className="flex gap-3">
            <input
                type="text"
                placeholder="Bench Press, Squat, Deadlift..."
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
                    key={item.name}
                    className={`
                                cursor-pointer rounded-lg p-3 transition-all
                                ${
                                   selectedExercise?.name=== item.name
                                        ? "bg-emerald-100 border border-emerald-500"
                                        : "hover:bg-white"
                                }
                            `}
                    onClick={() => setSelectedExercise(item)}
                >
                    {item.name}
                </div>
            ))
        ) : (
            <div className="flex h-full items-center justify-center">
                <p className="text-sm text-slate-400">
                    Search for a Exercise to see results.
                </p>
            </div>
        )}
    </div> 
    </div>
      
    
       <div>
   
              <div className="grid grid-cols-3 gap-4">
    <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
            Sets
        </label>

        <input
            type="number"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
        />
    </div>

    <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
            Reps
        </label>

        <input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
        />
    </div>

    <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
            Weight (kg)
        </label>

        <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2"
        />
    </div>

</div>
<div className="mt-6 flex justify-end gap-3 border-t border-slate-200 pt-4">
    <button
        onClick={() => setIsModalOpen(false)}
        className="rounded-lg border border-slate-300 px-5 py-2 font-medium text-slate-600 hover:bg-slate-100"
    >
        Cancel
    </button>

    <button
        onClick={handleAddWorkout}
        className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700"
    >
        Add Workout
    </button>
</div>

</div>
  
</div>
        
    );
}