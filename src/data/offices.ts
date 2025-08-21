export const offices = {
  us: { 
    name: 'BrightCode US LLC', 
    city: 'Orange County, CA', 
    address: 'Service area: Greater Los Angeles & Orange County, CA (remote across the U.S.)',
    phone: '+1 (555) 123-4567', 
    email: 'hello@brightcode.com',
    timezone: 'PST/PDT'
  },
  ca: { 
    name: 'BrightCode Canada Inc.', 
    city: 'Toronto, ON', 
    address: 'Service area: Greater Toronto Area, ON (remote across Canada)',
    phone: '+1 (416) 555-0123', 
    email: 'hello@brightcode.com',
    timezone: 'EST/EDT'
  },
};

export const officeLocations = [
  {
    city: 'Los Angeles',
    label: 'Los Angeles Office',
    street: '1234 Sunset Blvd, Suite 500',
    locality: 'Los Angeles, CA 90012',
    country: 'United States',
    mapQuery: encodeURIComponent('1234 Sunset Blvd, Los Angeles, CA 90012'),
    notes: 'Placeholder coworking address. By appointment only.'
  },
  {
    city: 'Toronto',
    label: 'Toronto Office',
    street: '123 King St W, Suite 2100',
    locality: 'Toronto, ON M5H 1A1',
    country: 'Canada',
    mapQuery: encodeURIComponent('123 King St W, Toronto, ON M5H 1A1'),
    notes: 'Placeholder coworking address. By appointment only.'
  }
];

export type Office = typeof offices.us; 