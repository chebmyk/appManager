import {HttpHeaders} from "@angular/common/http";

export class HttpOptions {
  public static readonly headers  = new HttpHeaders({'Content-Type': 'application/json'});
}
