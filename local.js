// local.js – ALL local storage logic

const KEY_USER = "buckup_user";
const KEY_PROFILE = "buckup_profile";
const KEY_DATA = "buckup_duplicated_data";

/* ---------- AUTH ---------- */
export function loginLocal(email) {
  localStorage.setItem(KEY_USER, JSON.stringify({ email, loggedIn: true }));
}

export function logoutLocal() {
  localStorage.removeItem(KEY_USER);
}

export function getUser() {
  const u = localStorage.getItem(KEY_USER);
  return u ? JSON.parse(u) : null;
}

/* ---------- PROFILE ---------- */
export function saveProfile(profile) {
  localStorage.setItem(KEY_PROFILE, JSON.stringify(profile));
}

export function getProfile() {
  const p = localStorage.getItem(KEY_PROFILE);
  return p ? JSON.parse(p) : null;
}

/* ---------- DATA ---------- */
export function saveDuplicatedData(text) {
  localStorage.setItem(KEY_DATA, text);
}

export function getDuplicatedData() {
  return localStorage.getItem(KEY_DATA) || "";
}
