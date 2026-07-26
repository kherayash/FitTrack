import MacroProgress from "./MacroProgress";

export default function MacrosCard() {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 transition-shadow duration-300 hover:shadow-md">
            <h3 className="text-lg font-semibold mb-6">
                Today's Macros
            </h3>

            <div className="flex flex-col gap-6">
                <MacroProgress
                    label="Protein"
                    current={181}
                    goal={200}
                    color="emerald"
                    units="g"
                />

                <MacroProgress
                    label="Carbs"
                    current={223}
                    goal={280}
                    color="blue"
                     units="g"
                />

                <MacroProgress
                    label="Fat"
                    current={87}
                    goal={80}
                    color="orange"
                     units="g"
                />
            </div>
        </div>
    );
}