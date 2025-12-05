/** ---------- props ---------- */
type __VLS_Props = {
    text?: string | number;
    type?: "info" | "primary" | "error" | "warning" | "success";
    color?: string;
    href?: string;
    isLine?: boolean;
    lineColor?: string;
};
declare const __VLS_export: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    onClick: (...args: never) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOnClick?: (...args: never) => any;
}>, {
    type: "info" | "primary" | "error" | "warning" | "success";
    color: string;
    text: string | number;
    href: string;
    isLine: boolean;
    lineColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
