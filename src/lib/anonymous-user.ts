import type { SpreadType } from "./draw"

const USER_ID_STORAGE_KEY = "tarot-user-id"
const DAILY_DRAW_STORAGE_PREFIX = "tarot-draw:"

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
  return `${DAILY_DRAW_STORAGE_PREFIX}${spreadType}:${dateKey}`
}

export function hasDrawnToday(dateKey: string, spreadType: SpreadType) {
  return localStorage.getItem(getDailyDrawKey(dateKey, spreadType)) === "drawn"
}

export function markDrawnToday(dateKey: string, spreadType: SpreadType) {
  localStorage.setItem(getDailyDrawKey(dateKey, spreadType), "drawn")
}

export function cleanupOldDailyDrawKeys(dateKey: string) {
  const keysToRemove: string[] = []

  for (let index = 0; index < localStorage.length; index += 1) {
    const storageKey = localStorage.key(index)

    if (!storageKey?.startsWith(DAILY_DRAW_STORAGE_PREFIX)) {
      continue
    }

    const storedDateKey = storageKey.split(":").at(-1)

    if (storedDateKey !== dateKey) {
      keysToRemove.push(storageKey)
    }
  }

  keysToRemove.forEach((storageKey) => localStorage.removeItem(storageKey))
}
