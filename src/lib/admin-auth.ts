export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || "fat-snail";
}

export function isAdminAuthorized(request: Request) {
  const header = request.headers.get("x-admin-password") ?? "";
  return header === getAdminPassword();
}
