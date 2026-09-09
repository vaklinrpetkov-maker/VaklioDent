import assert from 'node:assert/strict';
import {initialState,conflict} from './lib/demo.ts';
const s=initialState();const a=s.appointments[0];
assert.equal(conflict(s.appointments,{...a,id:'new'}),true,'Doctor overlap blocked');
assert.equal(conflict(s.appointments,{...a,id:'new',doctor:'alex'}),true,'Room overlap blocked');
assert.equal(conflict(s.appointments,{...a,id:'new',status:'Canceled'}),false,'Canceled slot does not conflict');
assert.equal(conflict([a],{...a,id:'new',time:'10:00'}),false,'Back-to-back booking permitted');
assert.equal(conflict(s.appointments,a),false,'Existing appointment does not conflict with itself');
console.log('5 booking conflict checks passed');

