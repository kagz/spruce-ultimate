import { Customer } from "./customer.model";

export class CreateCompany{

    _id: string;
    name: string;
    phone: string;
    email: string;
    clientLocation: string;
    jobdesc: string;
    customer:Customer[];
    image: string;
    


    static readonly STATES =['Abingdon', 'Accrington', 'Acton, Adlington',' Alcester, Aldeburgh, Aldershot, Aldridge, Alford, Alfreton, Alnwick, Alsager, Alston, Alton, Altrincham, Amble, Amersham, Amesbury, Ampthill, Andover, Appleby-in-Westmorland, Arundel, Ashbourne, Ashburton, Ashby-de-la-Zouch, Ashford, Ashington, Ashton-in-Makerfield, Ashton-under-Lyne, Askern, Aspatria, Atherstone, Attleborough, Axbridge, Axminster, Aylesbury, Aylsham']

}