import { SeeButton } from './components/SeeButton/index';
import { SeeText } from './components/SeeText/index';
import { SeeLink } from './components/SeeLink/index';
export { SeeButton, SeeText, SeeLink };
export * from './utils/hooks/index';
declare const _default: {
    SeeButton: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
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
        }> & Readonly<{
            onOnTap?: () => any;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            onTap: () => any;
        }, import('vue').PublicProps, {
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
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
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
        }> & Readonly<{
            onOnTap?: () => any;
        }>, {}, {}, {}, {}, {
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
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
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
    }> & Readonly<{
        onOnTap?: () => any;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        onTap: () => any;
    }, string, {
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
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    SeeText: import('vue').DefineComponent<{
        text?: string | number;
        type?: "info" | "primary" | "error" | "warning" | "success";
        mode?: "text" | "link" | "phone" | "date" | "timeago" | "price";
        color?: string;
        href?: string;
        phoneNumber?: string;
        date?: string | number | Date;
        dateFormat?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        onClick: (...args: never) => any;
    }, string, import('vue').PublicProps, Readonly<{
        text?: string | number;
        type?: "info" | "primary" | "error" | "warning" | "success";
        mode?: "text" | "link" | "phone" | "date" | "timeago" | "price";
        color?: string;
        href?: string;
        phoneNumber?: string;
        date?: string | number | Date;
        dateFormat?: string;
    }> & Readonly<{
        onOnClick?: (...args: never) => any;
    }>, {
        type: "info" | "primary" | "error" | "warning" | "success";
        color: string;
        text: string | number;
        href: string;
        mode: "text" | "link" | "phone" | "date" | "timeago" | "price";
        phoneNumber: string;
        date: string | number | Date;
        dateFormat: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, SVGViewElement>;
    SeeLink: import('vue').DefineComponent<{
        text?: string | number;
        type?: "info" | "primary" | "error" | "warning" | "success";
        color?: string;
        href?: string;
        isLine?: boolean;
        lineColor?: string;
    }, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        onClick: (...args: never) => any;
    }, string, import('vue').PublicProps, Readonly<{
        text?: string | number;
        type?: "info" | "primary" | "error" | "warning" | "success";
        color?: string;
        href?: string;
        isLine?: boolean;
        lineColor?: string;
    }> & Readonly<{
        onOnClick?: (...args: never) => any;
    }>, {
        type: "info" | "primary" | "error" | "warning" | "success";
        color: string;
        text: string | number;
        href: string;
        isLine: boolean;
        lineColor: string;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, SVGTextElement>;
};
export default _default;
