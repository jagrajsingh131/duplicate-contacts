const K_SESSION = "bm_session";
const K_PROFILE = "bm_profile";
const K_DUP = "bm_duplicate_last";

export function saveSession(session) {
  localStorage.setItem(K_SESSION, JSON.stringify(session));
}
export function getSession() {
  const s = localStorage.getItem(K_SESSION);
  return s ? JSON.parse(s) : null;
}
export function clearSession() {
  localStorage.removeItem(K_SESSION);
}

export function saveProfileLocal(profile) {
  localStorage.setItem(K_PROFILE, JSON.stringify(profile));
}
export function getProfileLocal() {
  const p = localStorage.getItem(K_PROFILE);
  return p ? JSON.parse(p) : null;
}
export function clearProfileLocal() {
  localStorage.removeItem(K_PROFILE);
}

export function saveDuplicatedLocal(text) {
  localStorage.setItem(K_DUP, text);
}
export function getDuplicatedLocal() {
  return localStorage.getItem(K_DUP) || "";
}
