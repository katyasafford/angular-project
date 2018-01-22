// import { Component, OnInit, forwardRef, Input } from '@angular/core';
// import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, Validator, NG_VALIDATORS } from '@angular/forms';
//
// // export function validateCounterRange(c: FormControl) {
// //   let err = {
// //     rangeError: {
// //       given: c.value,
// //       max: 10,
// //       min: 0
// //     }
// //   };
// //
// //   return (c.value > 10 || c.value < 0) ? err : null;
// // }
//
// export function validateCounterRange(c: FormControl) {
//   if (c.value > 10 || c.value < 0) {
//     return { 'valid': true };
//   }
//   return null;
// }
//
// @Component({
//   selector: 'app-importance',
//   templateUrl: './importance.component.html',
//   styleUrls: ['./importance.component.css'],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       //useExisting: forwardRef(() => ImportanceComponent),
//       useValue: validateCounterRange,
//       multi: true
//     }
//   ]
// })
// export class ImportanceComponent implements ControlValueAccessor {
//   // @Input() counterValue = 0;
//   propagateChange = (_: any) => {};
//
//   // increment() {
//   //   this.counterValue++;
//   //   this.propagateChange(this.counterValue);
//   // }
//   //
//   // decrement() {
//   //   this.counterValue--;
//   //   this.propagateChange(this.counterValue);
//   // }
//
//   @Input()
//   _counterValue = 0;
//
//   get counterValue() {
//     return this._counterValue;
//   }
//
//   set counterValue(val) {
//     this._counterValue = val;
//     this.propagateChange(this._counterValue);
//   }
//
//   increment() {
//     this.counterValue++;
//   }
//
//   decrement() {
//     this.counterValue--;
//   }
//
//   public writeValue(value: any) {
//     if (value !== undefined) {
//       this.counterValue = value;
//     }
//   }
//
//   registerOnChange(fn) {
//     this.propagateChange = fn;
//   }
//
//   registerOnTouched() {}
//
// }
