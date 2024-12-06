import React, { forwardRef } from 'react';

import { ArrayString, BaseHookOptionProps, BaseInputHookProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { createInputHooks } from '@/libs/factory';

export type InputSelectProps = {
    options: { label: any; value: any }[];
    hook?: BaseInputHookProps & BaseHookOptionProps;
} & React.SelectHTMLAttributes<HTMLSelectElement> &
    React.OptionHTMLAttributes<HTMLOptionElement>;

const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(({ options, className, hook, ...props }, ref) => {
    const inputHook = createInputHooks(hook, props);

    let inputRef = { ref: ref };
    if (hook && inputHook) {
        inputRef = {
            ref: (e) => {
                inputHook?.ref(e);

                if (ref && 'current' in ref && e) (ref as any).current = e;
            },
        };
    }

    let inputClass: ArrayString = ['form-control select'];
    if (className) inputClass.push(className);
    inputClass = joinArrayString(inputClass);

    return (
        <select
            className={inputClass}
            {...inputHook}
            {...inputRef}
            {...props}>
            {options.map((option: { label: any; value: any }, i: number) => {
                return (
                    <option
                        key={i}
                        value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </select>
    );
});

InputSelect.displayName = 'InputSelect';
export default InputSelect;
