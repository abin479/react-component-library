import { GoChevronDown } from "react-icons/go";

import { useEffect, useRef, useState } from "react";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    // const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (selectedOption) => {
        // setSelectedOption(selectedOption.value);
        onChange(selectedOption);
        setIsOpen(false);
    }

    const renderedOptions = options.map(option => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} value={option.value} onClick={() => handleOptionClick(option)}>
                {option.label}
            </div>
        )
    })

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer border rounded p-3" onClick={() => handleClick()}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full border rounded p-3">{renderedOptions}</Panel>}
        </div>
    );
}

export default Dropdown;