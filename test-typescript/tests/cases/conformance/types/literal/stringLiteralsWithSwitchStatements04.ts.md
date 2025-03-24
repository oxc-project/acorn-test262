__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 370,
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
      "type": "TSDeclareFunction",
      "start": 39,
      "end": 76,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 64,
        "decorators": [],
        "name": "randBool",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 66,
        "end": 75,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 68,
          "end": 75
        }
      },
      "typeParameters": null
    },
    {
      "type": "SwitchStatement",
      "start": 78,
      "end": 370,
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
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Identifier",
                "start": 107,
                "end": 108,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 137,
                "end": 142,
                "raw": "\"foo\"",
                "value": "foo"
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 171,
                "end": 176,
                "raw": "\"baz\"",
                "value": "baz"
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
                "raw": "\"baz\"",
                "value": "baz"
              },
              {
                "type": "Identifier",
                "start": 209,
                "end": 210,
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
            "operator": "&&",
            "left": {
              "type": "Literal",
              "start": 236,
              "end": 241,
              "raw": "\"baz\"",
              "value": "baz"
            },
            "right": {
              "type": "Literal",
              "start": 245,
              "end": 250,
              "raw": "\"bar\"",
              "value": "bar"
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
            "operator": "&&",
            "left": {
              "type": "Literal",
              "start": 276,
              "end": 281,
              "raw": "\"baz\"",
              "value": "baz"
            },
            "right": {
              "type": "LogicalExpression",
              "start": 286,
              "end": 300,
              "operator": "||",
              "left": {
                "type": "Literal",
                "start": 286,
                "end": 291,
                "raw": "\"foo\"",
                "value": "foo"
              },
              "right": {
                "type": "Literal",
                "start": 295,
                "end": 300,
                "raw": "\"bar\"",
                "value": "bar"
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
            "operator": "&&",
            "left": {
              "type": "Literal",
              "start": 327,
              "end": 332,
              "raw": "\"bar\"",
              "value": "bar"
            },
            "right": {
              "type": "LogicalExpression",
              "start": 337,
              "end": 351,
              "operator": "||",
              "left": {
                "type": "Literal",
                "start": 337,
                "end": 342,
                "raw": "\"baz\"",
                "value": "baz"
              },
              "right": {
                "type": "Literal",
                "start": 346,
                "end": 351,
                "raw": "\"bar\"",
                "value": "bar"
              }
            }
          }
        }
      ],
      "discriminant": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
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
