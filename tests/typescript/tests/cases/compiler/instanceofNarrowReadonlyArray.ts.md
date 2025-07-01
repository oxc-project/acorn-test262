__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 27
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 40,
                      "end": 46
                    },
                    "start": 40,
                    "end": 48
                  },
                  "start": 31,
                  "end": 48
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 51,
                  "end": 57
                }
              ],
              "start": 31,
              "end": 57
            },
            "start": 29,
            "end": 57
          },
          "start": 28,
          "end": 57
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSNumberKeyword",
              "start": 69,
              "end": 75
            },
            "start": 69,
            "end": 77
          },
          "start": 60,
          "end": 77
        },
        "start": 58,
        "end": 77
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 89
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 106
              },
              "start": 88,
              "end": 106
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 126
                  },
                  "start": 118,
                  "end": 127
                }
              ],
              "start": 108,
              "end": 133
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 158
                      }
                    ],
                    "start": 156,
                    "end": 159
                  },
                  "start": 149,
                  "end": 160
                }
              ],
              "start": 139,
              "end": 166
            },
            "start": 84,
            "end": 166
          }
        ],
        "start": 78,
        "end": 168
      },
      "expression": false,
      "start": 12,
      "end": 168
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 12,
  "end": 168
}
```
