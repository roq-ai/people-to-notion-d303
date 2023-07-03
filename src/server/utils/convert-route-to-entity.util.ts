const mapping: Record<string, string> = {
  customers: 'customer',
  employees: 'employee',
  'hr-managers': 'hr_manager',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
