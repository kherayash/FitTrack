import { Pencil, Trash2 } from "lucide-react";

export default function WorkoutTable({ workouts, deleteWorkout, handleEditWorkout }) {
    const difficultyColors = {
    beginner: "bg-green-100 text-green-700",
    intermediate: "bg-yellow-100 text-yellow-700",
    expert: "bg-red-100 text-red-700",
};
  return (
    <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <table className="w-full border-separate border-spacing-0">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Workout</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Muscle</th>
            <th  className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Difficulty</th>
            <th  className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Type</th>
            <th  className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Sets</th>
            <th  className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Reps</th>
            <th  className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Weight</th>
            <th  className="px-6 py-4 text-left text-sm font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
          </tr>
        </thead>
        <tbody>
          {workouts.length === 0 ? (
    <tr>
        <td
            colSpan="8"
            className="px-6 py-12 text-center text-slate-500"
        >
            No workouts logged yet.
        </td>
    </tr>
) :
          workouts.map((item) => (
            <tr key={item.id} className="border-b hover:bg-slate-50">
              <td className="px-6 py-4 font-medium">{item.name}</td>
              <td className="px-6 py-4">
            <span
                 className={`rounded-full px-3 py-1 text-xs font-medium ${
                 difficultyColors[item.difficulty]}`}>
                {item.difficulty}
            </span> 
</td>
              <td className="px-6 py-4">{item.difficulty}</td>
              <td className="px-6 py-4">{item.type}</td>
              <td className="px-6 py-4">{item.sets}</td>
              <td className="px-6 py-4">{item.reps}</td>
              <td className="px-6 py-4">{item.weight}kg</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <button
                   title="Edit workout"
                    onClick={() => handleEditWorkout(item)}
                   className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
                    <Pencil size={18} />
                  </button>
                  <button
                      title="Delete workout"
                    onClick={() => deleteWorkout(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-95">
                  
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
