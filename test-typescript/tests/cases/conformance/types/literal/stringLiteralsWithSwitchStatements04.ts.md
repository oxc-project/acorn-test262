__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 369,
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
                  "value": "foo",
                  "regex": null,
                  "bigint": null
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
                      "value": "foo",
                      "regex": null,
                      "bigint": null
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
                      "value": "bar",
                      "regex": null,
                      "bigint": null
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
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 75,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 63,
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 65,
        "end": 74,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 67,
          "end": 74
        }
      },
      "typeParameters": null
    },
    {
      "type": "SwitchStatement",
      "start": 77,
      "end": 369,
      "cases": [
        {
          "type": "SwitchCase",
          "start": 94,
          "end": 123,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 117,
              "end": 123,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 99,
            "end": 107,
            "expressions": [
              {
                "type": "Literal",
                "start": 99,
                "end": 104,
                "raw": "\"foo\"",
                "value": "foo",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Identifier",
                "start": 106,
                "end": 107,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 128,
          "end": 157,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 151,
              "end": 157,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 133,
            "end": 141,
            "expressions": [
              {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 136,
                "end": 141,
                "raw": "\"foo\"",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 162,
          "end": 191,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 185,
              "end": 191,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 167,
            "end": 175,
            "expressions": [
              {
                "type": "Identifier",
                "start": 167,
                "end": 168,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 170,
                "end": 175,
                "raw": "\"baz\"",
                "value": "baz",
                "regex": null,
                "bigint": null
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 196,
          "end": 225,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 219,
              "end": 225,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 201,
            "end": 209,
            "expressions": [
              {
                "type": "Literal",
                "start": 201,
                "end": 206,
                "raw": "\"baz\"",
                "value": "baz",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Identifier",
                "start": 208,
                "end": 209,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 230,
          "end": 265,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 259,
              "end": 265,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 235,
            "end": 249,
            "operator": "&&",
            "left": {
              "type": "Literal",
              "start": 235,
              "end": 240,
              "raw": "\"baz\"",
              "value": "baz",
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "Literal",
              "start": 244,
              "end": 249,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 270,
          "end": 316,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 310,
              "end": 316,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 275,
            "end": 300,
            "operator": "&&",
            "left": {
              "type": "Literal",
              "start": 275,
              "end": 280,
              "raw": "\"baz\"",
              "value": "baz",
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "LogicalExpression",
              "start": 285,
              "end": 299,
              "operator": "||",
              "left": {
                "type": "Literal",
                "start": 285,
                "end": 290,
                "raw": "\"foo\"",
                "value": "foo",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 294,
                "end": 299,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 321,
          "end": 367,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 361,
              "end": 367,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 326,
            "end": 351,
            "operator": "&&",
            "left": {
              "type": "Literal",
              "start": 326,
              "end": 331,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            },
            "right": {
              "type": "LogicalExpression",
              "start": 336,
              "end": 350,
              "operator": "||",
              "left": {
                "type": "Literal",
                "start": 336,
                "end": 341,
                "raw": "\"baz\"",
                "value": "baz",
                "regex": null,
                "bigint": null
              },
              "right": {
                "type": "Literal",
                "start": 345,
                "end": 350,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
