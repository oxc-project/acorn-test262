__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "foo",
                  "raw": "\"foo\"",
                  "start": 7,
                  "end": 12
                },
                "start": 7,
                "end": 12
              },
              "start": 5,
              "end": 12
            },
            "start": 4,
            "end": 12
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "\"foo\"",
                      "start": 21,
                      "end": 26
                    },
                    "start": 21,
                    "end": 26
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 29,
                      "end": 34
                    },
                    "start": 29,
                    "end": 34
                  }
                ],
                "start": 21,
                "end": 34
              },
              "start": 19,
              "end": 34
            },
            "start": 18,
            "end": 34
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 34
        }
      ],
      "declare": false,
      "start": 14,
      "end": 35
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "bar",
                  "raw": "\"bar\"",
                  "start": 44,
                  "end": 49
                },
                "start": 44,
                "end": 49
              },
              "start": 42,
              "end": 49
            },
            "start": 41,
            "end": 49
          },
          "init": null,
          "definite": false,
          "start": 41,
          "end": 49
        }
      ],
      "declare": false,
      "start": 37,
      "end": 50
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 69,
        "end": 77
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 81,
          "end": 88
        },
        "start": 79,
        "end": 88
      },
      "body": null,
      "expression": false,
      "start": 52,
      "end": 89
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 100
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "randBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 113,
                "end": 121
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 113,
              "end": 123
            },
            "consequent": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 126,
              "end": 131
            },
            "alternate": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 134,
              "end": 139
            },
            "start": 113,
            "end": 139
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 149,
              "end": 155
            }
          ],
          "start": 108,
          "end": 155
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "ConditionalExpression",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "randBool",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 174
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 166,
              "end": 176
            },
            "consequent": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 180,
              "end": 185
            },
            "alternate": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 189,
                "end": 194
              },
              "consequent": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 197,
                "end": 202
              },
              "alternate": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 205,
                "end": 210
              },
              "start": 189,
              "end": 210
            },
            "start": 166,
            "end": 210
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 221,
              "end": 227
            }
          ],
          "start": 160,
          "end": 227
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 239,
            "end": 244
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 256,
              "end": 262
            }
          ],
          "start": 232,
          "end": 262
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 273,
                "end": 274
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 277
              },
              {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 280,
                "end": 285
              }
            ],
            "start": 273,
            "end": 286
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 298
              },
              "directive": null,
              "start": 297,
              "end": 299
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 309
              },
              "directive": null,
              "start": 308,
              "end": 310
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 319,
              "end": 325
            }
          ],
          "start": 267,
          "end": 325
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 337,
              "end": 342
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 347,
              "end": 352
            },
            "start": 337,
            "end": 353
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 365,
              "end": 371
            }
          ],
          "start": 330,
          "end": 371
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 383,
              "end": 388
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 393,
              "end": 398
            },
            "start": 383,
            "end": 399
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 411,
              "end": 417
            }
          ],
          "start": 376,
          "end": 417
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 428
            },
            "operator": "||",
            "right": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 432,
              "end": 437
            },
            "start": 427,
            "end": 437
          },
          "consequent": [],
          "start": 422,
          "end": 438
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 448,
              "end": 453
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 458
            },
            "start": 448,
            "end": 458
          },
          "consequent": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 468,
                "end": 469
              },
              "directive": null,
              "start": 468,
              "end": 470
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 479,
              "end": 485
            }
          ],
          "start": 443,
          "end": 485
        }
      ],
      "start": 91,
      "end": 487
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 487
}
```
