import Detail from "./Detail";
import BirthIcon from "../assets/BirthIcon.png";
import PhoneIcon from "../assets/PhoneIcon.png";
import InsuranceIcon from "../assets/InsuranceIcon.png";
import FemaleIcon from "../assets/FemaleIcon.png";
import formatDate from "../lib/dob_converter";

export default function PatientDetails({ name, dob, contact, econtact, gender, insurance, img }){
    return (
        <div className="bg-white mr-5 ml-5 rounded-2xl mt-4 pt-6 overflow-hidden">
            <div style={{ height: '460px' }} className=" bg-white rounded-2xl flex-col">
                <div className="flex justify-center items-center content-center">
                    <img className="w-50 h-50" src={img} alt="" />
                </div>
                <div className="flex justify-center content-center items-center mt-4 mb-5">
                    <h3 className="font-bold">{name}</h3>
                </div>
                <Detail img={BirthIcon} upper="Date Of Birth" lower={formatDate(dob)}/>
                <Detail img={FemaleIcon} upper="Gender" lower={gender}/>
                <Detail img={PhoneIcon} upper="Contact Info" lower={contact}/>
                <Detail img={PhoneIcon} upper="Emergency Contact" lower={econtact}/>
                <Detail img={InsuranceIcon} upper="Insurance Provider" lower={insurance}/>
                <div className="flex justify-center items-end content-center">
                <button className="mt-5 bg-[#01F0D0] rounded-2xl pl-5 pr-5 pt-2 pb-2 text-xs font-bold">Show All Information</button>
                </div>
            </div>
        </div>
    );
}