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
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 13,
            "name": "x",
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
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 19,
            "end": 35,
            "name": "y",
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 50,
            "name": "z",
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
                  "value": "bar",
                  "raw": "\"bar\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 53,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 70,
        "end": 78,
        "name": "randBool",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 80,
        "end": 89,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 82,
          "end": 89
        }
      }
    },
    {
      "type": "SwitchStatement",
      "start": 92,
      "end": 488,
      "discriminant": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
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
            "test": {
              "type": "CallExpression",
              "start": 114,
              "end": 124,
              "callee": {
                "type": "Identifier",
                "start": 114,
                "end": 122,
                "name": "randBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "Literal",
              "start": 127,
              "end": 132,
              "value": "foo",
              "raw": "\"foo\""
            },
            "alternate": {
              "type": "Literal",
              "start": 135,
              "end": 140,
              "value": "baz",
              "raw": "\"baz\""
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
            "test": {
              "type": "CallExpression",
              "start": 167,
              "end": 177,
              "callee": {
                "type": "Identifier",
                "start": 167,
                "end": 175,
                "name": "randBool",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "Literal",
              "start": 181,
              "end": 186,
              "value": "bar",
              "raw": "\"bar\""
            },
            "alternate": {
              "type": "ConditionalExpression",
              "start": 190,
              "end": 211,
              "test": {
                "type": "Literal",
                "start": 190,
                "end": 195,
                "value": "baz",
                "raw": "\"baz\""
              },
              "consequent": {
                "type": "Literal",
                "start": 198,
                "end": 203,
                "value": "bar",
                "raw": "\"bar\""
              },
              "alternate": {
                "type": "Literal",
                "start": 206,
                "end": 211,
                "value": "baz",
                "raw": "\"baz\""
              }
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
            "value": "bar",
            "raw": "\"bar\""
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
              "expression": {
                "type": "Identifier",
                "start": 298,
                "end": 299,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "directive": null
            },
            {
              "type": "ExpressionStatement",
              "start": 309,
              "end": 311,
              "expression": {
                "type": "Identifier",
                "start": 309,
                "end": 310,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "directive": null
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 281,
                "end": 286,
                "value": "baz",
                "raw": "\"baz\""
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
            "left": {
              "type": "Literal",
              "start": 338,
              "end": 343,
              "value": "foo",
              "raw": "\"foo\""
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 348,
              "end": 353,
              "value": "bar",
              "raw": "\"bar\""
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
            "left": {
              "type": "Literal",
              "start": 384,
              "end": 389,
              "value": "bar",
              "raw": "\"bar\""
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 394,
              "end": 399,
              "value": "baz",
              "raw": "\"baz\""
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
            "left": {
              "type": "Identifier",
              "start": 428,
              "end": 429,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "start": 433,
              "end": 438,
              "value": "baz",
              "raw": "\"baz\""
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
              "expression": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "directive": null
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
            "left": {
              "type": "Literal",
              "start": 449,
              "end": 454,
              "value": "baz",
              "raw": "\"baz\""
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
