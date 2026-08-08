import WorkoutTable from "../components/workout/WorkoutTable";
import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import AddWorkoutModal from "../components/workout/AddWorkoutModal";

export default function Workouts() {
  const [workouts, setWorkouts] = useState(() => {
    const saved = localStorage.getItem("workouts");
    return saved ? JSON.parse(saved) : [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingWorkout, setEditingWorkout] = useState(null);
  function deleteWorkout(id) {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  }

  function handleEditWorkout(workout) {
    setEditingWorkout(workout);
    setIsModalOpen(true);
  }
  function addWorkout(newWorkout) {
    setWorkouts((prevWorkouts) => [
        ...prevWorkouts,
        newWorkout
    ]);
}
function updateWorkout(updatedWorkout) {
    setWorkouts((prevWorkouts) => {
        return prevWorkouts.map((workout) => {
            if (workout.id === updatedWorkout.id) {
                return updatedWorkout;
            }

            return workout;
        });
    });
}

  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  return (
    <div>
      <h1 className="text-4xl font-bold mt-1">Workout Tracker</h1>
      <p className="text-gray-500 mt-2">Log workouts and explore exercises</p>

      <button
        className="flex items-center gap-1.5 bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white rounded-md hover:bg-emerald-700"
        onClick={() => {
          setEditingWorkout(null);
          setIsModalOpen(true);
        }}
      >
        <Plus size={16} /> Add Workout
      </button>

      <WorkoutTable
        workouts={workouts}
        deleteWorkout={deleteWorkout}
        handleEditWorkout={handleEditWorkout}
      />

      {isModalOpen && (
        <AddWorkoutModal
          setIsModalOpen={setIsModalOpen}
          addWorkout={addWorkout}
          editingWorkout={editingWorkout}
          updateWorkout={updateWorkout}
        />
      )}
    </div>
  );
}
