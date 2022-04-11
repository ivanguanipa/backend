import { RepositorioPasaporte } from '../puerto/repositorio/repositorio-pasaporte';
import { DaoPasaporte } from '../puerto/dao/dao-pasaporte';
import { Pasaporte } from '../modelo/pasaporte';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';
import colombianHolidays from 'colombian-holidays';

export class ServicioRegistrarPasaporte {
  AMOUNT_SERVICE: number;
  saturday: number;
  sunday: number;
  wekkendDays: Array<number>;
  doubleAmount: number;
  constructor(
    private readonly _repositorioPasaporte: RepositorioPasaporte,
    private readonly _daoPasaporte: DaoPasaporte,
  ) {
    this.AMOUNT_SERVICE = 100;
    this.saturday = 5;
    this.sunday = 6;
    this.AMOUNT_SERVICE = 100;
    this.doubleAmount = 2;
    this.wekkendDays = [this.saturday, this.sunday];
  }

  isInWeekend(fecha: Date) {
    const dayOfWeek = new Date(fecha).getDay();
    return this.wekkendDays.includes(dayOfWeek);
  }

  isHolliday(date: Date) {
    let is = false;
    const hollidays = colombianHolidays(date.getFullYear());
    hollidays.forEach((item) => {
      if (new Date(item.date).getTime() === date.getTime()) {
        is = true;
      }
    });
    return is;
  }

  async calculateResources(initDate) {
    let date = new Date(initDate);
    let amount = this.AMOUNT_SERVICE;
    let valid = false;
    while (!valid) {
      date = new Date(date.setDate(date.getDate() + 1));
      if (!this.wekkendDays.includes(date.getDay())) {
        if (await this.isHolliday(date)) {
          amount = amount * this.doubleAmount;
        }
        valid = true;
      }
    }
    return { amount, appointmentDate: date };
  }

  async ejecutar(pasaporte: Pasaporte) {
    console.log(this._daoPasaporte);
    if (this.isInWeekend(pasaporte.applicationDate)) {
      throw new ErrorDeNegocio(
        `No puede agendar cita los días Sábados y Domingos`,
      );
    } else if (await this._daoPasaporte.existePasaporte(pasaporte.documentId)) {
      throw new ErrorDeNegocio(
        `El documento ID ${pasaporte.documentId} ya cuenta con una solicitud de pasaporte activa`,
      );
    }

    const { amount, appointmentDate } = await this.calculateResources(
      pasaporte.applicationDate,
    );
    pasaporte.appointmentDate = appointmentDate;
    pasaporte.amount = amount;
    return this._repositorioPasaporte.guardar(pasaporte);
  }
}
