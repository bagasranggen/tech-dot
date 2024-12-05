import React, { forwardRef } from 'react';

import { BaseHookOptionProps, BaseInputHookProps } from '@/libs/@types';
import { createInputHooks } from '@/libs/factory';

export type InputRadioProps = {
    hook?: BaseInputHookProps & BaseHookOptionProps;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(({ id, children, hook, checked, ...props }, ref) => {
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

    return (
        <label
            {...(id ? { htmlFor: id } : {})}
            className="radio">
            <input
                type="radio"
                {...(id ? { id: id } : {})}
                {...props}
                {...inputHook}
                {...inputRef}
                {...(hook ? { defaultChecked: checked } : { checked: checked })}
            />
            <span className="radio__bullet"></span>
            {children}
        </label>
    );
});

InputRadio.displayName = 'InputRadio';
export default InputRadio;
