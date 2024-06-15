import { Models } from 'appwrite';
import Loader from '@/components/shared/SearchResult';
import GridPostList from './GridPostList';

type SearchResultProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }:
    SearchResultProps) => {
    if (isSearchFetching) return (<Loader />)

    if (searchedPosts && searchedPosts.documents.length > 0) {
        return (
            <GridPostList posts={searchedPosts.documents} />
        )
    }
}

export default SearchResults