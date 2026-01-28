export type CategoryType = "need" | "want" | "investment" | "waste"
export type Category = "Clothes" | "Hosuehold & Groceries" | "Entertainment" | "Wasted Money" | "Home Decor" | "Drug Store" | "Monthly Expenses" | "Going Out" | "Take out" | "Travel" | "Savings & Investments" | "Treat" | "Holiday" | "Tattoo" | "Gifts"

export type Payment = {
  id?: number
  amount: number
  date: string
  title: string
  description?: string
  category: Category
  categoryType: CategoryType
}