/** ---------- props ---------- */
type __VLS_Props = {
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
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onTap: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
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
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
