import Download from "../assets/download.png";

export default function LabItem({ description, isActive }) {
    return (
        <div className="flex pl-5 pr-5 mt-3 mb-3"> 
            <div className={`flex w-full px-2 py-2 rounded-lg ${isActive ? 'bg-[#F6F7F8]' : ''}`}>
                <div className="flex justify-start w-1/2">
                    <p style={{ fontSize: '13px' }} className="ml-2 text-[#072635]">{description}</p>
                </div>
                <div className="flex w-1/2 justify-end items-center pr-1">
                    <img src={Download} className="w-4 h-4" alt="" />
                </div>
            </div>
        </div>
    );
}
