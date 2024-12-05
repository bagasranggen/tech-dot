import React from 'react';

export type SearchIndexProps = {
    entries: {
        search?: string;
    };
};

const SearchIndex = ({ entries }: SearchIndexProps): React.ReactElement => {
    return <h1>Search: {entries.search}</h1>;
};

export default SearchIndex;
