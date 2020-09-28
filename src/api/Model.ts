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
export const TypeOfCommunication = [
  { code: "ALL", value: "Все коммуникации" },
  { code: "PART", value: "Частичные коммуникации" },
];

export const RepaymentMethod = [
  { code: "annuity", value: "Аннуитетный" },
  { code: "differential", value: "Дифференциальный" },
];

export const PurposeOfFinance = [
  {
    code: 0,
    value: "Затраты на внутрихозяйственные нужды",
    type: "investment",
  },
  { code: 1, value: "Приобретение оборудования", type: "internalEcoNeed" },
  { code: 2, value: "Приобретение транспорта", type: "internalEcoNeed" },
  {
    code: 3,
    value: "Приобретение жилой недвижимости",
    type: "internalEcoNeed",
  },
  {
    code: 4,
    value: "Приобретение коммерческой недвижимости",
    type: "internalEcoNeed",
  },
  {
    code: 5,
    value: "На строительство коммерческой недвижимости",
    type: "internalEcoNeed",
  },
  { code: 6, value: "На проведение ремонта", type: "internalEcoNeed" },
];

export const GovProgram = [
  { code: 0, value: "За счет средств ЕБРР", type: "EBRR" },
  { code: 1, value: "За счет средств ЕБРР + субсидирование", type: "EBRR" },
  {
    code: 2,
    value: "За счет средств ЕБРР + гарантироние АО «ФРП «ДАМУ»",
    type: "EBRR",
  },
  {
    code: 3,
    value:
      "За счет средств ЕБРР + субсидирование и гарантирование АО «ФРП «ДАМУ»",
    type: "EBRR",
  },
];

export const GovProgramWithFemale = [
  ...GovProgram,
  { code: 4, value: "За счет средств ЕБРР «Женщины в бизнесе»", type: "EBRR" },
  {
    code: 5,
    value: "За счет средств ЕБРР «Женщины в бизнесе» + субсидирование",
    type: "EBRR",
  },
  {
    code: 6,
    value:
      "За счет средств ЕБРР «Женщины в бизнесе» + гарантироние АО «ФРП «ДАМУ»",
    type: "EBRR",
  },
  {
    code: 7,
    value:
      "За счет средств ЕБРР «Женщины в бизнесе» + субсидирование и гарантирование АО «ФРП«ДАМУ»",
    type: "EBRR",
  },
];

export const MaxSumPurposeProgram = [
  { purpose: "investment", program: "EBRR", sum: 5000000 },
  { purpose: "internalEcoNeed", program: "EBRR", sum: 20000000 },
];

export const TypeOfCalculationIncome = [
  { code: "simple", value: "упрощенный" },
  { code: "common", value: "общеустановленный" },
];

export const TypeOfProvision = [
  { code: "0.201.04", value: "квартира на вторичном рынке" },
  { code: "0.201.05", value: "магазины" },
  { code: "0.201.09", value: "жилой дом (коттедж) на вторичном рынке" },
  { code: "0.201.15", value: "пункт общ.питания (рестораны)" },
  { code: "0.201.17", value: "аптека" },
  { code: "0.201.19", value: "прочая коммерческая недвижимость" },
];

export const WallMaterialFlat = [
  { code: 1, value: "Бетон" },
  { code: 2, value: "Блочный" },
  { code: 3, value: "Кирпич" },
  { code: 4, value: "Монолит" },
  { code: 5, value: "Панель" },
  { code: 6, value: "Пеноблочный" },
  { code: 7, value: "Ракушечный" },
  { code: 8, value: "Газоблок/газобетон" },
];

export const WallMaterialCommercial = [
  ...WallMaterialFlat,
  { code: 9, value: "Брусчатый, бревенчатый" },
  { code: 10, value: "Деревянные, шпальные" },
  { code: 11, value: "Шлак" },
  { code: 12, value: "Глинобитные" },
  { code: 13, value: "Саманные, сырцовые" },
];

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
  amountCache?: number;
  period?: number;
  repaymentMethod?: CodeName;
  dateOfRepayment?: number;
}

export class BusinessInfo {
  description: string = "";
  hasLicense: boolean = false;
  address: string = "";
  numberOfEmloyees: number = 0;
  purpose: CodeName = new CodeName();
  wantGovProgram: boolean = false;
  govProgram: CodeName = new CodeName();
  agreeProgrammCriteria: boolean = false;
}

export class Owner {
  fio: string = "";
  iin: string = "";
  phone?: string = "";
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
  type: CodeName = new CodeName();
  description: string = "";
  owners: Owner[] = [new Owner()];
  estimation: Estimation = new Estimation();
  wallMaterial: CodeName = new CodeName();
  commonArea: number = 0;
  sectionArea: number = 0;
  kitchenArea: number = 0;
  residentialComplex: string = "";
  buildYear: string = "";
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
  type: CodeName = new CodeName();
  inOutCome: InOutCome[] = [new InOutCome()];
}

export class InOutCome {
  period: string = "";
  inCome: number = 0;
  tax: number = 0;
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
  digitalFinance: DigitalFinance = new DigitalFinance();
  lawyer = new Lawyer();
  status?: string = "Одобрен";
  hasProvision: boolean = true;
  programCriteriaChecked?: string;
}
