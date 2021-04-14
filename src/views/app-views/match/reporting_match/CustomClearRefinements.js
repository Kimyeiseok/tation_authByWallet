import { connectCurrentRefinements } from 'react-instantsearch-dom';


const ClearRefinements = (props) => {
	
	const { items, refine, clearButton } = props
	
	
	return (
	<>
  <div  ref={clearButton} onClick={() => refine(items)} style={{display:'none'}}>
    Clear all refinements
  </div>
	</> 
	)
	
}


const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);
export default CustomClearRefinements