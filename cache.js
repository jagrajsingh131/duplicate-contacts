const K_SESSION = "bm_session";

// Build a per-user key so each user has separate local data
function uidKey(suffix) {
  const s = localStorage.getItem(K_SESSION);
  const session = s ? JSON.parse(s) : null;
  const uid = session?.uid || "guest";
  return `bm_${uid}_${suffix}`;
}

// ---------- SESSION ----------
export function saveSession(session) {
  localStorage.setItem(K_SESSION, JSON.stringify(session)); // {uid,email}
}
export function getSession() {
  const s = localStorage.getItem(K_SESSION);
  return s ? JSON.parse(s) : null;
}
export function clearSession() {
  localStorage.removeItem(K_SESSION);
}

// ---------- PROFILE (per user) ----------
export function saveProfileLocal(profile) {
  localStorage.setItem(uidKey("profile"), JSON.stringify(profile));
}
export function getProfileLocal() {
  const p = localStorage.getItem(uidKey("profile"));
  return p ? JSON.parse(p) : null;
}

// ---------- PAYMENT (per user) ----------
export function savePaymentLocal(payment) {
  localStorage.setItem(uidKey("payment"), JSON.stringify(payment));
}
export function getPaymentLocal() {
  const p = localStorage.getItem(uidKey("payment"));
  return p ? JSON.parse(p) : null;
}

// ---------- DUPLICATED OUTPUT (per user) ----------
export function saveDuplicatedLocal(text) {
  localStorage.setItem(uidKey("dup_last"), text);
}
export function getDuplicatedLocal() {
  return localStorage.getItem(uidKey("dup_last")) || "";
}
