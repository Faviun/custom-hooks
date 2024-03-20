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

    return (
        <div className="flex justify-center">
            <form
                onSubmit={handleFormSubmit}
                className="space-y-6"
                action="#"
                method="POST"
            >
                <div>
                    <label
                        htmlFor="id"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Id
                    </label>
                    <div className="mt-2">
                        <input
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            id="id"
                            name="id"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Title
                    </label>
                    <div className="mt-2">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            id="title"
                            name="title"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Description
                    </label>
                    <div className="mt-2">
                        <input
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            id="description"
                            name="description"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="status"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Status
                    </label>
                    <div className="mt-2">
                        <input
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            id="status"
                            name="status"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="createdAt"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Created At
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            value={createdAt}
                            onChange={(e) => setCreatedAt(e.target.value)}
                            id="createdAt"
                            name="createdAt"
                            type="text"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

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
