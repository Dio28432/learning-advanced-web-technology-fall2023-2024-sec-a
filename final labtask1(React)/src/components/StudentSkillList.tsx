import StudentSkill from "./StudentSkill";

function StudentSkillList() {
    const std = ['Nestjs', 'Nextjs', 'Reactjs', 'PHP', 'Javascript', 'Typescript', "CSS", "Tailwind CSS", "C++'", 'Java', 'C#'];

    return (
        <>
            <div><h1>Languages and Frameworks Proficiency:</h1></div>
            <div>
                {
                    std.map((item) => (
                        <StudentSkill key={item} skills={item}>
                        </StudentSkill>
                    ))
                }
            </div>
        </>
    )
}

export default StudentSkillList;