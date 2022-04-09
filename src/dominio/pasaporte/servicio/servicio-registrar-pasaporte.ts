import { RepositorioPasaporte } from '../puerto/repositorio/repositorio-pasaporte';
import { Pasaporte } from '../modelo/pasaporte';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';
import colombianHolidays from 'colombian-holidays';

export class ServicioRegistrarPasaporte {
  AMOUNT_SERVICE: number;
  wekkendDays: Array<number>;
  constructor(private readonly _repositorioPasaporte: RepositorioPasaporte) {
    this.AMOUNT_SERVICE = 100;
    this.wekkendDays = [5, 6];
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
          amount = amount * 2;
        }
        valid = true;
      }
    }
    return { amount, appointment_date: date };
  }

  async ejecutar(pasaporte: Pasaporte) {
    if (this.isInWeekend(pasaporte.application_date)) {
      throw new ErrorDeNegocio(
        `No puede agendar cita los días Sábados y Domingos`,
      );
    } else if (
      await this._repositorioPasaporte.existePasaporte(pasaporte.document_id)
    ) {
      throw new ErrorDeNegocio(
        `El documento ID ${pasaporte.document_id} ya cuenta con una solicitud de pasaporte activa`,
      );
    }

    const { amount, appointment_date } = await this.calculateResources(
      pasaporte.application_date,
    );
    pasaporte.appointment_date = appointment_date;
    pasaporte.amount = amount;
    const data = await this._repositorioPasaporte.guardar(pasaporte);
    return data;
  }
}
