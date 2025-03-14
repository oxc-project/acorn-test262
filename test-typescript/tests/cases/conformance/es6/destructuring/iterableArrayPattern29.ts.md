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
        "optional": false
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
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 38,
                    "end": 40,
                    "decorators": [],
                    "name": "v1",
                    "optional": false
                  }
                ],
                "optional": false
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
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 50,
                    "decorators": [],
                    "name": "v2",
                    "optional": false
                  }
                ],
                "optional": false
              }
            ],
            "optional": false
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
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 78,
      "end": 141,
      "expression": {
        "type": "CallExpression",
        "start": 78,
        "end": 140,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 98,
            "end": 139,
            "argument": {
              "type": "NewExpression",
              "start": 101,
              "end": 139,
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
                          "raw": "\"\"",
                          "value": ""
                        },
                        {
                          "type": "Literal",
                          "start": 115,
                          "end": 119,
                          "raw": "true",
                          "value": true
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
                          "raw": "\"hello\"",
                          "value": "hello"
                        },
                        {
                          "type": "Literal",
                          "start": 132,
                          "end": 136,
                          "raw": "true",
                          "value": true
                        }
                      ]
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 105,
                "end": 108,
                "decorators": [],
                "name": "Map",
                "optional": false
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 78,
          "end": 97,
          "decorators": [],
          "name": "takeFirstTwoEntries",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
