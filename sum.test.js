'use strict'
console.assert = require('assert')
import {expect} from 'chai'
import sum from './sum'

it('sum should be a function', ()=> {
    expect(sum).to.be.a('function')
})

