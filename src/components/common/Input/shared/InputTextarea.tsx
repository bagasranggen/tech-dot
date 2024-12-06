import React, { forwardRef, PropsWithChildren } from 'react';

import { ArrayString, BaseHookOptionProps, BaseInputHookProps } from '@/libs/@types';
import { joinArrayString } from '@/libs/utils';
import { createInputHooks } from '@/libs/factory';

export type InputTextareaProps = {
    hook?: BaseInputHookProps & BaseHookOptionProps;
} & (React.TextareaHTMLAttributes<HTMLTextAreaElement> & PropsWithChildren);

const InputTextarea = forwardRef<HTMLTextAreaElement, InputTextareaProps>(
    ({ hook, className, value, ...props }, ref) => {
        const inputHook = createInputHooks(hook, props);

        let inputClass: ArrayString = ['textarea'];
        if (className) inputClass.push(className);
        inputClass = joinArrayString(inputClass);

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
            <textarea
                className={inputClass}
                {...props}
                {...inputHook}
                {...inputRef}
                {...(hook ? { defaultValue: value } : { value: value })}
            />
        );
    }
);

InputTextarea.displayName = 'InputTextarea';
export default InputTextarea;
