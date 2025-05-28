__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 399,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 13,
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "value": "use strict",
        "raw": "\"use strict\""
      },
      "directive": "use strict"
    },
    {
      "type": "FunctionDeclaration",
      "start": 14,
      "end": 358,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 27,
          "end": 36,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 36,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 30,
              "end": 36
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 358,
        "body": [
          {
            "type": "IfStatement",
            "start": 44,
            "end": 307,
            "test": {
              "type": "BinaryExpression",
              "start": 48,
              "end": 55,
              "left": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 54,
                "end": 55,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 57,
              "end": 177,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 67,
                  "end": 85,
                  "id": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 82,
                    "end": 85,
                    "body": []
                  },
                  "expression": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 138,
                  "end": 144,
                  "expression": {
                    "type": "CallExpression",
                    "start": 138,
                    "end": 143,
                    "callee": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 141,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 161,
                  "expression": {
                    "type": "CallExpression",
                    "start": 153,
                    "end": 160,
                    "callee": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 156,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 157,
                        "end": 159,
                        "value": 10,
                        "raw": "10"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 187,
              "end": 307,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 197,
                  "end": 215,
                  "id": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 209,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 212,
                    "end": 215,
                    "body": []
                  },
                  "expression": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 268,
                  "end": 274,
                  "expression": {
                    "type": "CallExpression",
                    "start": 268,
                    "end": 273,
                    "callee": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 271,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 283,
                  "end": 291,
                  "expression": {
                    "type": "CallExpression",
                    "start": 283,
                    "end": 290,
                    "callee": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 286,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 287,
                        "end": 289,
                        "value": 10,
                        "raw": "10"
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 312,
            "end": 320,
            "expression": {
              "type": "CallExpression",
              "start": 312,
              "end": 319,
              "callee": {
                "type": "Identifier",
                "start": 312,
                "end": 315,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 316,
                  "end": 318,
                  "value": 10,
                  "raw": "10"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 325,
            "end": 331,
            "expression": {
              "type": "CallExpression",
              "start": 325,
              "end": 330,
              "callee": {
                "type": "Identifier",
                "start": 325,
                "end": 328,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 359,
      "end": 367,
      "expression": {
        "type": "CallExpression",
        "start": 359,
        "end": 366,
        "callee": {
          "type": "Identifier",
          "start": 359,
          "end": 362,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 363,
            "end": 365,
            "value": 10,
            "raw": "10"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 368,
      "end": 374,
      "expression": {
        "type": "CallExpression",
        "start": 368,
        "end": 373,
        "callee": {
          "type": "Identifier",
          "start": 368,
          "end": 371,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
