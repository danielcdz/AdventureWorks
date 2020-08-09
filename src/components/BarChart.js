import React from 'react';
import {Bar} from 'react-chartjs-2';

export const BarChart = () => {


    const data = {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets : [
            {
                label: 'Ventas del 2020 (M)',
                data: [3,2,1,4,5,6,7,8,9,4,5,3],
                borderColor: ['rgba(0,51,255,0.2)'],
                backgroundColor: ['rgba(0,51,255,0.2)'],
                pointBackgroundColor: 'rgba(0,51,255,0.2)',
                pointBorderColor: 'rgba(0,51,255,0.2)'
            },
            {
                label: 'Ventas del 2019 (M)',
                data: [7,2,4,1,2,3,7,5,3,4,1,5],
                borderColor: ['rgba(255,0,0,0.2)'],
                backgroundColor: ['rgba(255,0,0,0.2)'],
                pointBackgroundColor: 'rgba(255,0,0,0.2)',
                pointBorderColor: 'rgba(255,0,0,0.2)'
            },
            {
                label: 'Ventas del 2019 (M)',
                data: [7,2,4,1,2,3,7,5,3,4,1,5],
                borderColor: ['rgba(255,0,0,0.2)'],
                backgroundColor: ['rgba(255,0,0,0.2)'],
                pointBackgroundColor: 'rgba(255,0,0,0.2)',
                pointBorderColor: 'rgba(255,0,0,0.2)'
            },
            {
                label: 'Ventas del 2019 (M)',
                data: [7,2,4,1,2,3,7,5,3,4,1,5],
                borderColor: ['rgba(255,0,0,0.2)'],
                backgroundColor: ['rgba(255,0,0,0.2)'],
                pointBackgroundColor: 'rgba(255,0,0,0.2)',
                pointBorderColor: 'rgba(255,0,0,0.2)'
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Gráfico de barras'
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:12,
                        stepsize:1
                    }
                }
            ]
        }
    }


    return (
        <Bar data={data} options={options}/>
    )
}
