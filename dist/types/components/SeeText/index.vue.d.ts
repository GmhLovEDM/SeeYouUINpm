/** ---------- props ---------- */
type __VLS_Props = {
    text?: string | number;
    type?: "info" | "primary" | "error" | "warning" | "success";
    mode?: "text" | "link" | "phone" | "date" | "timeago" | "price";
    color?: string;
    href?: string;
    phoneNumber?: string;
    date?: string | number | Date;
    dateFormat?: string;
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
    date: string | number | Date;
    mode: "text" | "link" | "phone" | "date" | "timeago" | "price";
    phoneNumber: string;
    dateFormat: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
