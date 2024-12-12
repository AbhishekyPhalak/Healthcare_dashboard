import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Chart({ diagnosisData, onClick }) {
    const totalPoints = diagnosisData.length;
    const step = Math.ceil(totalPoints / 6); 
    const labels = diagnosisData
        .filter((_, index) => index % step === 0) 
        .map((entry) => `${entry.month.slice(0,3)} ${entry.year}`);

    const systolic = diagnosisData.map((entry) => entry.blood_pressure.systolic.value);
    const diastolic = diagnosisData.map((entry) => entry.blood_pressure.diastolic.value);

    const handleClick = (event, elements) => {
        if (elements.length > 0) {
            const index = elements[0].index; 
            const clickedEntry = diagnosisData[index];
            onClick({
                systolic: clickedEntry.blood_pressure.systolic.value,
                diastolic: clickedEntry.blood_pressure.diastolic.value,
                systolicLevel: clickedEntry.blood_pressure.systolic.levels,
                diastolicLevel: clickedEntry.blood_pressure.diastolic.levels,
                heartRate: clickedEntry.heart_rate.value,
                heartRateLevel: clickedEntry.heart_rate.levels,
                respiratoryRate: clickedEntry.respiratory_rate.value,
                respiratoryRateLevel: clickedEntry.respiratory_rate.levels,
                temperature: clickedEntry.temperature.value,
                temperatureLevel: clickedEntry.temperature.levels,
            });
        }
    };

    return (
        <div>
            <Line
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: "Systolic",
                            data: systolic,
                            borderColor: '#E66FD2',
                        },
                        {
                            label: "Diastolic",
                            data: diastolic,
                            borderColor: '#8C6FE6',
                        }
                    ],
                }}
                options={{
                    elements: {
                        line: { tension: 0.5 }
                    },
                    plugins: {
                        legend: { display: false } 
                    },
                    scales: {
                        x: {
                            type: "category",
                            grid: { display: false },
                            ticks: {
                                maxRotation: 0,
                                minRotation: 0,
                                autoSkip: false
                            }
                        },
                        y: {
                            grid: { display: true, color: "rgba(0, 0, 0, 0.1)" }
                        }
                    },
                    onClick: handleClick,
                }}
            />
        </div>
    );
}
