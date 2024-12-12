import Search from "../assets/search.png"
import MoreH from "../assets/more_h.png"
import Patient from "./Patient";

export default function Patients({active_patient, patient_data, set_active_patient}) {
    return (
        <div className="bg-white mr-5 ml-5 rounded-2xl mt-4 pt-2 overflow-hidden">
            
            <div className="flex">
                <div className="ml-5 w-1/2 justify-start items-center">
                    <h3 className="font-bold">Patients</h3>
                </div>
                <div className="mr-5 flex w-1/2 justify-end items-center">
                    <img className="w-4 h-4" src={Search} alt="" />
                </div>
            </div>

            <div style={{ height: '695px' }} className="overflow-y-scroll bg-white rounded-2xl">
                <div className="content">
                    {patient_data && patient_data.length > 0 ? 
                    patient_data.map((patient, index) => (
                        <Patient key={index} onClick={()=>set_active_patient(patient.name)} isActive={patient.name===active_patient} imagePath={patient.profile_picture} name={patient.name} description={`${patient.gender}, ${patient.age}`} MoreH={MoreH}/>
                    )) :
                    (<p>Sorry... No Lab Results</p>)}
                </div>
            </div>

        </div>
    );
}
