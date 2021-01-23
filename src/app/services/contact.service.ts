import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public url =environment.api_url;
  constructor(private http: HttpClient) { }
  
  public createContact(contact : Contact) : Observable<Contact>
  {
    const routeQuery=this.url+"/createSession";
    console.log("contact", contact)

    return this.http.post<Contact>(routeQuery,contact);
  }

  public updateContact(contact : Contact) : Observable<any>
  {
    const routeQuery=this.url+"/updateContact";
    console.log("contact", contact)

    return this.http.put<Contact>(routeQuery,contact);
  }

  public getContactById(idContact : Number) : Observable<Contact>
  {
    const routeQuery=this.url+"/contactById/"+idContact;
    return this.http.get<Contact>(routeQuery);
  }

  getAllContacts() : Observable<Array<Contact>>
  {
    const routeQuery=this.url+"/contacts";
    return this.http.get<Array<Contact>>(routeQuery);
  }

  public deleteContact (idContact :number) : Observable<any>
  {
    const routeQuery=this.url+"/deleteContact/"+idContact;
    return this.http.delete(routeQuery);
  }

  public deleteAllContacts () : Observable<any> {
    const routeQuery=this.url+"/deleteAllContacts";
    return this.http.delete(routeQuery);
  } 

  public peuplerBDD() : Observable<any>
  {
    console.log("BDD remplie");
    const routeQuery=this.url+"/peupleBdd";
    return this.http.get<any>(routeQuery);
  }
}
