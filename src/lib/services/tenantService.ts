import { adminDb } from "@/src/lib/firebase/firebase-admin";
import { Tenant, CreateTenantDTO } from "@/src/lib/types/tenant";

const TENANTS_COLLECTION = "tenants";

/**
 * Create a new tenant (school/organization)
 */
export async function createTenant(data: CreateTenantDTO): Promise<Tenant> {
  const docRef = adminDb.collection(TENANTS_COLLECTION).doc();
  const now = new Date();

  const tenant: Tenant = {
    id: docRef.id,
    ...data,
    createdAt: now,
    updatedAt: now,
    isActive: true,
  };

  await docRef.set(tenant);
  return tenant;
}

/**
 * Get a tenant by its Firestore document ID
 */
export async function getTenantById(tenantId: string): Promise<Tenant | null> {
  const doc = await adminDb.collection(TENANTS_COLLECTION).doc(tenantId).get();
  if (!doc.exists) return null;
  return doc.data() as Tenant;
}

/**
 * Get a tenant by its URL-friendly slug
 */
export async function getTenantBySlug(slug: string): Promise<Tenant | null> {
  const snapshot = await adminDb
    .collection(TENANTS_COLLECTION)
    .where("slug", "==", slug)
    .limit(1)
    .get();

  if (snapshot.empty) return null;
  return snapshot.docs[0].data() as Tenant;
}

/**
 * Get all tenants
 */
export async function getAllTenants(): Promise<Tenant[]> {
  const snapshot = await adminDb.collection(TENANTS_COLLECTION).get();
  return snapshot.docs.map((doc) => doc.data() as Tenant);
}

/**
 * Update a tenant's information
 */
export async function updateTenant(
  tenantId: string,
  data: Partial<CreateTenantDTO>
): Promise<void> {
  await adminDb
    .collection(TENANTS_COLLECTION)
    .doc(tenantId)
    .update({
      ...data,
      updatedAt: new Date(),
    });
}

/**
 * Delete a tenant
 */
export async function deleteTenant(tenantId: string): Promise<void> {
  await adminDb.collection(TENANTS_COLLECTION).doc(tenantId).delete();
}
