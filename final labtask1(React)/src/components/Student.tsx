import { ReactNode } from "react";

interface Props {
    name: string,
    id: string,
    email: string,
    children: ReactNode
}

function Student({ name, id, email, children }: Props) {


    return (
        <>
            <div>
                <h1>Name: {name}</h1>
                <h2>ID: {id}</h2>
                <h2>Email: {email}</h2>
                {children}
            </div>
        </>
    )
}

export default Student;