import Student from "./Student";

function StudentList() {
    const std = ['Md. Sajid Islam Khan'];


    return (
        <>
            <div>
                <img src='src/assets/Photos/myPicture.jpg' height={300} width={300}></img>
            </div>
            <div>
                {
                    std.map((item) => (
                        <Student key={item} name={item} id="21 - 45003 - 2" email="21-45003-2@student.aiub.edu">
                            <h3>CGPA=3.96</h3>
                        </Student>
                    ))
                }
            </div>
        </>
    )
}

export default StudentList;