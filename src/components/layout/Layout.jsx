import Sidebar from "./Sidebar.jsx"
import Navbar from "./Navbar.jsx"
import { Outlet } from "react-router-dom";
export default function Layout(){
    return (
        <>
        <div className="flex h-screen">
            <div><Sidebar/></div>
             <div className="flex-1 " id="mainContent"> 
               
                    <Navbar/>
                    <main className="p-8">
                    <Outlet />
                    </main>
                    
               
             </div>
        </div>
         
        </>
    )
}