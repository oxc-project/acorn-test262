__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 141,
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
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 140,
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
            "type": "SpreadElement",
            "start": 98,
            "end": 139,
            "argument": {
              "type": "NewExpression",
              "start": 101,
              "end": 139,
              "callee": {
                "type": "Identifier",
                "start": 105,
                "end": 108,
                "name": "Map",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 109,
                  "end": 138,
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "start": 110,
                      "end": 120,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 111,
                          "end": 113,
                          "value": "",
                          "raw": "\"\""
                        },
                        {
                          "type": "Literal",
                          "start": 115,
                          "end": 119,
                          "value": true,
                          "raw": "true"
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "start": 122,
                      "end": 137,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 123,
                          "end": 130,
                          "value": "hello",
                          "raw": "\"hello\""
                        },
                        {
                          "type": "Literal",
                          "start": 132,
                          "end": 136,
                          "value": true,
                          "raw": "true"
                        }
                      ]
                    }
                  ]
                }
              ],
              "typeArguments": null
            }
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
