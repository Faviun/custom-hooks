import InpTaskItem from "./components/InpTaskItem";
import useForm from "./hooks/useForm";

function App() {
    const {
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
    } = useForm("");

    const mas = [
        { val: id, setVal: setId, n: "id" },
        { val: title, setVal: setTitle, n: "title" },
        { val: description, setVal: setDescription, n: "description" },
        { val: status, setVal: setStatus, n: "status" },
        { val: createdAt, setVal: setCreatedAt, n: "createdAt" },
    ];

    return (
        <div className="flex justify-center mt-12">
            <form
                onSubmit={handleFormSubmit}
                className="space-y-6"
                action="#"
                method="POST"
            >
                {mas.map((e) => (
                    <InpTaskItem
                        key={e.n}
                        item={e.val}
                        setItem={e.setVal}
                        itemlabel={e.n}
                    />
                ))}

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default App;
