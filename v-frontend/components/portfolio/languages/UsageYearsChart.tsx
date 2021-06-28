import {SelectedLanguage} from "./types/SelectedLanguage";
import {Line} from "react-chartjs-2";

import styles from "../../../styles/UsageYearsChart.module.scss"
import {pastelColors} from "./PastelColors";
import * as React from "react";

interface UsageYearsChartProps {
    selectedLanguages: SelectedLanguage[]
}

const years = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]


export default function UsageYearsChart(props: UsageYearsChartProps) {
    const data = {
        labels: years,
        datasets: props.selectedLanguages.map((selectedLanguage, i) => {
            return {
                label: selectedLanguage.name,
                data: years.map((year) => {
                    if (selectedLanguage.usageYears.includes(year)) {
                        return 1
                    } else {
                        return 0
                    }
                }),
                fill: false,
                backgroundColor: pastelColors[i],
                borderColor: pastelColors[i]
            }
        })
    };

    const options = {
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    ticks: {
                        max: 1,
                        min: 0,
                        stepSize: 1
                    },
                },
            ],
        },
    };

    let content
    if (props.selectedLanguages.length > 0) {
        content = (
            <div className={styles.chartContainer}>
                <Line data={data} options={options} type={"line"} />
            </div>
        )
    } else {
        content = <h3 className={styles.noData}>No Data Selected</h3>
    }

    return(
        <div>
            { content }
            <br/>
            <div className={styles.chartWarning}>
                ( Please do not read too deeply into this chart. I just built this for fun the values do not reflect my competence in each tool.)
            </div>
        </div>
    );

}