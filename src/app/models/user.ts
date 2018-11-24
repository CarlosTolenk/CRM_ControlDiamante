export interface Roles {
    admin?:   boolean;
    shift?:   boolean;
    staff?:   boolean;
  }
  
  export class User {
    email:      string;
    displaName: string;
    photoURL:   string;
    rol:      Roles;
  
    constructor(authData) {
      this.email    = authData.email
      this.photoURL = authData.photoURL
      this.rol    = { staff: true }
    }
  }