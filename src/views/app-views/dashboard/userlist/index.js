import React, {useEffect} from 'react'
import ReactDOM from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';
import CustomSearchBox from './CustomSearchBox'
import CustomHits from './CustomHits'

export const ALGOLIA_ID = '7P2K0172OW';
export const ALGOLIA_SEACRCH_KEY= 'e9c3c49c82c79a7df0c47e98f702c368';
export const ALGOLIA_INDEX_NAME = "taction_authByWallet";
const searchClient = algoliasearch(ALGOLIA_ID, ALGOLIA_SEACRCH_KEY);	



const Userlist = () => {
	return (
	  <InstantSearch indexName={ALGOLIA_INDEX_NAME} searchClient={searchClient}>
		<CustomSearchBox />
        <CustomHits />
	  </InstantSearch>
	)
}

export default Userlist
