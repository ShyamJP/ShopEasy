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
