export type Ticket = {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
};

export type NewTicketData = {
  title: string;
  text: string;
};
