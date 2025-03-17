__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 489,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 6,
              "end": 13,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 8,
                "end": 13,
                "literal": {
                  "type": "Literal",
                  "start": 8,
                  "end": 13,
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
      "start": 15,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 19,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 22,
                "end": 35,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 22,
                    "end": 27,
                    "literal": {
                      "type": "Literal",
                      "start": 22,
                      "end": 27,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 30,
                    "end": 35,
                    "literal": {
                      "type": "Literal",
                      "start": 30,
                      "end": 35,
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
      "start": 38,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 50,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 50,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 45,
                "end": 50,
                "literal": {
                  "type": "Literal",
                  "start": 45,
                  "end": 50,
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
      "start": 53,
      "end": 90,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 78,
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 80,
        "end": 89,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 82,
          "end": 89
        }
      },
      "typeParameters": null
    },
    {
      "type": "SwitchStatement",
      "start": 92,
      "end": 488,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 109,
          "end": 156,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 150,
              "end": 156,
              "label": null
            }
          ],
          "test": {
            "type": "ConditionalExpression",
            "start": 114,
            "end": 140,
            "alternate": {
              "type": "Literal",
              "start": 135,
              "end": 140,
              "raw": "\"baz\"",
              "value": "baz"
            },
            "consequent": {
              "type": "Literal",
              "start": 127,
              "end": 132,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "test": {
              "type": "CallExpression",
              "start": 114,
              "end": 124,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 114,
                "end": 122,
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
          "start": 161,
          "end": 228,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 222,
              "end": 228,
              "label": null
            }
          ],
          "test": {
            "type": "ConditionalExpression",
            "start": 167,
            "end": 211,
            "alternate": {
              "type": "ConditionalExpression",
              "start": 190,
              "end": 211,
              "alternate": {
                "type": "Literal",
                "start": 206,
                "end": 211,
                "raw": "\"baz\"",
                "value": "baz"
              },
              "consequent": {
                "type": "Literal",
                "start": 198,
                "end": 203,
                "raw": "\"bar\"",
                "value": "bar"
              },
              "test": {
                "type": "Literal",
                "start": 190,
                "end": 195,
                "raw": "\"baz\"",
                "value": "baz"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 181,
              "end": 186,
              "raw": "\"bar\"",
              "value": "bar"
            },
            "test": {
              "type": "CallExpression",
              "start": 167,
              "end": 177,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 167,
                "end": 175,
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
          "start": 233,
          "end": 263,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 257,
              "end": 263,
              "label": null
            }
          ],
          "test": {
            "type": "Literal",
            "start": 240,
            "end": 245,
            "raw": "\"bar\"",
            "value": "bar"
          }
        },
        {
          "type": "SwitchCase",
          "start": 268,
          "end": 326,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 298,
              "end": 300,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 309,
              "end": 311,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 320,
              "end": 326,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 274,
            "end": 287,
            "expressions": [
              {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 281,
                "end": 286,
                "raw": "\"baz\"",
                "value": "baz"
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 331,
          "end": 372,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 366,
              "end": 372,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 338,
            "end": 354,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 338,
              "end": 343,
              "raw": "\"foo\"",
              "value": "foo"
            },
            "right": {
              "type": "Literal",
              "start": 348,
              "end": 353,
              "raw": "\"bar\"",
              "value": "bar"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 377,
          "end": 418,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 412,
              "end": 418,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 384,
            "end": 400,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 384,
              "end": 389,
              "raw": "\"bar\"",
              "value": "bar"
            },
            "right": {
              "type": "Literal",
              "start": 394,
              "end": 399,
              "raw": "\"baz\"",
              "value": "baz"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 423,
          "end": 439,
          "consequent": [],
          "test": {
            "type": "LogicalExpression",
            "start": 428,
            "end": 438,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 433,
              "end": 438,
              "raw": "\"baz\"",
              "value": "baz"
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 444,
          "end": 486,
          "consequent": [
            {
              "type": "ExpressionStatement",
              "start": 469,
              "end": 471,
              "directive": null,
              "expression": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "BreakStatement",
              "start": 480,
              "end": 486,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 449,
            "end": 459,
            "operator": "||",
            "left": {
              "type": "Literal",
              "start": 449,
              "end": 454,
              "raw": "\"baz\"",
              "value": "baz"
            },
            "right": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
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
        "start": 100,
        "end": 101,
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
