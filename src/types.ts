export type TCategory = 'video' | 'apps' | 'mobile' | 'learning' | 'other'
export interface IPayment {
    id: string;
    title: string;
    amount: number;
    due: string;
    category: TCategory;
    paid: boolean;
}
// точная копия IPayment но без полей id и paid
export type TNewPayment = Omit<IPayment, "id" | "paid">
