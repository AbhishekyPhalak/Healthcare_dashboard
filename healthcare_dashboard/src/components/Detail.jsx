export default function Detail({img, upper, lower}){
    return (
        <div className="flex mb-2 ml-4">
            <img src={img} className="h-10 w-10 ml-2 mr-2 " alt="" />
            <div className="ml-2 mr-2 flex flex-col">
                <p style={{ fontSize: '13px' }} className="text-[#072635] ">{upper}</p>
                <p style={{ fontSize: '13px' }} className="text-[#072635] font-bold">{lower}</p>
            </div>
        </div>

    );
}