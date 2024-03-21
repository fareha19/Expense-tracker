import React from 'react';

import ChartBar from './ChartBar.js';
import './Chart.css';

const Chart=props=>{
const dataPointValues = props.datapoints.map(dataPoint=>dataPoint.value);
const totalMaximum = Math.max(...dataPointValues);
return (
<div className='chart'>
{props.datapoints.map((datapoints)=>(
    <ChartBar  
    key={datapoints.label}
    value={datapoints.value}
    maxValue={totalMaximum}
    label={datapoints.label}
    />
))}
</div>
);
};

export default Chart;