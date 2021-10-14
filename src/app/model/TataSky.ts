export class IdentityResult {
  Errors: any[] | undefined;
  Succeeded:boolean | undefined
  Content: any;
}

export class TataSky extends IdentityResult{
    title: string | undefined;
    description: string | undefined;
    userRoles: string[] | undefined;
  }

  