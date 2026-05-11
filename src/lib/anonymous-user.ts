import type { SpreadType } from "./draw"

const USER_ID_STORAGE_KEY = "tarot-user-id"

function createUserId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID()
  }

  return `tarot-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`
}

export function getUserId() {
  const storedUserId = localStorage.getItem(USER_ID_STORAGE_KEY)

  if (storedUserId) {
    return storedUserId
  }

  const userId = createUserId()
  localStorage.setItem(USER_ID_STORAGE_KEY, userId)
  return userId
}

export function getDailyDrawKey(dateKey: string, spreadType: SpreadType) {
  return `tarot-draw:${spreadType}:${dateKey}`
}

export function hasDrawnToday(dateKey: string, spreadType: SpreadType) {
  return localStorage.getItem(getDailyDrawKey(dateKey, spreadType)) === "drawn"
}

export function markDrawnToday(dateKey: string, spreadType: SpreadType) {
  localStorage.setItem(getDailyDrawKey(dateKey, spreadType), "drawn")
}
