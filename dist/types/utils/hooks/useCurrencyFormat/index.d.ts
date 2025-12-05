import { type ComputedRef, type MaybeRefOrGetter } from "vue";
type NumberInput = MaybeRefOrGetter<number | string | null | undefined>;
interface CurrencyOptions {
    decimals?: number;
    symbol?: string;
    placeholder?: string;
    useGrouping?: boolean;
}
/**
 * 纯函数：格式化金额
 */
export declare function formatCurrency(value: number | string, options?: CurrencyOptions): string;
/**
 * Vue Hook 封装
 */
export declare function useCurrencyFormat(amount: NumberInput, options?: CurrencyOptions): ComputedRef<string>;
export {};
