import React from 'react';
import Logo from "../assets/TestLogo.png";
import Home from "../assets/home.png";
import Chat from "../assets/chat.png";
import Group from "../assets/group.png";
import Credit from "../assets/creditcard.png";
import Calendar from "../assets/calendar.png";
import More from "../assets/more.png";
import Doctor from "../assets/doctor.png";
import Settings from "../assets/settings.png";
import NavItem from './NavItem';

export default function Navigation() {
    return (
        <div className="flex flex-wrap mr-5 ml-5 mt-4 mb-4 pr-8 pl-8 pt-3 pb-3 bg-white text-black h-16 rounded-full shadow-lg">
            
            <div className="flex w-1/4 items-center">
                <img className="w-53 h-18" src={Logo} alt="logo" />
            </div>

            <div className="flex w-2/4">
                <NavItem icon={Home} text="Overview" />
                <NavItem icon={Group} text="Patients" isActive={true} />
                <NavItem icon={Calendar} text="Schedule" />
                <NavItem icon={Chat} text="Message" />
                <NavItem icon={Credit} text="Transactions" />
            </div>

            <div className="flex flex-wrap w-1/4 justify-end items-center">
                <img className="w-11 h-11 ml-2" src={Doctor} alt="" />
                <div className="flex flex-col ml-2">
                    <p className="ml-1 text-[#072635] font-bold text-sm">Dr. Jose Simmons</p>
                    <p className="ml-1 text-[#072635] text-sm">General Practioner</p>
                </div>
                <img className="w-4 h-5 ml-5" src={Settings} alt="" />
                <img className="w-1 h-4 ml-2" src={More} alt="" />
            </div>

        </div>
    );
}
