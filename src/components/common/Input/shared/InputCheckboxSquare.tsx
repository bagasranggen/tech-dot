import React, { forwardRef } from 'react';

import { ArrayString, BaseHookOptionProps, BaseInputHookProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';

import InputCheckbox from '@/components/common/Input/shared/InputCheckbox';
import { BaseProps } from '@/components/common/Input';

export type InputCheckboxSquareProps = {
    hook?: BaseInputHookProps & BaseHookOptionProps;
} & (React.InputHTMLAttributes<HTMLInputElement> & Pick<BaseProps, 'wrapperClassName' | 'disclaimer'>);

const InputCheckboxSquare = forwardRef<HTMLInputElement, InputCheckboxSquareProps>(
    ({ className, wrapperClassName, id, children, disclaimer, ...props }, ref) => {
        let inputWrapperClass: ArrayString = ['mb-0 fs--14 checkbox--square'];
        if (wrapperClassName) inputWrapperClass.push(wrapperClassName);
        inputWrapperClass = joinArrayString(inputWrapperClass);

        let inputClass: ArrayString = ['rounded-0'];
        if (className) inputClass.push(className);
        inputClass = joinArrayString(inputClass);

        return (
            <>
                <label
                    {...(id ? { htmlFor: id } : {})}
                    className={inputWrapperClass}>
                    <InputCheckbox
                        ref={ref}
                        {...(id ? { id: id } : {})}
                        className={inputClass}
                        {...props}
                    />
                    <span className="checkbox__check" />
                    {children}
                </label>

                {disclaimer && <div className="disclaimer-text-service-check-box">{disclaimer}</div>}
            </>
        );
    }
);

InputCheckboxSquare.displayName = 'InputCheckboxSquare';
export default InputCheckboxSquare;
