import { useState } from "react";

export default function AddGoalModal({
    setIsModalOpen,
    addGoal,
    editingGoal,
    updateGoal,
}){ 
    const [name, setName] = useState(editingGoal?.name || "");
    const [category, setCategory] = useState(editingGoal?.category || "Fitness");
    const [startingValue, setStartingValue] = useState(
    editingGoal?.startingValue || ""
);  
    const [target, setTarget] = useState(editingGoal?.target || "");
    const [current, setCurrent] = useState(editingGoal?.current || "");
    const [unit, setUnit] = useState(editingGoal?.unit || "");
    const [direction, setDirection] = useState(
        editingGoal?.direction || "increase"
    );
  

    function handleSaveGoal() {
    console.log("Add Goal clicked");

    if (!name || !startingValue || !current || !target || !unit) {
        console.log("Missing field:", {
            name,
            startingValue,
            current,
            target,
            unit,
        });
        return;
    }

    const goal = {
        id: editingGoal ? editingGoal.id : Date.now(),
        name,
        category,
        startingValue: Number(startingValue),
        current: Number(current),
        target: Number(target),
        unit,
        direction,
    };

    console.log("Goal created:", goal);

    if (editingGoal) {
        updateGoal(goal);
    } else {
        addGoal(goal);
    }

    setIsModalOpen(false);
}

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                    <h2 className="text-xl font-semibold text-slate-900">
                        {editingGoal ? "Edit Goal" : "Add Goal"}
                    </h2>

                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="space-y-5 p-6">

                    {/* Goal Name */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Goal Name
                        </label>

                        <input
                            type="text"
                            placeholder="e.g. Lose Weight"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Category
                        </label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        >
                            <option value="Fitness">Fitness</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Activity">Activity</option>
                        </select>
                    </div>

                    {/* Direction */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Goal Direction
                        </label>

                        <select
                            value={direction}
                            onChange={(e) => setDirection(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        >
                            <option value="increase">Increase</option>
                            <option value="decrease">Decrease</option>
                        </select>
                    </div>

                    <div>
    <label className="mb-2 block text-sm font-medium text-slate-700">
        Starting Value
    </label>

    <input
        type="number"
        value={startingValue}
        onChange={(e) => setStartingValue(e.target.value)}
        placeholder="80"
        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
    />
</div>
                    
                    {/* Target + Current */}
                    
                    <div className="grid grid-cols-2 gap-4">

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Current Value
                            </label>

                            <input
                                type="number"
                                value={current}
                                onChange={(e) => setCurrent(e.target.value)}
                                placeholder="75"
                                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-medium text-slate-700">
                                Target Value
                            </label>

                            <input
                                type="number"
                                value={target}
                                onChange={(e) => setTarget(e.target.value)}
                                placeholder="70"
                                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                            />
                        </div>

                    </div>

                    {/* Unit */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Unit
                        </label>

                        <select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        >
                            <option value="">Select unit</option>
                            <option value="kg">kg</option>
                            <option value="g">g</option>
                            <option value="cal">cal</option>
                            <option value="steps">steps</option>
                            <option value="reps">reps</option>
                            <option value="workouts">workouts</option>
                        </select>
                    </div>

                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">

                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="rounded-lg border border-slate-200 px-5 py-2 font-medium text-slate-600 transition hover:bg-slate-100"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSaveGoal}
                        className="rounded-lg bg-emerald-600 px-5 py-2 font-medium text-white transition hover:bg-emerald-700 active:scale-95"
                    >
                        {editingGoal ? "Save Changes" : "Add Goal"}
                    </button>

                </div>

            </div>
        </div>
    );
}