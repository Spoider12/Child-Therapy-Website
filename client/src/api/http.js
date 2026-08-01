const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers || {});
  const hasBody = options.body !== undefined;

  if (hasBody && !(options.body instanceof FormData) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
    credentials: 'include',
  });

  if (response.status === 204) return null;

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong. Please try again.');
  }

  return data;
}
