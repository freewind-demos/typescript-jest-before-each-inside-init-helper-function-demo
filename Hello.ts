export class Hello {
  public name?: string;

  hello(): string {
    return `Hello, ${this.name ?? ''}!`
  }
}
