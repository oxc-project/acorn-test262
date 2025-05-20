__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 168,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 12,
      "end": 168,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 168,
        "body": [
          {
            "type": "IfStatement",
            "start": 84,
            "end": 166,
            "alternate": {
              "type": "BlockStatement",
              "start": 139,
              "end": 166,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 149,
                  "end": 160,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 156,
                    "end": 159,
                    "elements": [
                      {
                        "type": "Identifier",
                        "start": 157,
                        "end": 158,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ]
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 108,
              "end": 133,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 118,
                  "end": 127,
                  "argument": {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 88,
              "end": 106,
              "operator": "instanceof",
              "left": {
                "type": "Identifier",
                "start": 88,
                "end": 89,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 101,
                "end": 106,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 27,
        "decorators": [],
        "name": "narrow",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 57,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 57,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 31,
              "end": 57,
              "types": [
                {
                  "type": "TSTypeOperator",
                  "start": 31,
                  "end": 48,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 40,
                    "end": 48,
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 51,
                  "end": 57
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 60,
          "end": 77,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "start": 69,
            "end": 77,
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 69,
              "end": 75
            }
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
