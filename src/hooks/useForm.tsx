import { useEffect, useState } from "react";

const useForm = (arg: string) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    useEffect(() => {
        console.log(id);
    }, [id]);

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        console.log("submit");
        //fetch zapros
        //1. http://localhost:3500/task
        //2. Method POST
        //3. Payload {id, titile, ...}
        //4. try catch
    };

    return {
        id,
        setId,
        title,
        setTitle,
        description,
        setDescription,
        status,
        setStatus,
        createdAt,
        setCreatedAt,
        handleFormSubmit,
    };
};

export default useForm;
