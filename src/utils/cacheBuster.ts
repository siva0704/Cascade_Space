// ─────────────────────────────────────────────────────────────────
//  Cache Buster — forces a hard reload when a new build is deployed
//  Max refreshes = 3 to prevent infinite loops
// ─────────────────────────────────────────────────────────────────

declare const __BUILD_TIME__: string;

const VERSION_KEY = "app_build_version";
const REFRESH_COUNT_KEY = "app_refresh_count";
const MAX_REFRESHES = 3;

export function checkAndBustCache(): void {
    try {
        const currentVersion = __BUILD_TIME__;
        const storedVersion = localStorage.getItem(VERSION_KEY);
        const refreshCount = parseInt(localStorage.getItem(REFRESH_COUNT_KEY) || "0", 10);

        if (storedVersion === currentVersion) {
            // Same build — reset counter and carry on
            localStorage.setItem(REFRESH_COUNT_KEY, "0");
            return;
        }

        // New build detected
        localStorage.setItem(VERSION_KEY, currentVersion);

        if (refreshCount < MAX_REFRESHES) {
            localStorage.setItem(REFRESH_COUNT_KEY, String(refreshCount + 1));
            // Hard reload — bypasses all browser cache
            window.location.reload();
        } else {
            // Limit reached — silently update version, don't reload again
            localStorage.setItem(REFRESH_COUNT_KEY, "0");
        }
    } catch {
        // localStorage blocked (private mode etc.) — do nothing
    }
}
