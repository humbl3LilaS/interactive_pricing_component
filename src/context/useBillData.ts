import {createContext} from "react";

export type BillingData = {
    readonly context: string,
    readonly price: number,
}

const BillingData: BillingData[] = [
    {context: "10k pageviews", price: 8},
    {context: "50k pageviews", price: 12},
    {context: "100k pageviews", price: 16},
    {context: "500k pageviews", price: 24},
    {context: "1M pageviews", price: 36},
];

export const useBillData = createContext<BillingData[]>(BillingData);