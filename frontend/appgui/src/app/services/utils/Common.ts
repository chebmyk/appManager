export class Common {

  public static content_types = [
    {value:'VIDEO'},
    {value:'IMAGE'},
    {value:'HTML'}
  ];

  public static app_types = [
    {value:'IOS'},
    {value:'ANDROID'},
    {value:'WEB'}
  ];

  public static user_roles = [
    {value:'ADMIN'},
    {value:'ADOPS'},
    {value:'PUBLISHER'}
    ];
}

export class FormErrors
{
  field: string;
  message: string;
}

export class PaginatorOptions
{
  length = 1;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50];
}
