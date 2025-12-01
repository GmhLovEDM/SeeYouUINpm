declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string;
    size?: "normal" | "large" | "small" | "mini";
    type?: "info" | "primary" | "error" | "warning" | "success";
    color?: string;
    textColor?: string;
    isRipple?: boolean;
    rippleTime?: number;
    maskTime?: number;
    isHollow?: boolean;
    rippleColor?: string;
    rippleStyle?: Record<string, any> | null;
    customStyle?: Record<string, any> | null;
    hoverClass?: string | null;
    border?: 1 | 0;
    isDisabled?: boolean;
    radius?: number;
}>, {
    title: string;
    size: string;
    type: string;
    color: string;
    textColor: string;
    isRipple: boolean;
    rippleTime: number;
    maskTime: number;
    isHollow: boolean;
    rippleColor: string;
    rippleStyle: any;
    customStyle: any;
    hoverClass: string;
    border: number;
    isDisabled: boolean;
    radius: number;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onTap: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string;
    size?: "normal" | "large" | "small" | "mini";
    type?: "info" | "primary" | "error" | "warning" | "success";
    color?: string;
    textColor?: string;
    isRipple?: boolean;
    rippleTime?: number;
    maskTime?: number;
    isHollow?: boolean;
    rippleColor?: string;
    rippleStyle?: Record<string, any> | null;
    customStyle?: Record<string, any> | null;
    hoverClass?: string | null;
    border?: 1 | 0;
    isDisabled?: boolean;
    radius?: number;
}>, {
    title: string;
    size: string;
    type: string;
    color: string;
    textColor: string;
    isRipple: boolean;
    rippleTime: number;
    maskTime: number;
    isHollow: boolean;
    rippleColor: string;
    rippleStyle: any;
    customStyle: any;
    hoverClass: string;
    border: number;
    isDisabled: boolean;
    radius: number;
}>>> & Readonly<{
    onOnTap?: () => any;
}>, {
    title: string;
    size: "normal" | "large" | "small" | "mini";
    type: "info" | "primary" | "error" | "warning" | "success";
    color: string;
    textColor: string;
    isRipple: boolean;
    rippleTime: number;
    maskTime: number;
    isHollow: boolean;
    rippleColor: string;
    rippleStyle: Record<string, any> | null;
    customStyle: Record<string, any> | null;
    hoverClass: string | null;
    border: 1 | 0;
    isDisabled: boolean;
    radius: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
