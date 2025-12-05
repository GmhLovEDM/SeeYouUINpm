/** ---------- props ---------- */
type __VLS_Props = {
    text?: string | number;
    type?: "info" | "primary" | "error" | "warning" | "success";
    color?: string;
    href?: string;
    isLine?: boolean;
    lineColor?: string;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onClick: (...args: never) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOnClick?: (...args: never) => any;
}>, {
    type: "info" | "primary" | "error" | "warning" | "success";
    color: string;
    text: string | number;
    href: string;
    isLine: boolean;
    lineColor: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, SVGTextElement>;
export default _default;
