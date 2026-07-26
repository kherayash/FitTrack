export default function MacroProgress({
    label,
    current,
    goal,
    color = "emerald",
    units = "",
}) {
    const percentage = Math.min((current / goal) * 100, 100);

    const colorClasses = {
        emerald: "bg-emerald-500",
        blue: "bg-blue-500",
        orange: "bg-orange-500",
        purple: "bg-purple-500",
    };

    return (
        <div className=" w-full flex flex-col gap-2">
            {/* Top Row */}
            <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium text-gray-700">
                    {label}
                </h4>

                <p className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-800">
                        {current}
                    </span>
                    /{goal} {units}
                </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full ${colorClasses[color]}`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}