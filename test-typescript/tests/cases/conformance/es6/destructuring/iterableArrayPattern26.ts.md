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
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 77,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 28,
        "decorators": [],
        "name": "takeFirstTwoEntries",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 29,
          "end": 72,
          "argument": {
            "type": "ArrayPattern",
            "start": 32,
            "end": 52,
            "decorators": [],
            "elements": [
              {
                "type": "ArrayPattern",
                "start": 33,
                "end": 41,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 34,
                    "end": 36,
                    "decorators": [],
                    "name": "k1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 38,
                    "end": 40,
                    "decorators": [],
                    "name": "v1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrayPattern",
                "start": 43,
                "end": 51,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 44,
                    "end": 46,
                    "decorators": [],
                    "name": "k2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 50,
                    "decorators": [],
                    "name": "v2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              }
            ],
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
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 132,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 131,
        "arguments": [
          {
            "type": "NewExpression",
            "start": 98,
            "end": 130,
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
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      {
                        "type": "Literal",
                        "start": 112,
                        "end": 113,
                        "raw": "0",
                        "value": 0,
                        "regex": null,
                        "bigint": null
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
                        "raw": "\"hello\"",
                        "value": "hello",
                        "regex": null,
                        "bigint": null
                      },
                      {
                        "type": "Literal",
                        "start": 126,
                        "end": 127,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 102,
              "end": 105,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 97,
          "decorators": [],
          "name": "takeFirstTwoEntries",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
