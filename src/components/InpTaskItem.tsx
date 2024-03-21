interface Props {
    itemlabel: string;
    item: string;
    setItem: any;
}

const InpTaskItem: React.FC<Props> = ({ item, setItem, itemlabel }) => {
    return (
        <div>
            <label
                htmlFor={itemlabel}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {itemlabel}
            </label>
            <div className="mt-2">
                <input
                    value={item}
                    onChange={(e) => setItem(e.target.value)}
                    id={itemlabel}
                    name={itemlabel}
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    );
};

export default InpTaskItem;
