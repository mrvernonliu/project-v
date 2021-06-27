import Image from "next/Image"
import {Experience} from "./types/Experience";

export default function ExperienceItem(props: Experience) {
    console.log(props)
    return (
        <div>
            <Image
                src={props.iconUrl}
                alt={`${props.name} logo`}
                height={"300px"}
                width={"300px"}
            />
        </div>
    )
}