import React, { forwardRef } from 'react';

import { BaseHookOptionProps, BaseInputHookProps } from '@/libs/@types';
import { createInputHooks } from '@/libs/factory';

export type InputTextProps = {
    type: React.HTMLInputTypeAttribute;
    hook?: BaseInputHookProps & BaseHookOptionProps;
    id?: string;
    label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({ type, hook, value, ...props }, ref) => {
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
        <input
            type={type ?? 'text'}
            {...props}
            {...inputHook}
            {...inputRef}
            {...(hook ? { defaultValue: value } : { value: value })}
        />
    );
});

InputText.displayName = 'InputText';
export default InputText;
