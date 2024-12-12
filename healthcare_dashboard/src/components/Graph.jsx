import { useState } from "react";
import Chart from "./Chart";
import Pressure from "./Pressure";
import Highlights from "./Highlights";

export default function Graph({ diagnosis_history }) {
    const [selectedRange, setSelectedRange] = useState("6_months");
    const [selectedPressureData, setSelectedPressureData] = useState(() => {
        if (diagnosis_history.length > 0) {
            const firstEntry = diagnosis_history[0];
            return {
                systolic: firstEntry.blood_pressure.systolic.value,
                diastolic: firstEntry.blood_pressure.diastolic.value,
                systolicLevel: firstEntry.blood_pressure.systolic.levels,
                diastolicLevel: firstEntry.blood_pressure.diastolic.levels,
                heartRate: firstEntry.heart_rate.value,
                heartRateLevel: firstEntry.heart_rate.levels,
                respiratoryRate: firstEntry.respiratory_rate.value,
                respiratoryRateLevel: firstEntry.respiratory_rate.levels,
                temperature: firstEntry.temperature.value,
                temperatureLevel: firstEntry.temperature.levels,
            };
        }
        return { systolic: 0, diastolic: 0, systolicLevel: "", diastolicLevel: "", heartRate: 0, heartRateLevel: "", respiratoryRate: 0, respiratoryRateLevel: "", temperature: 0, temperatureLevel: "" }; // Default if no data is available
    });

    const rangeMapping = {
        "6_months": 6,
        "1_year": 12,
        "2_years": 24,
    };

    const monthsRequested = rangeMapping[selectedRange];
    const filteredData = diagnosis_history.slice(-monthsRequested);

    const onClick = ({ systolic, diastolic, systolicLevel, diastolicLevel, heartRate, heartRateLevel, respiratoryRate, respiratoryRateLevel, temperature, temperatureLevel }) => {
        setSelectedPressureData({
            systolic,
            diastolic,
            systolicLevel,
            diastolicLevel,
            heartRate,
            heartRateLevel,
            respiratoryRate,
            respiratoryRateLevel,
            temperature,
            temperatureLevel,
        });
    };
    

    return (
        <div>
            <div className="overflow-hidden">
                <div className="flex" style={{ backgroundColor: '#F4F0FE', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
                    <div className="flex flex-col w-2/3">
                        <div className="flex">
                            <div className="w-1/2">
                                <p style={{ fontSize: "13px" }} className="font-bold ml-2 mt-2 text-[#072635]">
                                    Blood Pressure
                                </p>
                            </div>
                            <div className="w-1/2 flex justify-end items-end">
                                <select
                                    className="mr-5 mt-2 border rounded bg-[#F4F0FE] text-gray-700 text-xs"
                                    value={selectedRange}
                                    onChange={(e) => setSelectedRange(e.target.value)}
                                >
                                    <option value="6_months">Last 6 Months</option>
                                    <option value="1_year">Last Year</option>
                                    <option value="2_years">Last 2 Years</option>
                                </select>
                            </div>
                        </div>
                        <div className="pl-5 pr-2 mt-2">
                            {filteredData.length > 0 ? (
                                <Chart diagnosisData={filteredData} onClick={onClick} />
                            ) : (
                                <p className="text-red-500">No data available for {selectedRange.replace("_", " ")}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex flex-col w-1/3">
                        <Pressure
                            name="Systolic"
                            value={selectedPressureData.systolic}
                            levels={selectedPressureData.systolicLevel}
                            color="#E66FD2"
                        />
                        <div className="pr-2">
                            <hr style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} />
                        </div>
                        <Pressure
                            name="Diastolic"
                            value={selectedPressureData.diastolic}
                            levels={selectedPressureData.diastolicLevel}
                            color="#8C6FE6"
                        />
                    </div>
                </div>
            </div>

            <div>
                <Highlights  heartRate={selectedPressureData.heartRate} heartRateLevel={selectedPressureData.heartRateLevel} respiratoryRate = {selectedPressureData.respiratoryRate} respiratoryRateLevel = {selectedPressureData.respiratoryRateLevel} temperature = {selectedPressureData.temperature} temperatureLevel = {selectedPressureData.temperatureLevel} />
            </div>
        </div>
    );
}
