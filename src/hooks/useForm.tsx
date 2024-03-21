import {
    // useEffect,
    useState,
} from "react";

type User = {
    id: string;
    title: string;
    description: string;
    status: string;
    createdAt: string;
};

type PostDataResponse = {
    data: User[];
};

const useForm = (arg: string) => {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [createdAt, setCreatedAt] = useState("");

    const data = [
        {
            id: id,
            title: title,
            description: description,
            status: status,
            createdAt: createdAt,
        },
    ];

    // useEffect(() => {
    //     console.log(data);
    // }, [id]);

    async function postData(url: string) {
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json()) as PostDataResponse;

            console.log("result is: ", JSON.stringify(result, null, 4));

            return result;
        } catch (error) {
            if (error instanceof Error) {
                console.log("error message: ", error.message);
                return error.message;
            } else {
                console.log("unexpected error: ", error);
                return "An unexpected error occurred";
            }
        }
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        //fetch zapros
        //1. http://localhost:3500/task
        //2. Method POST
        //3. Payload {id, titile, ...}
        //4. try catch

        postData("http://localhost:3500/task");

        // try {
        //     const response: any = fetch("http://localhost:3500/task", {
        //         method: "POST",
        //         body: JSON.stringify(data),
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //     });
        //     const json = response.json();
        //     console.log("Успех:", JSON.stringify(json));
        // } catch (error) {
        //     console.error("Ошибка:", error);
        // }
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
