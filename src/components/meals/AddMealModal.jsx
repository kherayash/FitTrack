export default function AddMealModal({setIsModalOpen}){
    return (
        
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
    
    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <h2 className="text-xl font-semibold text-slate-900">
            Add Meal
        </h2>

        <button
            onClick={() => setIsModalOpen(false)}
            className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
            ✕
        </button>
    </div>
       
    <input type="text" />
    <button>Search</button>
    <div className="p-6">
        
    </div>
    <div>Empty results</div>
    <div>
       dropdown
    </div>
    <div>
        <button>add</button>
        <button>cancel</button>
    </div>
</div>
        </div>
    )
}