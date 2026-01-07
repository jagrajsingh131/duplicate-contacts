const K_SESSION = "bm_session";
const K_USERS_INDEX = "bm_users_index";

function uidKey(suffix) {
  const s = localStorage.getItem(K_SESSION);
  const session = s ? JSON.parse(s) : null;
  const uid = session?.uid || "guest";
  return `bm_${uid}_${suffix}`;
}

// ---------- SESSION ----------
export function saveSession(session) {
  localStorage.setItem(K_SESSION, JSON.stringify(session)); // {uid,email}

  // keep an index for admin portal (local device)
  const raw = localStorage.getItem(K_USERS_INDEX);
  const idx = raw ? JSON.parse(raw) : {};
  idx[session.uid] = { email: session.email, lastSeen: Date.now() };
  localStorage.setItem(K_USERS_INDEX, JSON.stringify(idx));
}
export function getSession() {
  const s = localStorage.getItem(K_SESSION);
  return s ? JSON.parse(s) : null;
}
export function clearSession() {
  localStorage.removeItem(K_SESSION);
}

// ---------- PROFILE ----------
export function saveProfileLocal(profile) {
  localStorage.setItem(uidKey("profile"), JSON.stringify(profile));
}
export function getProfileLocal() {
  const p = localStorage.getItem(uidKey("profile"));
  return p ? JSON.parse(p) : null;
}

// ---------- PAYMENT ----------
export function savePaymentLocal(payment) {
  localStorage.setItem(uidKey("payment"), JSON.stringify(payment));
}
export function getPaymentLocal() {
  const p = localStorage.getItem(uidKey("payment"));
  return p ? JSON.parse(p) : null;
}

// payment edit lock + admin allow
export function isPaymentLocked() {
  return localStorage.getItem(uidKey("payment_locked")) === "1";
}
export function lockPayment() {
  localStorage.setItem(uidKey("payment_locked"), "1");
}
export function setPaymentEditAllowed(flag) {
  localStorage.setItem(uidKey("payment_admin_allow")), flag ? "1" : "0";
}
export function isPaymentEditAllowed() {
  return localStorage.getItem(uidKey("payment_admin_allow")) === "1";
}
export function requestPaymentChange() {
  localStorage.setItem(uidKey("payment_change_requested"), "1");
}
export function isPaymentChangeRequested() {
  return localStorage.getItem(uidKey("payment_change_requested")) === "1";
}
export function clearPaymentChangeRequest() {
  localStorage.removeItem(uidKey("payment_change_requested"));
}

// ---------- DUPLICATER ----------
export function saveDuplicatedLocal(text) {
  localStorage.setItem(uidKey("dup_last"), text);
}
export function getDuplicatedLocal() {
  return localStorage.getItem(uidKey("dup_last")) || "";
}

// ---------- ADMIN INDEX ----------
export function getUsersIndex() {
  const raw = localStorage.getItem(K_USERS_INDEX);
  return raw ? JSON.parse(raw) : {};
}
export function adminSetUserFlag(uid, key, value) {
  localStorage.setItem(`bm_${uid}_${key}`, value);
}
export function adminGetUserFlag(uid, key) {
  return localStorage.getItem(`bm_${uid}_${key}`);
}
