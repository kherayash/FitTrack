import { useState, useEffect } from "react";
import GoalCard from "../components/goals/GoalCard";
import AddGoalModal from "../components/goals/AddGoalModal";
import { Plus } from "lucide-react";

export default function Goals() {
    const [goals, setGoals] = useState(() => {
        const saved = localStorage.getItem("goals");
        return saved ? JSON.parse(saved) : [];
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingGoal, setEditingGoal] = useState(null);

    function addGoal(newGoal) {
        setGoals((prevGoals) => [
            ...prevGoals,
            newGoal
        ]);
    }

    function deleteGoal(id) {
        setGoals((prevGoals) =>
            prevGoals.filter((goal) => goal.id !== id)
        );
    }

    function handleEditGoal(goal) {
        setEditingGoal(goal);
        setIsModalOpen(true);
    }

    function updateGoal(updatedGoal) {
        setGoals((prevGoals) =>
            prevGoals.map((goal) => {
                if (goal.id === updatedGoal.id) {
                    return updatedGoal;
                }

                return goal;
            })
        );
    }

    useEffect(() => {
        localStorage.setItem("goals", JSON.stringify(goals));
    }, [goals]);

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between py-4">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight">
                        Goal Progress
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Track your fitness goals and stay on target
                    </p>
                </div>

                <button
                    onClick={() => {
                        setEditingGoal(null);
                        setIsModalOpen(true);
                    }}
                    className="flex items-center gap-1.5 rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700"
                >
                    <Plus size={16} />
                    Add Goal
                </button>
            </div>

            {/* Goals */}
            <div className="mt-5 grid gap-5 md:grid-cols-2">
                {goals.map((goal) => (
                    <GoalCard
                        key={goal.id}
                        goal={goal}
                        deleteGoal={deleteGoal}
                        handleEditGoal={handleEditGoal}
                    />
                ))}
            </div>

            {/* Empty State */}
            {goals.length === 0 && (
                <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
                    <h2 className="text-lg font-semibold text-slate-800">
                        No goals yet
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Add your first goal to start tracking your progress.
                    </p>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <AddGoalModal
                    setIsModalOpen={setIsModalOpen}
                    addGoal={addGoal}
                    editingGoal={editingGoal}
                    updateGoal={updateGoal}
                />
            )}
        </div>
    );
}