import { Search,Bell, CircleUser   } from 'lucide-react';
export default function Navbar(){
    return (
        <>
           <div className="w-full h-20 px-8 shadow-sm flex justify-between items-center bg-[oklch(92.8%_0.006_264.531)] ">
             {/* left part */}
              <div>
                 <h1 className="text-2xl font-semibold">Dashboard</h1>
              </div>
               {/* middle part */}
               <div className='flex items-center gap-5'>
                 <div className="flex items-center w-64 gap-2 h-10 bg-white rounded-xl px-3">
                <Search size={18} className="text-gray-500" />

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

                <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition-colors">
                    <CircleUser size={20} />
                </div>
            </div>
               </div>
             
            </div>        
        </>
    )
}