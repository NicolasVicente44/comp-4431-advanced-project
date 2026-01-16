import { ParsedClaims } from "./auth";

/**
 * Checks if a user has access to a specific tenant based on their custom claims.
 * 
 * @param claims - The parsed custom claims from the user's ID token.
 * @param tenantId - The ID of the tenant to check access for.
 * @param requiredRole - Optional. The specific role required (default: "superadmin").
 * @returns boolean - True if the user has the required role for the tenant.
 */
export function canAccessTenant(
    claims: ParsedClaims | null | undefined,
    tenantId: string,
    requiredRole: string = "superadmin"
): boolean {
    if (!claims) return false;

    // 1. Check for global superadmin (if applicable to your system design)
    // If you have a global superadmin flag that overrides everything:
    if (claims.superadmin === true) return true;

    // 2. Check for tenant-specific specific role
    if (claims.tenants && claims.tenants[tenantId]) {
        const userRole = claims.tenants[tenantId];
        return userRole === requiredRole;
    }

    return false;
}
