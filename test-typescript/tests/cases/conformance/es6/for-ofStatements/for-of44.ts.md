__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 168,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 16,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 20,
          "end": 102,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 64,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 64,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 27,
                "end": 64,
                "elementType": {
                  "type": "TSTupleType",
                  "start": 27,
                  "end": 62,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 28,
                      "end": 34
                    },
                    {
                      "type": "TSUnionType",
                      "start": 36,
                      "end": 61,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 36,
                          "end": 42
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 45,
                          "end": 52
                        },
                        {
                          "type": "TSSymbolKeyword",
                          "start": 55,
                          "end": 61
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 67,
            "end": 102,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 68,
                "end": 75,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 69,
                    "end": 70,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 72,
                    "end": 74,
                    "raw": "\"\"",
                    "value": ""
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 77,
                "end": 86,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 78,
                    "end": 79,
                    "raw": "0",
                    "value": 0
                  },
                  {
                    "type": "Literal",
                    "start": 81,
                    "end": 85,
                    "raw": "true",
                    "value": true
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 88,
                "end": 101,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 89,
                    "end": 90,
                    "raw": "1",
                    "value": 1
                  },
                  {
                    "type": "CallExpression",
                    "start": 92,
                    "end": 100,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 98,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false
                    },
                    "optional": false
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 103,
      "end": 168,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 140,
        "end": 168,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 146,
            "end": 150,
            "expression": {
              "type": "Identifier",
              "start": 146,
              "end": 149,
              "decorators": [],
              "name": "num",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 155,
            "end": 166,
            "expression": {
              "type": "Identifier",
              "start": 155,
              "end": 165,
              "decorators": [],
              "name": "strBoolSym",
              "optional": false
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 108,
        "end": 129,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 112,
            "end": 129,
            "definite": false,
            "id": {
              "type": "ArrayPattern",
              "start": 112,
              "end": 129,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 113,
                  "end": 116,
                  "decorators": [],
                  "name": "num",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 118,
                  "end": 128,
                  "decorators": [],
                  "name": "strBoolSym",
                  "optional": false
                }
              ],
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 133,
        "end": 138,
        "decorators": [],
        "name": "array",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
