import { RepositorioPasaporte } from '../puerto/repositorio/repositorio-pasaporte';
import { Pasaporte } from '../modelo/pasaporte';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';
import colombianHolidays from 'colombian-holidays';

export class ServicioRegistrarPasaporte {
  constructor(private readonly _repositorioPasaporte: RepositorioPasaporte) {}

  isInWeekend(fecha: Date) {
    const dayOfWeek = new Date(fecha).getDay();
    console.log(fecha, dayOfWeek);
    return dayOfWeek === 5 || dayOfWeek === 6;
  }

  async isHolliday(date: Date) {
    let is = false;
    const hollidays = colombianHolidays(date.getFullYear());
    await hollidays.map((item) => {
      if (new Date(item.date).getTime() === date.getTime()) {
        is = true;
      }
    });
    return is;
  }

  async calculateResources(initDate) {
    let date = new Date(initDate);
    console.log('date', date);
    let amount = 10;
    let valid = false;
    while (valid != true) {
      date = new Date(date.setDate(date.getDate() + 1));
      if (date.getDay() != 5 && date.getDay() != 6) {
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
        `El dpcumento ID ${pasaporte.document_id} ya cuenta con una solicitud de pasaporte activa`,
      );
    }

    const { amount, appointment_date } = await this.calculateResources(
      pasaporte.application_date,
    );

    pasaporte.appointment_date = appointment_date;
    pasaporte.amount = amount;
    console.log('pasando ejecutar');
    const data = await this._repositorioPasaporte.guardar(pasaporte);
    console.log('data aca ejecutar', data);
    return data;
  }
}
