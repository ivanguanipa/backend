import { RepositorioPasaporteMysql } from 'src/infraestructura/pasaporte/adaptador/repositorio/repositorio-pasaporte-mysql';
import { createStubObj } from '../../../util/create-object.stub';
import { createSandbox } from 'sinon';

describe('Pasaporte Reglas de Negocio', () => {
  const myAPI = { hello: function () {} };
  const sandbox = createSandbox();
  beforeEach(function () {
    // stub out the `hello` method
    sandbox.stub(myAPI, 'hello');
  });

  afterEach(function () {
    // completely restore all fakes created through the sandbox
    sandbox.restore();
  });

  it('createStubObj con sandbox', async () => {
    const obj = createStubObj<RepositorioPasaporteMysql>(
      ['existePasaporte'],
      sandbox,
    );
    console.log(obj);
    expect(obj).toBeDefined();
  });
});
