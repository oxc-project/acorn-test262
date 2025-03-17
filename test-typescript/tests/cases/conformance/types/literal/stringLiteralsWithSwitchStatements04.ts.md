__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 371,
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
      "type": "TSDeclareFunction",
      "start": 39,
      "end": 76,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 64,
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
        "start": 66,
        "end": 75,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 68,
          "end": 75
        }
      }
    },
    {
      "type": "SwitchStatement",
      "start": 78,
      "end": 370,
      "discriminant": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "cases": [
        {
          "type": "SwitchCase",
          "start": 95,
          "end": 124,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 118,
              "end": 124,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 100,
            "end": 108,
            "expressions": [
              {
                "type": "Literal",
                "start": 100,
                "end": 105,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "Identifier",
                "start": 107,
                "end": 108,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 129,
          "end": 158,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 152,
              "end": 158,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 134,
            "end": 142,
            "expressions": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 137,
                "end": 142,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 163,
          "end": 192,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 186,
              "end": 192,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 168,
            "end": 176,
            "expressions": [
              {
                "type": "Identifier",
                "start": 168,
                "end": 169,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 171,
                "end": 176,
                "value": "baz",
                "raw": "\"baz\""
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 197,
          "end": 226,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 220,
              "end": 226,
              "label": null
            }
          ],
          "test": {
            "type": "SequenceExpression",
            "start": 202,
            "end": 210,
            "expressions": [
              {
                "type": "Literal",
                "start": 202,
                "end": 207,
                "value": "baz",
                "raw": "\"baz\""
              },
              {
                "type": "Identifier",
                "start": 209,
                "end": 210,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          }
        },
        {
          "type": "SwitchCase",
          "start": 231,
          "end": 266,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 260,
              "end": 266,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 236,
            "end": 250,
            "left": {
              "type": "Literal",
              "start": 236,
              "end": 241,
              "value": "baz",
              "raw": "\"baz\""
            },
            "operator": "&&",
            "right": {
              "type": "Literal",
              "start": 245,
              "end": 250,
              "value": "bar",
              "raw": "\"bar\""
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 271,
          "end": 317,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 311,
              "end": 317,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 276,
            "end": 301,
            "left": {
              "type": "Literal",
              "start": 276,
              "end": 281,
              "value": "baz",
              "raw": "\"baz\""
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "start": 286,
              "end": 300,
              "left": {
                "type": "Literal",
                "start": 286,
                "end": 291,
                "value": "foo",
                "raw": "\"foo\""
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "start": 295,
                "end": 300,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          }
        },
        {
          "type": "SwitchCase",
          "start": 322,
          "end": 368,
          "consequent": [
            {
              "type": "BreakStatement",
              "start": 362,
              "end": 368,
              "label": null
            }
          ],
          "test": {
            "type": "LogicalExpression",
            "start": 327,
            "end": 352,
            "left": {
              "type": "Literal",
              "start": 327,
              "end": 332,
              "value": "bar",
              "raw": "\"bar\""
            },
            "operator": "&&",
            "right": {
              "type": "LogicalExpression",
              "start": 337,
              "end": 351,
              "left": {
                "type": "Literal",
                "start": 337,
                "end": 342,
                "value": "baz",
                "raw": "\"baz\""
              },
              "operator": "||",
              "right": {
                "type": "Literal",
                "start": 346,
                "end": 351,
                "value": "bar",
                "raw": "\"bar\""
              }
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
