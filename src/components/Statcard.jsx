

export default function StatCard({
    title,
    value,
    subtitle,
    icon: Icon,
}) {
    return (
        <div className=" group flex flex-col gap-5 bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">  
            {/* Top Row */}
            <div className="flex justify-between items-start">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {title}
                </h3>

                <div className="bg-emerald-50 p-3 rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-100">
                    <Icon size={22} className="text-emerald-500" />
                </div>
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col gap-1">
                <p className="text-3xl font-bold text-emerald-600 transition-colors duration-300 group-hover:text-emerald-500">
                    {value}
                </p>

                <p className="text-sm text-slate-500">
                   {subtitle}
                </p>
            </div>
        </div>
    );
}