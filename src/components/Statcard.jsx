

export default function StatCard({
    title,
    value,
    subtitle,
    icon: Icon,
}) {
    return (
        <div className="flex flex-col gap-5 bg-white rounded-xl border border-gray-200 shadow-sm p-6 transition-shadow duration-200 select-none">
            {/* Top Row */}
            <div className="flex justify-between items-start">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {title}
                </h3>

                <div className="bg-emerald-50 p-3 rounded-2xl">
                    <Icon size={22} className="text-emerald-500" />
                </div>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col gap-1">
                <p className="text-3xl font-bold text-emerald-600">
                    {value}
                </p>

                <p className="text-sm text-gray-500">
                   {subtitle}
                </p>
            </div>
        </div>
    );
}