interface Props {
    skills: string,


}

function StudentSkill({ skills }: Props) {
    return (
        <>
            <div>

                <h2>{skills}</h2>
            </div>
        </>
    )
}

export default StudentSkill;