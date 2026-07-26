import MacroProgress from "./MacroProgress";
export default function GoalProgress(){
    return(
       <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 transition-shadow duration-300 hover:shadow-md ">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Goal Progress
        </h2>
           <div className="grid grid-cols-2 gap-6  ">
            <MacroProgress
                                label="Weight"
                                current={68}
                                goal={75}
                                color="orange"
                                units="kg"
                                
                            />
            <MacroProgress
                                label="Daily Calories"
                                current={1800}
                                goal={2400}
                                color="purple"
                                units=" kcal"
                               
                            />
            <MacroProgress
                                label="Protein"
                                current={181}
                                goal={200}
                                color="emerald"
                                 units="g"
                                 
                            />
            <MacroProgress
                                label="Water"
                                current={2700}
                                goal={4000}
                                color="blue"
                                 units="ml"
                                 
                            />
           </div>
       </div>
    )
}