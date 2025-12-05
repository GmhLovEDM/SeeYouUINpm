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
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    onTap: () => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
