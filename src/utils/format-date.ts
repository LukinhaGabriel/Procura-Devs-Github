export function formatDate(value:string):string {
    const date = new Date(value);
    const options:Object = { year: 'numeric', month: 'long', day: 'numeric'};
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
}