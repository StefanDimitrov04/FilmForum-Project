import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.development";
import { UserService } from "./user/user-service";

const {appUrl} = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    constructor(private userService: UserService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(req.url.startsWith('/api')){
            req = req.clone({
                url: req.url.replace('/api', appUrl),
                withCredentials: true,
            });
        };
        return next.handle(req);
    }
}

export  const AppInterceptorProvider: Provider = {
  multi: true,
  useClass: AppInterceptor,
  provide: HTTP_INTERCEPTORS
} 

