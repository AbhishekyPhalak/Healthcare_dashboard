import React from "react";

export default function NavItem({ icon, text, isActive }) {
    return (
        <div className={`flex items-center justify-center ml-5 mr-5 ${isActive ? 'bg-[#01F0D0] px-4 py-2 rounded-2xl' : ''}`}>
            <img src={icon} alt={text} />
            <p className="ml-1 text-[#072635] font-bold text-sm">{text}</p>
        </div>
    );
}
