import { User, IdTokenResult } from "firebase/auth";

export interface TenantClaims {
    [tenantId: string]: string; // e.g., "admin", "student", "teacher"
}

export interface ParsedClaims {
    superadmin?: boolean; // Global superadmin
    tenants?: TenantClaims;
    [key: string]: any;
}

export async function getUserClaims(user: User): Promise<ParsedClaims> {
    const idTokenResult: IdTokenResult = await user.getIdTokenResult();
    return idTokenResult.claims as ParsedClaims;
}
