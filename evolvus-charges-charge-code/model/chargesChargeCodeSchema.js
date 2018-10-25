/*
 ** JSON Schema representation of the chargesChargeCode model
 */
module.exports.schema = {
  "$schema": "http://json-schema.org/draft-06/schema#",
  "title": "chargesChargeCodeModel",
  "type": "object",
  "properties": {
    
    "name": {
      "type": "string",
      "minLength": "5",
      "maxLength": "20",
      "unique": "true"
    },
    
    "type": {
      "type": "string",
      "minLength":"5",
      "maxLength": "20"
    },
    
    "amount": {
      "type": "number",
      "minLength": "1",
      "maxLength": "10"
    },
    
    "description": {
      "type": "string",
      "minLength": "5",
      "maxLength": "200"
    },
    
    "schemeType": {
      "type": "string",     
      "minLength": "2",
      "maxLength": "10"
    },
    
    "transactionType": {
      "type": "string",      
      "minLength": "5",
      "maxLength": "25"
    },
    
    "createdBy": {
      "type": "string",    
      "minLength": "5",
      "maxLength": "35"
    },
    
    "createdDateAndTime": { 
      "type": "string",
      "format": "data-time",
    },
    
    "updatedBy": {
      "type": "string",
      "minLength": "5",
      "maxLength": "35"
    },
    
    "updatedDateAndTime": { 
      "type": "string",
      "format": "data-time",
    },
    
    "enabledFlag": {
      "enum": ["true", "false"],
      "default": "true"
    },
    
    "deletedFlag": {
      "enum": ["true", "false"],
      "default": "false"
    }
  },
  "required" : ["name","type", "transactionType", "schemeType", "description", "amount", "createdBy", "updatedBy", "createdDateAndTime", "updatedDateAndTime"]
};
