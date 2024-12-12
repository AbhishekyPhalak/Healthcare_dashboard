import Card from './Card';
import Lungs from "../assets/respiratory_rate.png"
import Heart from "../assets/HeartBPM.png"
import Temp from "../assets/temperature.png"

export default function Highlights({heartRate, heartRateLevel, respiratoryRate, respiratoryRateLevel, temperature, temperatureLevel
}) {
    return (
        <div className="flex">
            <div className="flex w-1/3">
                <Card value={`${respiratoryRate}°F`} level={respiratoryRateLevel} img={Lungs} color="#E0F3FA" title="Respiratory Rate"/>
            </div>
            <div className="flex w-1/3 ml-5 mr-5">
                <Card value={`${temperature} bpm`} level={temperatureLevel} img={Temp} color="#FFE6E9" title="Temperature" />
            </div>
            <div className="flex w-1/3">
                <Card value={`${heartRate} bpm`} level={heartRateLevel} img={Heart} color="#FFE6F1" title="Heart Rate" />
            </div>
        </div>
    );
}
