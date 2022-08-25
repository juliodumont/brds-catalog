import {hasAnyRoles} from '../auth'
import * as TokenModule from '../token'

describe('hasAnyRoles tests', ()=>{
  test('should return true when empty list', () => {
    const result = hasAnyRoles([]);
    expect(result).toEqual(true);
  });
  //Mock no teste para especificar um comportamento
  test('should return true when user has given role', () => {
    //Como simular então que o usuário tem ROLE_ADMIM? Damos mock na função que ele depende getTokenData
    //Importe o arquivo como modulo e da mock na função desejada => get...

    jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
      exp: 0,
      user_name: '',
      authorities: ['ROLE_ADMIN', 'ROLE_OPERATOR']
    })

    const result = hasAnyRoles(['ROLE_ADMIN']);
    expect(result).toEqual(true);
  });

  test('should return false when user doesnt have given role', () => {
    jest.spyOn(TokenModule, 'getTokenData').mockReturnValue({
      exp: 0,
      user_name: '',
      authorities: ['ROLE_OPERATOR']
    })

    const result = hasAnyRoles(['ROLE_ADMIN']);
    expect(result).toEqual(false);
  });
})

