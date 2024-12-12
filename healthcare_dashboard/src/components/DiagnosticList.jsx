import DiagnosticItem from "./DiagnosticItem";

export default function DiagnosticList({diagnostic_data}){
    return (
        <div className="bg-white mr-5 ml-5 rounded-2xl mt-4 pt-2 overflow-hidden"> 
            <div className="flex mb-6">
                <div className="ml-5 w-1/2 justify-start items-center">
                    <h3 className="font-bold">Diagnostic List</h3>
                </div>
                <div className="mr-5 flex w-1/2 justify-end items-center">
                </div>
            </div>

            <div style={{ height: '215px' }} className="overflow-y-scroll bg-white rounded-2xl -mt-2">
                <div className="content">
                    {diagnostic_data && diagnostic_data.length>0 ? 
                    (
                        <>
                            <DiagnosticItem Problem="Problem/Diagnosis" Description="Description" Status="Status" isActive={true} />
                            {diagnostic_data.map((diagnostic,index)=>(
                            <DiagnosticItem key={index} Problem={diagnostic.name} Description={diagnostic.description} Status={diagnostic.status}/>
                        ))}
                        </>
                        
                    ) : (<p>Sorry... No Diagnostic data</p>)}
                </div>
            </div>
        </div>

    );
}