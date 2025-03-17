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
      "directive": "use strict",
      "expression": {
        "type": "Literal",
        "start": 0,
        "end": 12,
        "raw": "\"use strict\"",
        "value": "use strict"
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 14,
      "end": 358,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 38,
        "end": 358,
        "body": [
          {
            "type": "IfStatement",
            "start": 44,
            "end": 307,
            "alternate": {
              "type": "BlockStatement",
              "start": 187,
              "end": 307,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 197,
                  "end": 215,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 212,
                    "end": 215,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 209,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 268,
                  "end": 274,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 268,
                    "end": 273,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 271,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 283,
                  "end": 291,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 283,
                    "end": 290,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 287,
                        "end": 289,
                        "raw": "10",
                        "value": 10
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 286,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
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
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 82,
                    "end": 85,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 138,
                  "end": 144,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 138,
                    "end": 143,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 141,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 161,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 153,
                    "end": 160,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 157,
                        "end": 159,
                        "raw": "10",
                        "value": 10
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 153,
                      "end": 156,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 48,
              "end": 55,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 54,
                "end": 55,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 312,
            "end": 320,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 312,
              "end": 319,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 316,
                  "end": 318,
                  "raw": "10",
                  "value": 10
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 312,
                "end": 315,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 325,
            "end": 331,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 325,
              "end": 330,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 325,
                "end": 328,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 26,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 359,
      "end": 367,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 359,
        "end": 366,
        "arguments": [
          {
            "type": "Literal",
            "start": 363,
            "end": 365,
            "raw": "10",
            "value": 10
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 359,
          "end": 362,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 368,
      "end": 374,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 368,
        "end": 373,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 368,
          "end": 371,
          "decorators": [],
          "name": "foo",
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
