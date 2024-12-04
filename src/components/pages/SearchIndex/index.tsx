import React from 'react';

export type SearchIndexProps = {
    entries: {
        searchQuery?: string;
    };
};

const SearchIndex = ({ entries }: SearchIndexProps): React.ReactElement => {
    return <h1>Search: {entries.searchQuery}</h1>;
};

export default SearchIndex;
