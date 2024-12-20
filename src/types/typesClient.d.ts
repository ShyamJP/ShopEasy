declare interface createClientType {
  name: string;
  userId: number;
  contactInfo: string;
  serviceId: number;
  address?: string;
}

declare interface updateClientType {
  name: string;
  contactInfo: string;
  id: number;
  address?: string;
}

declare interface deleteClientType {
  id: number;
}

declare interface deleteClientDataType {
  id: number;
  name: string;
}

declare interface getClientsType {
  userId: number;
  serviceId: number;
}

declare interface getClientListType {
  id: number;
  name: string;
  contactInfo: string;
  createdAt: string;
  userId: number;
  serviceId: number;
  address: string;
}

declare interface searchClientType {
  userId: number;
  serviceId: number;
  query: string;
}

declare interface getClientType {
  id: number;
  serviceId: number;
  userId: number;
}

declare interface getClientDataType {
  id: number;
  name: string;
  contactInfo: string;
  createdAt: string;
  address: string;
  records: [];
  userId: number;
  serviceId: number;
}
