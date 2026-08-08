import { Pencil, Trash2 } from "lucide-react";

export default function GoalCard({
    goal,
    deleteGoal,
    handleEditGoal,
}) {
   const starting = Number(goal.startingValue);
const current = Number(goal.current);
const target = Number(goal.target);

let percentage = 0;

if (goal.direction === "increase") {
    percentage =
        ((current - starting) / (target - starting)) * 100;
} else {
    percentage =
        ((starting - current) / (starting - target)) * 100;
}

percentage = Math.min(Math.max(percentage, 0), 100);
    const colorClasses = {
        emerald: "bg-emerald-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        purple: "bg-purple-500",
    };

    const color = "emerald";

    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            {/* Top Row */}
            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        {goal.name}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        {goal.category}
                    </p>
                </div>

                <div className="flex gap-2">

                    <button
                        onClick={() => handleEditGoal(goal)}
                        title="Edit goal"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-blue-500 transition-all hover:bg-blue-50 hover:text-blue-600 active:scale-95"
                    >
                        <Pencil size={17} />
                    </button>

                    <button
                        onClick={() => deleteGoal(goal.id)}
                        title="Delete goal"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition-all hover:bg-red-50 hover:text-red-600 active:scale-95"
                    >
                        <Trash2 size={17} />
                    </button>

                </div>

            </div>

            {/* Current / Target */}
            <div className="mt-5 flex items-end justify-between">

                <div>
                    <p className="text-sm text-slate-500">
                        Current
                    </p>

                    <p className="mt-1 text-2xl font-bold text-slate-900">
                        {current} {goal.unit}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-sm text-slate-500">
                        Target
                    </p>

                    <p className="mt-1 text-lg font-semibold text-slate-700">
                        {target} {goal.unit}
                    </p>
                </div>

            </div>

            {/* Progress Bar */}
            <div className="mt-5">

                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">

                    <div
                        className={`h-full rounded-full transition-all duration-500 ${colorClasses[color]}`}
                        style={{ width: `${percentage}%` }}
                    />

                </div>

                {/* Percentage */}
                <div className="mt-2 flex justify-between">

                    <p className="text-xs text-slate-500">
                        {Math.round(percentage)}% complete
                    </p>

                    <p className="text-xs font-medium text-slate-600">
                        {goal.direction === "increase"
                            ? `${Math.max(target - current, 0)} ${goal.unit} remaining`
                            : `${Math.max(current - target, 0)} ${goal.unit} remaining`}
                    </p>

                </div>

            </div>

        </div>
    );
}