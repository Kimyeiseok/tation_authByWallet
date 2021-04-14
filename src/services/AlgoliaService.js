import algoliasearch from 'algoliasearch/lite';

export const ALGOLIA_ID = '7P2K0172OW';
export const ALGOLIA_SEACRCH_KEY= 'e9c3c49c82c79a7df0c47e98f702c368';
export const ALGOLIA_INDEX_NAME = "taction_authByWallet";
	//const searchClient = algoliasearch(ALGOLIA_ID, ALGOLIA_SEACRCH_KEY);	

export const searchClient = {
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      });
    }

    return algoliasearch(ALGOLIA_ID, ALGOLIA_SEACRCH_KEY).search(requests);
  },
};