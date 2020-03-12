import React from 'react';
import { XYPlot, LineSeries } from 'react-vis';

import './Graph.css';

function Graph() {
	
	const Data = [
		{
			x: 0, y:5
		},
		{
			x:1, y:1
		},
		{
			x: 2, y:2
		},
		{
			x: 3, y:8
		}
	];
	return (
		<div>
			<XYPlot
				width={500}
				height={350}
			>
				<LineSeries 
					data={Data}
					strokeStyle={"solid"}
					stroke={"#0000ff"}

				/>
			</XYPlot>
		</div>
	);
}

export default Graph;