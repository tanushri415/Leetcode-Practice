//Challenge 1
// Create a user class
// Add a firstNmae, lastName, and email property.
// Add a get to return fullName.
// Add a method to check if your email param matches the user's current email.

class User {
  firstName: string;
  lastName: string;
  email: string;

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

//Create an Admin class that extends User.
// Create Guest class that implements User
// Have both classes below pass firstName,

export class Admin extends User {
  constructor(firstName: string, lastName: string, email: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

export class Guest implements User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

// static methods

export class Message {
  title: string;
  message: string;
  isSent: boolean;
}

export class Messages extends Array<Message> {
  public getValidMessages(messages: Message[]): Message[] {
    return messages.filter((value) => value.message.trim().length > 0);
  }

  static getValidMessages(messages: Message[]): Message[] {
    return messages.filter((value) => value.message.trim().length > 0);
  }
}
Messages.getValidMessages([]);

/**
 *  -----------------------------
 * Challenge : Encapsulation
 * -----------------------------
 * 1. Use the classes below.
 * 2. Add an appropriate readonly property to the User class.
 * 3. Be explicit with your public properties our User class.
 * 4. Add an appropriate protected property in User and access it with a private method in Admin.
 */

export class User1 {
  public readonly id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  protected dob: Date;

  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public doesEmailMatch(email: string): boolean {
    return this.email === email;
  }
}

export class Admin1 extends User1 {
  public readonly yearBorn: number;

  constructor(firstName: string, lastName: string, email: string) {
    super();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.yearBorn = this.getYear();
  }
  private getYear(): number {
    return this.dob.getFullYear();
  }
}
