import {SelectedLanguage} from "./types/SelectedLanguage";
import {Line} from "react-chartjs-2";

import styles from "../../../styles/UsageYearsChart.module.scss"
import {pastelColors} from "./PastelColors";
import * as React from "react";
import AnimatedUpArrow from "../../common/AnimatedUpArrow";

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
                    if (selectedLanguage.usageYears?.includes(year)) {
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

    // TODO: Cannot change chart axis colour??? Why??? I also tried backgroundColor
    const options = {
        responsive:true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{gridLines: {color: "#ffffff"}}],
            yAxes: [
                {
                    gridLines: {color: "#ffffff"},
                    ticks: {
                        fontColor: "white",
                        max: 1,
                        min: 0,
                        stepSize: 1
                    },
                },
            ]
        },
    };

    let content
    if (props.selectedLanguages.length > 0) {
        content = (
            <div>
                <div className={styles.chartContainer}>
                    <Line data={data} options={options} type={"line"} />
                </div>
                <br/>
                <div className={styles.chartWarning}>
                    (Please do not read too deeply into this chart. I just built this for fun the values do not reflect my competence in each tool.)
                </div>
            </div>
        )
    } else {
        content = (
            <div className={styles.noDataContainer}>
                <AnimatedUpArrow />
                <br />
                <br />
                <h3 className={styles.noDataMessage}>
                    Click on one of the tools above!
                </h3>
            </div>
        )
    }

    return(
        <div>
            { content }
        </div>
    );

}