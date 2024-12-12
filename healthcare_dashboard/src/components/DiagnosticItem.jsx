export default function DiagnosticItem({ Problem, Description, Status, isActive }) {
    return (
        <div className={`flex pl-5 pr-2 mt-4 mb-4 rounded-lg ${isActive ? 'bg-[#F6F7F8]' : ''}`} style={{ height: '30px' }}>
            <div className="flex justify-start w-1/5">
                <p className={`ml-2 text-[#072635] text-[13px] ${isActive ? 'font-bold' : ''}`}>
                    {Problem}
                </p>
            </div>
            <div className="flex justify-start w-3/5">
                <p className={`ml-10 text-[#072635] text-[13px] ${isActive ? 'font-bold' : ''}`}>
                    {Description}
                </p>
            </div>
            <div className="flex w-1/5 items-center pr-1">
                <p className={`ml-2 text-[#072635] text-[13px] ${isActive ? 'font-bold' : ''}`}>
                    {Status}
                </p>
            </div>
        </div>
    );
}
