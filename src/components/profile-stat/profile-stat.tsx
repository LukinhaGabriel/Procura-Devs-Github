interface ProfileStatsProps{
    label:string,
    value:string,
}

export default function ProfileStats(props:ProfileStatsProps){
    return (
        <p className="profile__stats-item">{props.label} <span>{props.value}</span></p>
    )
}