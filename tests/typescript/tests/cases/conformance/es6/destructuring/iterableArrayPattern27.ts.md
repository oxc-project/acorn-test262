__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 135,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 28,
        "decorators": [],
        "name": "takeFirstTwoEntries",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "start": 29,
          "end": 72,
          "decorators": [],
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
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 77,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 135,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 134,
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 97,
          "decorators": [],
          "name": "takeFirstTwoEntries",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 98,
            "end": 133,
            "argument": {
              "type": "NewExpression",
              "start": 101,
              "end": 133,
              "callee": {
                "type": "Identifier",
                "start": 105,
                "end": 108,
                "decorators": [],
                "name": "Map",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrayExpression",
                  "start": 109,
                  "end": 132,
                  "elements": [
                    {
                      "type": "ArrayExpression",
                      "start": 110,
                      "end": 117,
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
                          "end": 116,
                          "value": 0,
                          "raw": "0"
                        }
                      ]
                    },
                    {
                      "type": "ArrayExpression",
                      "start": 119,
                      "end": 131,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 120,
                          "end": 127,
                          "value": "hello",
                          "raw": "\"hello\""
                        },
                        {
                          "type": "Literal",
                          "start": 129,
                          "end": 130,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
