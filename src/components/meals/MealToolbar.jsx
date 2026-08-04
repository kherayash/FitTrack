import { Search,} from 'lucide-react';
import { useState } from 'react';

export default function MealToolbar({
    activeFilter , setActiveFilter, searcTerm , setSearchTerm
}){
    const filters = [
    "All",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
];


 
    return(
       <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-2 mt-5 shadow-sm">    
              
   
       <div className="flex items-center gap-1 rounded-lg  p-1">
            {filters.map((item) => (
                        <button key={item} className={`px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm active:scale-95 hover:text-slate-900
                                     ${
                                    activeFilter === item
                                        ? "bg-emerald-500 shadow-md text-white"
                                        : "bg-white hover:bg-slate-100"
                                }`} onClick={()=> setActiveFilter(item)}>
                               
                            
                            {item}
                        </button>
        ))} </div>
              <div className="h-6 w-px bg-slate-200 mx-4"></div>
                  <div className="flex items-center gap-2 rounded-lg focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 px-3 py-2">
                    <Search size={18}  className="text-slate-500 transition-colors duration-200 " />
                 <input
                    type="search"
                    placeholder="Search meals..."
                    className="w-72 outline-none bg-transparent"
                    aria-label="Search meals"
                    value={searcTerm}
                    onChange={(e)=>{
                        setSearchTerm(e.target.value)
                    }}
                />     
                  </div>
              
               
            
   
    </div>
    )
}