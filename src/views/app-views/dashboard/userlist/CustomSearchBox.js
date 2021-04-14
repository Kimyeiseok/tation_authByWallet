import React from 'react';
import {  useSelector } from "react-redux";
import { SearchOutlined,} from '@ant-design/icons';
import utils from 'utils'
import { Input, Button, Form } from 'antd';
import { connectSearchBox } from 'react-instantsearch-dom';



 const SearchBar = (props) => {
	const { currentRefinement, isSearchStalled, refine, } = props
	const headerNavColor = useSelector(state => state.theme.headerNavColor)
	const mode = utils.getColorContrast(headerNavColor)   
	
	
	return (
		<div className={`nav-search-active ${mode} mb-1`} style={{backgroundColor: headerNavColor}}>
			<div className="d-flex align-items-center w-100">
				<Input allowClear  placeholder="Search player by name, address, email..."  prefix={<SearchOutlined className="mr-0"  />} 
					 type="search"
					 value={currentRefinement}
					 onChange={event => refine(event.currentTarget.value)}
					/>	
			</div>
            
		</div>
	)
}

const CustomSearchBox = connectSearchBox(SearchBar);

export default CustomSearchBox