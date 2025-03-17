__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 132,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 28,
        "name": "takeFirstTwoEntries",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 29,
          "end": 72,
          "argument": {
            "type": "ArrayPattern",
            "start": 32,
            "end": 52,
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 33,
                "end": 41,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 36,
                    "name": "k1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 38,
                    "end": 40,
                    "name": "v1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 43,
                "end": 51,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 44,
                    "end": 46,
                    "name": "k2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 50,
                    "name": "v2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 52,
            "end": 72,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 54,
              "end": 72,
              "elementType": {
                "type": "TSTupleType",
                "start": 54,
                "end": 70,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 55,
                    "end": 61
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 63,
                    "end": 69
                  }
                ]
              }
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 132,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 131,
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 97,
          "name": "takeFirstTwoEntries",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "NewExpression",
            "start": 98,
            "end": 130,
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 106,
                "end": 129,
                "elements": [
                  {
                    "type": "ArrayExpression",
                    "start": 107,
                    "end": 114,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 108,
                        "end": 110,
                        "value": "",
                        "raw": "\"\""
                      },
                      {
                        "type": "Literal",
                        "start": 112,
                        "end": 113,
                        "value": 0,
                        "raw": "0"
                      }
                    ]
                  },
                  {
                    "type": "ArrayExpression",
                    "start": 116,
                    "end": 128,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 117,
                        "end": 124,
                        "value": "hello",
                        "raw": "\"hello\""
                      },
                      {
                        "type": "Literal",
                        "start": 126,
                        "end": 127,
                        "value": 1,
                        "raw": "1"
                      }
                    ]
                  }
                ]
              }
            ],
            "typeArguments": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
