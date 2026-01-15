export interface Tenant {
  id: string;
  name: string;
  slug: string; // URL-friendly identifier, e.g., "riverside-high"
  domain?: string; // Optional custom domain
  address?: string;
  phone?: string;
  email?: string;
  logoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface CreateTenantDTO {
  name: string;
  slug: string;
  domain?: string;
  address?: string;
  phone?: string;
  email?: string;
}
