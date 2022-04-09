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
  it('get created_at', async () => {
    expect(pasaporte.created_at).toEqual(undefined);
  });
  it('get deleted_at', async () => {
    expect(pasaporte.deleted_at).toEqual(undefined);
  });
  it('get application_date', async () => {
    expect(pasaporte.application_date).toEqual(date);
  });
  it('get document_id', async () => {
    expect(pasaporte.document_id).toEqual(1);
  });
  it('get appointment_date', async () => {
    expect(pasaporte.appointment_date).toEqual(date);
    const ndate = new Date();
    pasaporte.appointment_date = ndate;
    expect(pasaporte.appointment_date).toEqual(ndate);
  });
});
