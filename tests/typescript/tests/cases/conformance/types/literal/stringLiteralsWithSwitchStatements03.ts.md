__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 487,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 13,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 12,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 12,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 7,
                "end": 12,
                "literal": {
                  "type": "Literal",
                  "start": 7,
                  "end": 12,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 35,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 34,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 34,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 34,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 21,
                "end": 34,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 21,
                    "end": 26,
                    "literal": {
                      "type": "Literal",
                      "start": 21,
                      "end": 26,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 29,
                    "end": 34,
                    "literal": {
                      "type": "Literal",
                      "start": 29,
                      "end": 34,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 41,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 49,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 44,
                "end": 49,
                "literal": {
                  "type": "Literal",
                  "start": 44,
                  "end": 49,
                  "raw": "\"bar\"",
                  "value": "bar"
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSDeclareFunction",
      "start": 52,
      "end": 89,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 77,
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 88,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 81,
          "end": 88
        }
      },
      "typeParameters": null
    },
    {
      "type": "SwitchStatement",
      "start": 91,
      "end": 487,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 108,
          "end": 155,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 149,
              "end": 155,
              "label": null
            }
          ],
          "test": {
            "type": "ConditionalExpression",
            "start": 113,
            "end": 139,
            "alternate": {
              "type": "Literal",
              "start": 134,
              "end": 139,
              "raw": "\"baz\"",
              "value": "baz"
            },
            "consequent": {
              "type": "Literal",
              "start": 126,
              "end": 131,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "test": {
              "type": "CallExpression",
              "start": 113,
              "end": 123,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 113,
                "end": 121,
                "decorators": [],
                "name": "randBool",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 160,
          "end": 227,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 221,
              "end": 227,
              "label": null
            }
          ],
          "test": {
            "type": "ConditionalExpression",
            "start": 166,
            "end": 210,
            "alternate": {
              "type": "ConditionalExpression",
              "start": 189,
              "end": 210,
              "alternate": {
                "type": "Literal",
                "start": 205,
                "end": 210,
                "raw": "\"baz\"",
                "value": "baz"
              },
              "consequent": {
                "type": "Literal",
                "start": 197,
                "end": 202,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "test": {
                "type": "Literal",
                "start": 189,
                "end": 194,
                "raw": "\"baz\"",
                "value": "baz"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 180,
              "end": 185,
              "raw": "\"bar\"",
              "value": "bar"
            },
            "test": {
              "type": "CallExpression",
              "start": 166,
              "end": 176,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 166,
                "end": 174,
                "decorators": [],
                "name": "randBool",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 232,
          "end": 262,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 256,
              "end": 262,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 239,
            "end": 244,
            "raw": "\"bar\"",
            "value": "bar"
          }
        },
        {
          "type": "SwitchCase",
          "start": 267,
          "end": 325,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 297,
              "end": 299,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 297,
                "end": 298,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 308,
              "end": 310,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 319,
              "end": 325,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 273,
            "end": 286,
            "expressions": [
              {
                "type": "Identifier",
                "start": 273,
                "end": 274,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 276,
                "end": 277,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 280,
                "end": 285,
                "raw": "\"baz\"",
                "value": "baz"
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 330,
          "end": 371,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 365,
              "end": 371,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 337,
            "end": 353,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 337,
              "end": 342,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "Literal",
              "start": 347,
              "end": 352,
              "raw": "\"bar\"",
              "value": "bar"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 376,
          "end": 417,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 411,
              "end": 417,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 383,
            "end": 399,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 383,
              "end": 388,
              "raw": "\"bar\"",
              "value": "bar"
            },
            "right": {
              "type": "Literal",
              "start": 393,
              "end": 398,
              "raw": "\"baz\"",
              "value": "baz"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 422,
          "end": 438,
          "consequent": [],
          "test": {
            "type": "LogicalExpression",
            "start": 427,
            "end": 437,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 432,
              "end": 437,
              "raw": "\"baz\"",
              "value": "baz"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 443,
          "end": 485,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 468,
              "end": 470,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 479,
              "end": 485,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 448,
            "end": 458,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 448,
              "end": 453,
              "raw": "\"baz\"",
              "value": "baz"
            },
            "right": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
