export default function SummaryCard(
    {title,
    value,
    unit,
    color = "emerald",
}
){
     const colorClasses = {
    emerald: "text-emerald-500",
    blue: "text-blue-500",
    orange: "text-orange-500",
    purple: "text-purple-500",
};
    return (
       <div className=" group flex flex-col gap-5 bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1">  
            {/* Top Row */}
            <div className="flex justify-between items-start">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {title}
                </h3>

                
            </div>

            {/* Bottom Content */}
            <div className="flex flex-col gap-1">
               <p className={`text-3xl font-bold ${colorClasses[color]}`}>
                    {value} 
                    <span className="ml-1 text-xl">{unit}</span>
                </p>

                
            </div>
        </div>
    )
}