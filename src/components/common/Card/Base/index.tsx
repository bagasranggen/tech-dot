import React, { PropsWithChildren } from 'react';

import { ArrayString, PropsClassname } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import { Col, ColProps, Row } from 'react-bootstrap';

export type BaseItemProps = PropsWithChildren & ColProps;

export type BaseProps = {
    items: BaseItemProps[];
} & PropsClassname;

const Base = ({ className, items }: BaseProps): React.ReactElement => {
    let rowClass: ArrayString = [];
    if (className) rowClass.push(className);
    rowClass = joinArrayString(rowClass);

    return (
        <Row className={rowClass}>
            {items.map(({ children, ...props }: BaseItemProps, i: number) => {
                return (
                    <Col
                        key={i}
                        {...props}>
                        {children}
                    </Col>
                );
            })}
        </Row>
    );
};

export default Base;
