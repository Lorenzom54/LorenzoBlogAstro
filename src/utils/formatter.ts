export class Formatter {
    static formatDate(value: Date): string {
        const date = new Date(value);
        return Intl.DateTimeFormat('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).format(date);
    }
}