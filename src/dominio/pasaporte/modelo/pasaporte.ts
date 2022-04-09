export class Pasaporte {
  #id: number;
  #documentId: number;
  #fullname: string;
  #address: string;
  #createdAt: Date;
  #deletedAt: Date;
  #birthdate: Date;
  #appointmentDate: Date;
  #applicationDate: Date;
  #amount: number;

  constructor(
    documentId: number,
    fullname: string,
    address: string,
    birthdate: Date,
    amount: number,
    applicationDate: Date,
    appointmentDate: Date,
  ) {
    this.#documentId = documentId;
    this.#fullname = fullname;
    this.#address = address;
    this.#birthdate = birthdate;
    this.#amount = amount;
    this.#applicationDate = applicationDate;
    this.#appointmentDate = appointmentDate;
  }

  get id(): number {
    return this.#id;
  }
  get fullname(): string {
    return this.#fullname;
  }
  get address(): string {
    return this.#address;
  }
  get birthdate(): Date {
    return this.#birthdate;
  }
  get amount(): number {
    return this.#amount;
  }
  set amount(value: number) {
    this.#amount = value;
  }
  get createdAt(): Date {
    return this.#createdAt;
  }
  get deletedAt(): Date {
    return this.#deletedAt;
  }
  get applicationDate(): Date {
    return this.#applicationDate;
  }
  get documentId(): number {
    return this.#documentId;
  }
  get appointmentDate(): Date {
    return this.#appointmentDate;
  }
  set appointmentDate(appointmentDate: Date) {
    this.#appointmentDate = appointmentDate;
  }
}
