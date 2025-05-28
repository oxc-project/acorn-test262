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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 12,
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
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 14,
      "end": 35,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 34,
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
                      "value": "foo",
                      "raw": "\"foo\""
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
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 38,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 63,
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
      "body": null,
      "expression": false
    },
    {
      "type": "SwitchStatement",
      "start": 77,
      "end": 369,
      "discriminant": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "decorators": [],
        "name": "y",
        "optional": false,
        "typeAnnotation": null
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 94,
          "end": 123,
          "test": {
            "type": "SequenceExpression",
            "start": 99,
            "end": 107,
            "expressions": [
              {
                "type": "Literal",
                "start": 99,
                "end": 104,
                "value": "foo",
                "raw": "\"foo\""
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
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 117,
              "end": 123,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 128,
          "end": 157,
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
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 151,
              "end": 157,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 162,
          "end": 191,
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
                "value": "baz",
                "raw": "\"baz\""
              }
            ]
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 185,
              "end": 191,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 196,
          "end": 225,
          "test": {
            "type": "SequenceExpression",
            "start": 201,
            "end": 209,
            "expressions": [
              {
                "type": "Literal",
                "start": 201,
                "end": 206,
                "value": "baz",
                "raw": "\"baz\""
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
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 219,
              "end": 225,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 230,
          "end": 265,
          "test": {
            "type": "LogicalExpression",
            "start": 235,
            "end": 249,
            "left": {
              "type": "Literal",
              "start": 235,
              "end": 240,
              "value": "baz",
              "raw": "\"baz\""
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "start": 244,
              "end": 249,
              "value": "bar",
              "raw": "\"bar\""
            }
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 259,
              "end": 265,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 270,
          "end": 316,
          "test": {
            "type": "LogicalExpression",
            "start": 275,
            "end": 300,
            "left": {
              "type": "Literal",
              "start": 275,
              "end": 280,
              "value": "baz",
              "raw": "\"baz\""
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "start": 285,
              "end": 299,
              "left": {
                "type": "Literal",
                "start": 285,
                "end": 290,
                "value": "foo",
                "raw": "\"foo\""
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "start": 294,
                "end": 299,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 310,
              "end": 316,
              "label": null
            }
          ]
        },
        {
          "type": "SwitchCase",
          "start": 321,
          "end": 367,
          "test": {
            "type": "LogicalExpression",
            "start": 326,
            "end": 351,
            "left": {
              "type": "Literal",
              "start": 326,
              "end": 331,
              "value": "bar",
              "raw": "\"bar\""
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "start": 336,
              "end": 350,
              "left": {
                "type": "Literal",
                "start": 336,
                "end": 341,
                "value": "baz",
                "raw": "\"baz\""
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "start": 345,
                "end": 350,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          },
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 361,
              "end": 367,
              "label": null
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
