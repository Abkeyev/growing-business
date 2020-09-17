export class CodeName {
  code?: string;
  name?: string;
  value?: string;
  fromDate?: string;
  key?: string;
  prefix?: string;
}
export class Address {
  constructor() {
    this.type = new CodeName();
    this.region = new CodeName();
    this.district = new CodeName();
    this.city = new CodeName();
    this.cityPart = new CodeName();
    this.street = new CodeName();
    this.houseNumber = new CodeName();
    this.flat = new CodeName();
    this.kind = new CodeName();
    this.village = new CodeName();
    this.streetType = new CodeName();
  }
  nord?: number;
  type?: CodeName;
  country?: string;
  countryCode?: string;
  isCityRegion?: boolean;
  region?: CodeName;
  district?: CodeName;
  city?: CodeName;
  cityPart?: CodeName;
  street?: CodeName;
  houseNumber?: CodeName;
  flat?: CodeName;
  zip?: string;
  kind?: CodeName;
  okato?: string;
  fullAddress?: string;
  cityZone?: CodeName;
  village?: CodeName;
  streetType?: CodeName;
  mdstype?: string;
}

export enum Type {
  Entity = "1",
  Entrepreneur = "0",
}

export enum DecisionType {
  REJECT,
  NOTICE,
  APPROVE,
}

export const TypeOfCommunication = [
  { code: "ALL", value: "Все коммуникации" },
  { code: "PART", value: "Частичные коммуникации" },
];

export interface RequestInfo {
  type?: Type;
  fio?: string;
  iin?: string;
  phone?: string;
  amount?: number;
  period?: number;
}

export class BusinessInfo {
  description: string = "";
  hasLicense: boolean = false;
  address: string = "";
  numberOfEmloyees: number = 0;
  purpose: string = "";
  wantGovProgram: boolean = false;
  govProgram: string = "";
}

export class Owner {
  fio: string = "";
  iin: string = "";
  clientCode: string = "";
}

export const EstimationType = [
  "Сравнительный метод",
  "Сравнительный метод",
  "Доходный метод",
];

export class Estimation {
  contractNumber: string = "";
  contractDate: Date | string = "";
  contractDateString: string = "";
  estimatorName: string = "";
  priceOfEstimation: string = "";
  currency: string = "";
  reductionFactor: number = 0;
  priceOfProvision: number = 0;
  type: string = "";
}

export class Provision {
  type: string = "";
  description: string = "";
  owner: Owner[] = [new Owner()];
  estimation: Estimation = new Estimation();
  wallMaterial: string = "";
  commonArea: number = 0;
  sectionArea: number = 0;
  kitchenArea: number = 0;
  residentialComplex: string = "";
  buildYear: Date | string = "";
  buildYearString: string = "";
  address: Address = { ...new Address(), country: "Казахстан" };
  cadastralNumber: string = "";
  numberOfFloors: number = 0;
  floor: number = 0;
  numberOfRooms: number = 0;
  typeOfCommunication: string = "";
  hasDiscrepancies: boolean = false;
  discrepancies: string = "";
  registeringOrg: string = "";
}

export class DigitalFinance {
  type: string = "";
  inOutCome: InOutCome[] = [new InOutCome()];
}

export class InOutCome {
  period: Date | string = "";
  inCome: number = 0;
  name: string = "";
  outCome: number = 0;
}

export class Lawyer {
  decisionType: DecisionType = DecisionType.APPROVE;
  rejectMessage: string = "";
  noticeMessage: string = "";
}

export class GrowingBusinessBaseModel {
  requestInfo?: RequestInfo;
  businessInfo: BusinessInfo = new BusinessInfo();
  provision: Provision[] = [new Provision()];
  digitalFinance = new DigitalFinance();
  lawyer = new Lawyer();
  status?: string = "Одобрен";
}
