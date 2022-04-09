export class Pasaporte {
  #id: number;
  #document_id: number;
  #fullname: string;
  #address: string;
  #created_at: Date;
  #deleted_at: Date;
  #birthdate: Date;
  #appointment_date: Date;
  #application_date: Date;
  #amount: number;

  constructor(
    document_id: number,
    fullname: string,
    address: string,
    birthdate: Date,
    amount: number,
    application_date: Date,
    appointment_date: Date,
  ) {
    this.#document_id = document_id;
    this.#fullname = fullname;
    this.#address = address;
    this.#birthdate = birthdate;
    this.#amount = amount;
    this.#application_date = application_date;
    this.#appointment_date = appointment_date;
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
  get created_at(): Date {
    return this.#created_at;
  }
  get deleted_at(): Date {
    return this.#deleted_at;
  }
  get application_date(): Date {
    return this.#application_date;
  }
  get document_id(): number {
    return this.#document_id;
  }
  get appointment_date(): Date {
    return this.#appointment_date;
  }
  set appointment_date(appointment_date: Date) {
    this.#appointment_date = appointment_date;
  }
}
