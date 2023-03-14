import React, { useEffect, useRef } from 'react'
import useDataUrl from '../hooks/useDataUrl';
import classNames from "classnames";

export default function FileInput({ style, className, onChange }) {

    const {dataUrl, handleFileChange, resetImage} = useDataUrl()
    
    const handleFileInputChange = (event) => {
        handleFileChange(event)
        // pass the updated value back to the parent component
    };

    useEffect(() => {
        onChange(dataUrl)
    }, [dataUrl, onChange])
    return (
        <>
            <label
                htmlFor="image"
                className={className}
                style={style}
            >
                Choose an image
            </label>
            <input
            className='hidden w-fit' accept="image/*" type="file" name="image" id="image" onChange={handleFileInputChange} />
        
        </>
    );
}
