import { Search,Bell, CircleUser   } from 'lucide-react';
export default function Navbar(){
    return (
        <>
   <div className="sticky top-0 z-20 w-full h-20 px-8 bg-[oklch(92.8%_0.006_264.531)] border-b border-slate-200 flex justify-between items-center">
             {/* left part */}
              <div>
                 <h1 className="text-2xl font-semibold">Dashboard</h1>
              </div>
               {/* middle part */}
               <div className='flex items-center gap-6'>
                 <div className="flex items-center w-72 h-10 gap-2 rounded-xl border border-slate-200 bg-white px-3 transition-all duration-200 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-100">
               
               
               <Search size={18}  className="text-slate-500 transition-colors duration-200 group-focus-within:text-emerald-500" />
                            
                           
                       

                <input
                    type="search"
                    placeholder="Search..."
                    className="w-full outline-none bg-transparent"
                />
                </div>
                 {/* right part */}
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                            <Bell size={20} />
                    </div>

                <div className="p-2 rounded-full transition-all duration-200 hover:bg-slate-100 hover:scale-105">
                    <CircleUser size={20} />
                </div>
            </div>
               </div>
             
            </div>        
        </>
    )
}