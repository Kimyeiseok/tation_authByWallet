import React, { useState, useMemo } from 'react'
import { Select } from 'antd';
import countryList from 'react-select-country-list'

const { Option } = Select;

const CountrySelector = (props) => {
	console.log(props)
  const options = useMemo(() => countryList().getData(), [])
  return (
  <Select placeholder="Select a option" allowClear>
		   {options.map((item)=>{
			 return <Option key={item.value} value={item.value}>{item.label}</Option>
		  })}
</Select>	  
  )
}

export default CountrySelector