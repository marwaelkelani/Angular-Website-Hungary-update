import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function avoidWordTourist(fc: AbstractControl){
    let notAllowed = /tourist/.test(fc.value);

    if(notAllowed){
        return {
            prohibited: {value: fc.value}
        }
    }else{
        return null;
    }
}

export function avoidWordNothing(fc: AbstractControl){
    let notAllowed = /nothing/.test(fc.value);

    if(notAllowed){
        return {
            prohibited: {value: fc.value}
        }
    }else{
        return null;
    }
}

export function prohibited(reg:RegExp) : ValidatorFn{
    return (fc:AbstractControl) : ValidationErrors | null => {
        let notAllowed = reg.test(fc.value);

 

        if(notAllowed){
            return {
                prohibited: {value: fc.value}
            };
        }
        else{
            return null;
        }
    }
}