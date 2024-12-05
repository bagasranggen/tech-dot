import React, { forwardRef } from 'react';

import { BaseHookOptionProps, BaseInputHookProps, PropsClassname } from '@/libs/@types';

import InputText from '@/components/common/Input/shared/InputText';
import InputCheckbox from '@/components/common/Input/shared/InputCheckbox';
import InputCheckboxSquare from '@/components/common/Input/shared/InputCheckboxSquare';
import InputRadio from '@/components/common/Input/shared/InputRadio';
import InputTextarea from '@/components/common/Input/shared/InputTextarea';
import InputSelect, { InputSelectProps } from '@/components/common/Input/shared/InputSelect';

export type BaseInputAttributesProps = React.InputHTMLAttributes<HTMLInputElement>;

export type BaseTextAreaAttributesProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type BaseSelectAttributesProps = InputSelectProps;

export type BaseProps = {
    type: React.HTMLInputTypeAttribute | 'checkbox-square';
    hook?: BaseInputHookProps & BaseHookOptionProps;
    wrapperClassName?: PropsClassname['className'];
    disclaimer?: string;
} & (BaseInputAttributesProps | BaseTextAreaAttributesProps | BaseSelectAttributesProps);

const Base = forwardRef<HTMLInputElement, BaseProps>(({ type, ...props }, ref) => {
    switch (type) {
        case 'checkbox-square':
            return (
                <InputCheckboxSquare
                    ref={ref}
                    {...(props as BaseInputAttributesProps)}
                />
            );

        case 'checkbox':
            return (
                <InputCheckbox
                    ref={ref}
                    {...(props as BaseInputAttributesProps)}
                />
            );

        case 'radio':
            return (
                <InputRadio
                    ref={ref}
                    {...(props as BaseInputAttributesProps)}
                />
            );

        case 'textarea':
            return (
                <InputTextarea
                    ref={ref as React.LegacyRef<HTMLTextAreaElement>}
                    {...(props as BaseTextAreaAttributesProps)}
                />
            );

        case 'select':
            return (
                <InputSelect
                    ref={ref as React.LegacyRef<HTMLSelectElement>}
                    {...(props as BaseSelectAttributesProps)}
                />
            );

        default:
            return (
                <InputText
                    ref={ref}
                    type={type}
                    {...(props as BaseInputAttributesProps)}
                />
            );
    }
});

Base.displayName = 'Base';
export default Base;
