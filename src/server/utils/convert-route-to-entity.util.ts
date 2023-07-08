const mapping: Record<string, string> = {
  companies: 'company',
  contractors: 'contractor',
  equipment: 'equipment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
