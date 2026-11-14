type Bucket = { count: number; reset: number };

const globalStore = globalThis as typeof globalThis & {
  __enquiryRateLimit?: Map<string, Bucket>;
};

const buckets = globalStore.__enquiryRateLimit ?? new Map<string, Bucket>();
globalStore.__enquiryRateLimit = buckets;

export function rateLimit(key: string, limit = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || now > current.reset) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { ok: true as const, remaining: limit - 1 };
  }

  if (current.count >= limit) {
    return {
      ok: false as const,
      remaining: 0,
      retryAfter: Math.ceil((current.reset - now) / 1000),
    };
  }

  current.count += 1;
  return { ok: true as const, remaining: limit - current.count };
}
