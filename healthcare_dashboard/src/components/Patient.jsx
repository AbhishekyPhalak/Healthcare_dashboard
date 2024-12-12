export default function Patient({ onClick, imagePath, name, description, MoreH, isActive }) {
    return (
        <div onClick={onClick} className="flex pl-5 pr-2 mt-5 mb-5">
            <div className={`flex cursor-pointer w-full px-2 py-2 rounded-lg ${isActive ? 'bg-[#D8FCF7]' : ''}`}>
                <div className="flex w-1/6">
                    <img className="h-9 w-9" src={imagePath} alt="" />
                </div>
                <div className="flex justify-start w-4/6">
                    <div className="flex flex-col">
                        <p style={{ fontSize: '12px' }} className="ml-2 text-[#072635] font-bold">{name}</p>
                        <p style={{ fontSize: '10px' }} className="ml-2 text-[#072635]">{description}</p>
                    </div>
                </div>
                <div className="flex w-1/6 justify-end items-center pr-1">
                    <img src={MoreH} className="w-4 h-1" alt="" />
                </div>
            </div>
        </div>
    );
}
