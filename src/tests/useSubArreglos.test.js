import { subArreglos } from '../hooks/useSubArreglos.js';
const arr1 = [9,8,4,5,6,7,1,9];
const arr2 = [1,2,5,8,9];
const arr3 = [7,2,8,3,9,6];
const arr4 = [1,3,5,7,9];
const arr5 = [1,3,4,5,7,9];

test('[9,8,4,5,6,7,1,9] => [1,4567899]', ()=>{
	expect( subArreglos(arr1) ).toEqual([1,4567899]);
});

test('[1,2,5,8,9] => [12,5,89]', ()=>{
	expect( subArreglos(arr2) ).toEqual([12,5,89]);
});

test('[7,2,8,3,9,6] => [23,6789]', ()=>{
	expect( subArreglos(arr3) ).toEqual([23,6789]);
});

test('[1,3,5,7,9] => [1,3,5,7,9]', ()=>{
	expect( subArreglos(arr4) ).toEqual([1,3,5,7,9]);
});

test('[1,3,4,5,7,9] => [1,345,7,9]', ()=>{
	expect( subArreglos(arr5) ).toEqual([1,345,7,9]);
});