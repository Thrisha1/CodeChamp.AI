import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Piechart({data}) {
    console.log("piedata", data)
    return (
        <PieChart
            series={[
                {
                    data: data,
                },
            ]}
            width={400}
            height={200}
        />
    );
}