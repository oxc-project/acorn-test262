__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 86,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 86,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 48,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 48,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 11,
                "end": 48,
                "elementType": {
                  "type": "TSTupleType",
                  "start": 11,
                  "end": 46,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 12,
                      "end": 18
                    },
                    {
                      "type": "TSUnionType",
                      "start": 20,
                      "end": 45,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 20,
                          "end": 26
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 29,
                          "end": 36
                        },
                        {
                          "type": "TSSymbolKeyword",
                          "start": 39,
                          "end": 45
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
            "start": 51,
            "end": 86,
            "elements": [
              {
                "type": "ArrayExpression",
                "start": 52,
                "end": 59,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 53,
                    "end": 54,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 56,
                    "end": 58,
                    "value": "",
                    "raw": "\"\""
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 61,
                "end": 70,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 62,
                    "end": 63,
                    "value": 0,
                    "raw": "0"
                  },
                  {
                    "type": "Literal",
                    "start": 65,
                    "end": 69,
                    "value": true,
                    "raw": "true"
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 72,
                "end": 85,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 73,
                    "end": 74,
                    "value": 1,
                    "raw": "1"
                  },
                  {
                    "type": "CallExpression",
                    "start": 76,
                    "end": 84,
                    "callee": {
                      "type": "Identifier",
                      "start": 76,
                      "end": 82,
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 87,
      "end": 152,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 92,
        "end": 113,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 96,
            "end": 113,
            "id": {
              "type": "ArrayPattern",
              "start": 96,
              "end": 113,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 97,
                  "end": 100,
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 102,
                  "end": 112,
                  "decorators": [],
                  "name": "strBoolSym",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 117,
        "end": 122,
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 124,
        "end": 152,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 130,
            "end": 134,
            "expression": {
              "type": "Identifier",
              "start": 130,
              "end": 133,
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 150,
            "expression": {
              "type": "Identifier",
              "start": 139,
              "end": 149,
              "decorators": [],
              "name": "strBoolSym",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
