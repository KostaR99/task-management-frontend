import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem("token")) {
            const authHeader = req.clone({
                headers: req.headers.set("X-AUTH-HEADER", localStorage.getItem("token"))
            })
            req = authHeader
        }
        return next.handle(req);
    }

}