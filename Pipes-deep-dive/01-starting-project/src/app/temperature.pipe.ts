import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true
})
export class TemperaturePipe implements PipeTransform {
    // transform(value: any, ...args: any[]) {
    //     return value + ' - transformed';
    // }

    // transform(value: string | number) {
    //     let val: number;

    //     if(typeof value === 'string'){
    //         val = parseFloat(value);
    //     } else {
    //         val = value;
    //     }

    //     const outputTemp = val * (9 / 5) + 32;
    //     return `${outputTemp} °F`; //alt + 0176 - for degree symbol
    // }

    transform(value: string | number | null, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {
        let val: number;

        if(!value){
            return value;
        }

        if(typeof value === 'string'){
            val = parseFloat(value);
        } else {
            val = value;
        }

        let outputTemp: number;

        if(inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9 / 5) + 32;
        } else if(inputType === 'fah' && outputType === 'cel'){
            outputTemp = (val - 32) * (5 / 9);
        } else {
            outputTemp = val;
        }

        let symbol: '°C' | '°F';

        if(!outputType){
            symbol = inputType === 'cel' ? '°C' : '°F';
        } else {
            symbol = outputType === 'cel' ? '°C' : '°F';
        }
        return `${outputTemp.toFixed(2)} ${symbol}`;
    }
    
}