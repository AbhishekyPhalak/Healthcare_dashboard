import { useEffect, useState } from "react";
import DiagnosticList from "./DiagnosticList";
import LabResults from "./LabResults";
import PatientDetails from "./PatientDetails";
import Patients from "./Patients";
import { getEncryptedAuth } from "../lib/getEncryption";
import Graph from "./Graph";
import React from 'react';



export default function MainScreen(){

    const [activepatientData, setActivePatientData] = useState(null);
    const [isFetched, setIsFetched] = useState(false);
    const [patientData, setPatientData] = useState(null);
    const [activePatient, setActivePatient] = useState('Jessica Taylor');

    useEffect(() => {
        async function fetchPatientData() {
            try {
                const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
                    method: "GET",
                    headers: {
                        "Authorization": getEncryptedAuth(),
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch patient data");
                }

                const data = await response.json();
                setPatientData(data);
                const jessicaData = data.find(patient => patient.name === "Jessica Taylor");
                setActivePatientData(jessicaData);
                setIsFetched(true);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchPatientData();
    }, []);

    useEffect(() => {
        if (patientData && activePatient) {
            const newActivePatientData = patientData.find(patient => patient.name === activePatient);
            setActivePatientData(newActivePatientData);
        }
    }, [activePatient, patientData]);


    return (
        <div className="flex">
            <div className="flex flex-col w-1/4">
            {!isFetched ? (<p className="text-center text-gray-500">Loading Patients...</p>) : (<Patients active_patient={activePatient} patient_data={patientData} set_active_patient={setActivePatient}/>)}
            </div>

            <div className="flex flex-col w-1/2 mt-3">
                <div className="bg-white mr-5 ml-5 rounded-2xl">
                    <div className="ml-5 w-1/2 mb-5 mt-2 justify-start items-center">
                        <h3 className="font-bold">Diagnosis History</h3>
                    </div>
                    <div className="ml-5 mr-5 rounded-xl mb-5">
                        <div className="rounded-xl overflow-hidden">
                            {!isFetched ? (<p className="text-center text-gray-500">Loading Graph...</p>) : (<Graph diagnosis_history={activepatientData.diagnosis_history}/>)}
                        </div>
                    </div>
                </div>
                {!isFetched ? (<p className="text-center text-gray-500">Loading Diagnostic Details...</p>) : (<DiagnosticList diagnostic_data={activepatientData.diagnostic_list}/>)}
            </div>

            <div className="flex flex-col w-1/4">
                {!isFetched ? (<p className="text-center text-gray-500">Loading Patient Details...</p>) : (<PatientDetails name={activepatientData.name} dob={activepatientData.date_of_birth} contact={activepatientData.phone_number} econtact={activepatientData.emergency_contact} gender={activepatientData.gender} insurance={activepatientData.insurance_type} img={activepatientData.profile_picture}/>)}
                {!isFetched ? (<p className="text-center text-gray-500">Loading Lab Results...</p> ) : (<LabResults labResults={activepatientData.lab_results}/>)}
            </div>
        </div>
    );
}