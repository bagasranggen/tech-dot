import React from 'react';

import Form from '@/components/common/Form';

export type HomepageIndexProps = {};

const HomepageIndex = ({}: HomepageIndexProps): React.ReactElement => {
    return (
        <>
            <h1>HELLO WORLD</h1>
            <Form.Search />
        </>
    );
};

export default HomepageIndex;
