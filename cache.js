const K_SESSION = "bm_session";
const K_PROFILE = "bm_profile";
const K_DUP = "bm_duplicate";

export function saveSession(user) {
  localStorage.setItem(K_SESSION, JSON.stringify(user));
}
export function getSession() {
  const d = localStorage.getItem(K_SESSION);
  return d ? JSON.parse(d) : null;
}
export function clearSession() {
  localStorage.removeItem(K_SESSION);
}

export function saveProfileLocal(data) {
  localStorage.setItem(K_PROFILE, JSON.stringify(data));
}
export function getProfileLocal() {
  const d = localStorage.getItem(K_PROFILE);
  return d ? JSON.parse(d) : null;
}

export function saveDuplicateLocal(data) {
  localStorage.setItem(K_DUP, data);
}
export function getDuplicateLocal() {
  return localStorage.getItem(K_DUP) || "";
}
