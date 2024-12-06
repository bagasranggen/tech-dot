import React, { forwardRef } from 'react';

import { ArrayString } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import Base, { BaseProps } from '@/components/common/Input';

export type RoundedProps = {
    size?: 'md' | 'lg';
    align?: 'left' | 'center' | 'right';
    error?: string;
} & BaseProps;

const Rounded = forwardRef<HTMLInputElement, RoundedProps>(({ className, size, error, align, ...props }, ref) => {
    let inputClass: ArrayString = ['form-control input--rounded'];
    if (size && size !== 'md') inputClass.push(`input--${size}`);
    if (error) inputClass.push('is-invalid');
    if (align === 'center') inputClass.push('text-center');
    if (align === 'right') inputClass.push('text-end');
    if (className) inputClass.push(className);
    inputClass = joinArrayString(inputClass);

    let errorClass: ArrayString = ['invalid-feedback'];
    if (align === 'center') errorClass.push('text-center');
    if (align === 'right') errorClass.push('text-end');
    errorClass = joinArrayString(errorClass);

    return (
        <>
            <Base
                ref={ref}
                className={inputClass}
                {...props}
            />
            {error && <div className={errorClass}>{error}</div>}
        </>
    );
});

Rounded.displayName = 'Rounded';
export default Rounded;
