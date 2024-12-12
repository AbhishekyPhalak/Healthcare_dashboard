import ArrowUp from "../assets/ArrowUp.png";
import ArrowDown from "../assets/ArrowDown.png";

export default function Pressure({name, value, levels, color}){
    return (
        <div className="flex flex-col mt-3">
            <div className="flex items-center space-x-2 mb-1">
                <div 
                    style={{
                        width: '14px', 
                        height: '14px', 
                        borderRadius: '50%', 
                        backgroundColor: color
                    }}
                ></div>
                <p style={{ fontSize: '13px' }} className="text-[#072635] font-bold">{name}</p>
            </div>
            <div className="flex mb-1">
                <p style={{ fontSize: '16px' }} className="font-bold text-[#072635]">{value}</p>
            </div>
            <div className="flex items-center space-x-1 mb-2"> 
                {levels === "Higher than Average" ? (
                    <img className="h-2 w-3" src={ArrowUp} alt="Arrow Up" />
                ) : null}
                {levels === "Lower than Average" ? (
                    <img className="h-2 w-3" src={ArrowDown} alt="Arrow Down" />
                ) : null}
                <p style={{ fontSize: '13px' }} className="text-[#072635]">{levels}</p>
            </div>
        </div>

    );
}