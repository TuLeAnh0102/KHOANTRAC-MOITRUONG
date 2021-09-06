import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { Controller } from "react-hook-form";
const styleRequire = {
    color: "#FF0000",
    marginLeft: "2px",
}
export default function SelectTrNoLabel({ errors = null, placeholder, dataOptions, handelOnChange, nameselect, setValueDefault, control, labelSelect }) {
    const [valuehientai, setvaluehientai] = useState('');
    useEffect(() => {
        if(dataOptions && dataOptions.length>0)
        {
            if(setValueDefault != null && setValueDefault != undefined)
            {
                setvaluehientai(dataOptions.find(item => item.value === setValueDefault));
            }
            else
            {
                setvaluehientai('')
            }
        }
        else{
            setvaluehientai("")
        }
        
    }, [setValueDefault, dataOptions])
    const handleOnSelectChange = (e, item) => {
        setvaluehientai(e);
        handelOnChange(e, item);
    }
    const noOptionsMessage = () => {
        return "Không có dữ liệu!"
    }
    const colourStyles = {
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: '#000000',
                fontStyle: 'italic'
            }
        }
    }
    return (
        <>
            <Controller
                name={nameselect}
                control={control}
                defaultValue={setValueDefault&&setValueDefault?setValueDefault:""}
                render={() => (
                    <Select
                        placeholder={placeholder}
                        noOptionsMessage={noOptionsMessage}
                        name={nameselect}
                        value={valuehientai}
                        options={dataOptions}
                        onChange={handleOnSelectChange}
                        className={`${errors[nameselect] ? "is-invalid" : ""}`}
                        styles={colourStyles}
                    />
                )}
            />
            {!valuehientai && errors[nameselect] && <div style={{ color: "red", padding: '0px', margin: '0px', fontStyle: 'italic' }}>{errors[nameselect]?.message} {labelSelect}</div>}
        </>

    )
}
