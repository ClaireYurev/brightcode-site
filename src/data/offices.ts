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

export type Office = typeof offices.us; 