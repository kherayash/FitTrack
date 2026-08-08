import { useState, useEffect } from "react";

export default function AddWorkoutModal({ 
       setIsModalOpen,
    addWorkout,
    editingWorkout,
    updateWorkout
}) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // initialize state from editingWorkout if provided
  const [selectedExercise, setSelectedExercise] = useState(editingWorkout || null);
  const [sets, setSets] = useState(editingWorkout?.sets || "");
  const [reps, setReps] = useState(editingWorkout?.reps || "");
  const [weight, setWeight] = useState(editingWorkout?.weight || "");

  async function handleSearch() {
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

 function handleSaveWorkout() {
    if (!selectedExercise && !editingWorkout) {
        console.log("No exercise selected");
        return;
    }
if (Number(sets) <= 0 || Number(reps) <= 0 || Number(weight) < 0) {
    return;
}
    const workout = {
        id: editingWorkout ? editingWorkout.id : Date.now(),
        name: editingWorkout ? editingWorkout.name : selectedExercise.name,
        muscle: editingWorkout ? editingWorkout.muscle : selectedExercise.muscle,
        difficulty: editingWorkout
            ? editingWorkout.difficulty
            : selectedExercise.difficulty,
        type: editingWorkout ? editingWorkout.type : selectedExercise.type,
        sets,
        reps,
        weight,
    };

    if (editingWorkout) {
        updateWorkout(workout);
    } else {
        addWorkout(workout);
    }

    setIsModalOpen(false);
}
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-slate-900">
            {editingWorkout ? "Edit Workout" : "Add Workout"}
          </h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {!editingWorkout && (
            <>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Search Exercise
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Bench Press, Squat, Deadlift..."
                  className="flex-1 rounded-lg border px-4 py-2.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button
                  className="rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-700"
                  onClick={handleSearch}
                >
                  {loading ? "Searching..." : "Search"}
                </button>
              </div>

              <div className="h-48 overflow-y-auto rounded-lg border bg-slate-50 p-3">
                {results.length > 0 ? (
                  results.map((item) => (
                    <div
                      key={item.name}
                      className={`cursor-pointer rounded-lg p-3 ${
                        selectedExercise?.name === item.name
                          ? "bg-emerald-100 border border-emerald-500"
                          : "hover:bg-white"
                      }`}
                      onClick={() => setSelectedExercise(item)}
                    >
                      {item.name}
                    </div>
                  ))
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-sm text-slate-400">
                      Search for an exercise to see results.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Sets/Reps/Weight */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Sets</label>
              <input
                type="number"
                value={sets}
                onChange={(e) => setSets(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Reps</label>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-lg border px-3 py-2"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end gap-3 border-t px-6 pb-6 pt-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="rounded-lg border px-5 py-2 font-medium text-slate-600 hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveWorkout}
            className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white hover:bg-emerald-700"
          >
            {editingWorkout ? "Save Changes" : "Add Workout"}
          </button>
        </div>
      </div>
    </div>
  );
}
