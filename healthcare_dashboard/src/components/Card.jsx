export default function Card({value, level, img, color, title}){
    return (
        <div style={{ backgroundColor: color }} className="flex mb-2 mt-5 flex-col pl-5 pr-5 pt-2 pb-3 rounded-xl overflow-hidden w-full ">
            <img className="h-16 w-16" src={img} alt="" />
            <p style={{ fontSize: '13px' }} className="text-[#072635]">{title}</p>
            <p style={{ fontSize: '18px' }} className="font-bold text-[#072635]">{value}</p>
            <p style={{ fontSize: '11px' }} className="text-[#072635]">{level}</p>
        </div>
    );
}