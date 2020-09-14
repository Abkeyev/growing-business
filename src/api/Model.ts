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
    this.country = "";
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
}

export class Provision {
  type: string = "";
  description: string = "";
  iin: string = "";
  price: string = "";
  currency: string = "";
  date: Date | string = "";
  dateString: string = "";
  wallMaterial: string = "";
  commonArea: number = 0;
  sectionArea: number = 0;
  kitchenArea: number = 0;
  residentialComplex: string = "";
  buildYear: Date | string = "";
  buildYearString: string = "";
  address: Address = { ...new Address(), country: "Казахстан" };
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
