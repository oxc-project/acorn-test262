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
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 63
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
          "start": 67,
          "end": 74
        },
        "start": 65,
        "end": 74
      },
      "body": null,
      "expression": false,
      "start": 38,
      "end": 75
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Identifier",
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null,
        "start": 85,
        "end": 86
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 99,
                "end": 104
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              }
            ],
            "start": 99,
            "end": 107
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 117,
              "end": 123
            }
          ],
          "start": 94,
          "end": 123
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
                "start": 133,
                "end": 134
              },
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 136,
                "end": 141
              }
            ],
            "start": 133,
            "end": 141
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 151,
              "end": 157
            }
          ],
          "start": 128,
          "end": 157
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
                "start": 167,
                "end": 168
              },
              {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 170,
                "end": 175
              }
            ],
            "start": 167,
            "end": 175
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 185,
              "end": 191
            }
          ],
          "start": 162,
          "end": 191
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 201,
                "end": 206
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 209
              }
            ],
            "start": 201,
            "end": 209
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 219,
              "end": 225
            }
          ],
          "start": 196,
          "end": 225
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 235,
              "end": 240
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 244,
              "end": 249
            },
            "start": 235,
            "end": 249
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 259,
              "end": 265
            }
          ],
          "start": 230,
          "end": 265
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "baz",
              "raw": "\"baz\"",
              "start": 275,
              "end": 280
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 285,
                "end": 290
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 294,
                "end": 299
              },
              "start": 285,
              "end": 299
            },
            "start": 275,
            "end": 300
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 310,
              "end": 316
            }
          ],
          "start": 270,
          "end": 316
        },
        {
          "type": "SwitchCase",
          "test": {
            "type": "LogicalExpression",
            "left": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 326,
              "end": 331
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "left": {
                "type": "Literal",
                "value": "baz",
                "raw": "\"baz\"",
                "start": 336,
                "end": 341
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "\"bar\"",
                "start": 345,
                "end": 350
              },
              "start": 336,
              "end": 350
            },
            "start": 326,
            "end": 351
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "label": null,
              "start": 361,
              "end": 367
            }
          ],
          "start": 321,
          "end": 367
        }
      ],
      "start": 77,
      "end": 369
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 369
}
```
