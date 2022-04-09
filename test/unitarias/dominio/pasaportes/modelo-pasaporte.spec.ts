import { Pasaporte } from 'src/dominio/pasaporte/modelo/pasaporte';

describe('modelo Pasaporte', () => {
  const date = new Date();
  const pasaporte = new Pasaporte(1, 'string', 'string', date, 1, date, date);

  it('get id', async () => {
    expect(pasaporte.id).toEqual(undefined);
  });
  it('get fullname', async () => {
    expect(pasaporte.fullname).toEqual('string');
  });
  it('get address', async () => {
    expect(pasaporte.address).toEqual('string');
  });
  it('get birthdate', async () => {
    expect(pasaporte.birthdate).toEqual(date);
  });
  it('get amount', async () => {
    expect(pasaporte.amount).toEqual(1);
    pasaporte.amount = 2;
    expect(pasaporte.amount).toEqual(2);
  });
  it('get createdAt', async () => {
    expect(pasaporte.createdAt).toEqual(undefined);
  });
  it('get deletedAt', async () => {
    expect(pasaporte.deletedAt).toEqual(undefined);
  });
  it('get applicationDate', async () => {
    expect(pasaporte.applicationDate).toEqual(date);
  });
  it('get documentId', async () => {
    expect(pasaporte.documentId).toEqual(1);
  });
  it('get appointmentDate', async () => {
    expect(pasaporte.appointmentDate).toEqual(date);
    const ndate = new Date();
    pasaporte.appointmentDate = ndate;
    expect(pasaporte.appointmentDate).toEqual(ndate);
  });
});
