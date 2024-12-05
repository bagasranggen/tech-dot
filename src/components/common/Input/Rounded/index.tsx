import React, { forwardRef } from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Input';

export type RoundedProps = {
    size?: 'md' | 'lg';
    error?: string;
} & BaseProps;

const Rounded = forwardRef<HTMLInputElement, RoundedProps>(({ className, size, error, ...props }, ref) => {
    let inputClass: ArrayString = ['form-control input--rounded'];
    if (size && size !== 'md') inputClass.push(`input--${size}`);
    if (error) inputClass.push('is-invalid');
    if (className) inputClass.push(className);
    inputClass = joinArrayString(inputClass);

    return (
        <>
            <Base
                ref={ref}
                className={inputClass}
                {...props}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    );
});

Rounded.displayName = 'Rounded';
export default Rounded;
