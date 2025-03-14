computedPropertyNamesContextualType4_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 113,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 59,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 18,
            "end": 35,
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
              "end": 34,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 31,
                "end": 34
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 40,
            "end": 57,
            "parameters": [
              {
                "type": "Identifier",
                "start": 41,
                "end": 50,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 50,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 44,
                    "end": 50
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 56,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 53,
                "end": 56
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
      "start": 61,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 69,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 69,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 72,
            "end": 113,
            "properties": [
              {
                "type": "Property",
                "start": 78,
                "end": 92,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 79,
                  "end": 87,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 79,
                    "end": 81,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "right": {
                    "type": "Literal",
                    "start": 82,
                    "end": 87,
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
                  "start": 90,
                  "end": 92,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 98,
                "end": 111,
                "computed": true,
                "key": {
                  "type": "BinaryExpression",
                  "start": 99,
                  "end": 107,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 99,
                    "end": 101,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "right": {
                    "type": "Literal",
                    "start": 102,
                    "end": 107,
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
                  "start": 110,
                  "end": 111,
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
