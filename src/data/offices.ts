export const offices = {
  us: { 
    name: 'BrightCode US LLC', 
    city: 'Long Beach, CA', 
    address: '123 Main Street, Long Beach, CA 90802',
    phone: '+1 (555) 123-4567', 
    email: 'hello@brightcode.com',
    timezone: 'PST/PDT'
  },
  ca: { 
    name: 'BrightCode Canada Inc.', 
    city: 'Toronto, ON', 
    address: '456 Queen Street West, Toronto, ON M5V 2A9',
    phone: '+1 (416) 555-0123', 
    email: 'hello@brightcode.com',
    timezone: 'EST/EDT'
  },
};

export type Office = typeof offices.us; 