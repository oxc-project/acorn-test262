computedPropertyNamesContextualType8_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 121,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 67,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 67,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 39,
            "parameters": [
              {
                "type": "Identifier",
                "start": 19,
                "end": 28,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 20,
                  "end": 28,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 22,
                    "end": 28
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 29,
              "end": 38,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 44,
            "end": 65,
            "parameters": [
              {
                "type": "Identifier",
                "start": 45,
                "end": 54,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 46,
                  "end": 54,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 48,
                    "end": 54
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 64,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 57,
                "end": 64
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 73,
          "end": 121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 73,
            "end": 77,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 74,
              "end": 77,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 76,
                "end": 77,
                "typeName": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 80,
            "end": 121,
            "properties": [
              {
                "type": "Property",
                "start": 86,
                "end": 100,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 87,
                  "end": 95,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 87,
                    "end": 89,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "right": {
                    "type": "Literal",
                    "start": 90,
                    "end": 95,
                    "raw": "\"foo\"",
                    "value": "foo"
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 98,
                  "end": 100,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 106,
                "end": 119,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 107,
                  "end": 115,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 107,
                    "end": 109,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "right": {
                    "type": "Literal",
                    "start": 110,
                    "end": 115,
                    "raw": "\"bar\"",
                    "value": "bar"
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 118,
                  "end": 119,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
