import {SelectedLanguage} from "./types/SelectedLanguage";


interface UsageYearsChartProps {
    selectedLanguages: SelectedLanguage[]
}
export default function UsageYearsChart(props: UsageYearsChartProps) {
    return (
        <div>
            { props.selectedLanguages?.[0]?.name }
        </div>
    )
}