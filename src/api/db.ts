import { Dexie, type EntityTable } from "dexie"
import type { Payment } from "./types.ts"

export const db = new Dexie("steward-db") as Dexie & {
  payments: EntityTable<Payment>
}

db.version(1).stores({
  payments: "++id, amount, date, title, description",
})
