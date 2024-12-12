import LabItem from "./LabItem";

export default function LabResults({ labResults }) {
    return (
        <div className="bg-white mr-5 ml-5 rounded-2xl mt-4 pt-2 overflow-hidden">
            <div className="flex">
                <div className="ml-5 w-1/2 justify-start items-center">
                    <h3 className="font-bold">Lab Results</h3>
                </div>
                <div className="mr-5 flex w-1/2 justify-end items-center"></div>
            </div>

            <div style={{ height: '205px' }} className="overflow-y-scroll bg-white rounded-2xl">
                <div className="content">
                    {labResults && labResults.length>0 ? 
                    (labResults.map((result, index) => (
                        <LabItem key={index} description={result} isActive={index === 1} />
                    ))) : 
                    (<p>Sorry... No Lab Results</p>)}
                </div>
            </div>
        </div>
    );
}
