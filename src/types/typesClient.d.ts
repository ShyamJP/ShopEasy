declare interface createClientType {
  name: string;
  userId: number;
  contactInfo: string;
  serviceId: number;
}

declare interface updateClientType {
  name: string;
  contactInfo: string;
  id: number;
}

declare interface deleteClientType {
  id: number;
}

declare interface getClientsType {
  userId: number;
  serviceId: number;
}