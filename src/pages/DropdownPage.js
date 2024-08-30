import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
    const [ selection, setSelected ] = useState(null);
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]

    const handleSelect = (option) => {
        setSelected(option)
    }

    
    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    );
}

export default DropdownPage;