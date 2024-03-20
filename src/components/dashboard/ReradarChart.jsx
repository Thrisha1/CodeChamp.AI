import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from "recharts";

function ReRadarChart({std_baro_data}) {


    return (
        <RadarChart
            cx={250}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={std_baro_data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis />
            <Radar
                name="Skills"
                dataKey="score"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
            />
        </RadarChart>
    );
}

export default ReRadarChart;