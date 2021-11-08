//
// Autogenerated by Thrift Compiler (0.15.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = module.exports = {};
var data = module.exports.data = function(args) {
  this.index = null;
  this.num = null;
  if (args) {
    if (args.index !== undefined && args.index !== null) {
      this.index = args.index;
    }
    if (args.num !== undefined && args.num !== null) {
      this.num = args.num;
    }
  }
};
data.prototype = {};
data.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.BYTE) {
        this.index = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.num = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

data.prototype.write = function(output) {
  output.writeStructBegin('data');
  if (this.index !== null && this.index !== undefined) {
    output.writeFieldBegin('index', Thrift.Type.BYTE, 1);
    output.writeByte(this.index);
    output.writeFieldEnd();
  }
  if (this.num !== null && this.num !== undefined) {
    output.writeFieldBegin('num', Thrift.Type.I64, 2);
    output.writeI64(this.num);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
