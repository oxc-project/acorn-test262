computedPropertyNamesContextualType10_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 41,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 41,
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
                    "type": "TSNumberKeyword",
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
      "start": 43,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 47,
          "end": 91,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 47,
            "end": 51,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 48,
              "end": 51,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 50,
                "end": 51,
                "typeName": {
                  "type": "Identifier",
                  "start": 50,
                  "end": 51,
                  "decorators": [],
                  "name": "I",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 54,
            "end": 91,
            "properties": [
              {
                "type": "Property",
                "start": 60,
                "end": 72,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 61,
                  "end": 67,
                  "argument": {
                    "type": "Literal",
                    "start": 62,
                    "end": 67,
                    "raw": "\"foo\"",
                    "value": "foo"
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 70,
                  "end": 72,
                  "raw": "\"\"",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 78,
                "end": 89,
                "computed": true,
                "key": {
                  "type": "UnaryExpression",
                  "start": 79,
                  "end": 85,
                  "argument": {
                    "type": "Literal",
                    "start": 80,
                    "end": 85,
                    "raw": "\"bar\"",
                    "value": "bar"
                  },
                  "operator": "+",
                  "prefix": true
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 88,
                  "end": 89,
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
