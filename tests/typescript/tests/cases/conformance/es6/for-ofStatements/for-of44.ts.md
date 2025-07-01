__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 12,
                      "end": 18
                    },
                    {
                      "type": "TSUnionType",
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
                      ],
                      "start": 20,
                      "end": 45
                    }
                  ],
                  "start": 11,
                  "end": 46
                },
                "start": 11,
                "end": 48
              },
              "start": 9,
              "end": 48
            },
            "start": 4,
            "end": 48
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 53,
                    "end": 54
                  },
                  {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 56,
                    "end": 58
                  }
                ],
                "start": 52,
                "end": 59
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 62,
                    "end": 63
                  },
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 65,
                    "end": 69
                  }
                ],
                "start": 61,
                "end": 70
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 73,
                    "end": 74
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 76,
                      "end": 82
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 76,
                    "end": 84
                  }
                ],
                "start": 72,
                "end": 85
              }
            ],
            "start": 51,
            "end": 86
          },
          "definite": false,
          "start": 4,
          "end": 86
        }
      ],
      "declare": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "ArrayPattern",
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 100
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strBoolSym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 102,
                  "end": 112
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 113
            },
            "init": null,
            "definite": false,
            "start": 96,
            "end": 113
          }
        ],
        "declare": false,
        "start": 92,
        "end": 113
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "array",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 122
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "num",
              "optional": false,
              "typeAnnotation": null,
              "start": 130,
              "end": 133
            },
            "directive": null,
            "start": 130,
            "end": 134
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "strBoolSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 149
            },
            "directive": null,
            "start": 139,
            "end": 150
          }
        ],
        "start": 124,
        "end": 152
      },
      "start": 87,
      "end": 152
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 152
}
```
