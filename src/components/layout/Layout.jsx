import Sidebar from "./Sidebar.jsx"
import Navbar from "./Navbar.jsx"
import { Outlet } from "react-router-dom";
export default function Layout(){
    return (
        <>
        <div className="flex h-screen">
            <Sidebar/>
             <div className="flex-1  flex flex-col overflow-hidden" id="mainContent"> 
               
                    <Navbar/>
                    <main className=" flex-1 overflow-y-auto p-8">
                    <Outlet />
                    </main>
                    
               
             </div>
        </div>
         
        </>
    )
}