import React, { forwardRef } from 'react';

import { BaseHookOptionProps, BaseInputHookProps } from '@/libs/@types';
import { createInputHooks } from '@/libs/factory';

export type InputCheckboxProps = {
    hook?: BaseInputHookProps & BaseHookOptionProps;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(({ hook, checked, ...props }, ref) => {
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
        <>
            <input
                type="checkbox"
                {...props}
                {...inputHook}
                {...inputRef}
                {...(hook ? { defaultChecked: checked } : { checked: checked })}
            />
        </>
    );
});

InputCheckbox.displayName = 'InputCheckbox';
export default InputCheckbox;
