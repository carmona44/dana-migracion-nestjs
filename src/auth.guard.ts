import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate( context: ExecutionContext ): boolean | Promise<boolean> | Observable<boolean> {
    
    const request = context.switchToHttp().getRequest();

    return validateRequest(request);

  }

}

function validateRequest(req) {

    const auth = req.get('Authorization');

    if(auth === '1234'){

      return true;

    } else if (!auth) {

      throw new UnauthorizedException('No se ha introducido el token');

    } else {

      throw new UnauthorizedException('El token introducido no es válido');
    }
    
}