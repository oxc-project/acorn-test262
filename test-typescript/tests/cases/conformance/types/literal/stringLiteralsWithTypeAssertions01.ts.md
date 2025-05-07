__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 28,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 27,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 27,
            "decorators": [],
            "name": "fooOrBar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 27,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 14,
                "end": 27,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 14,
                    "end": 19,
                    "literal": {
                      "type": "Literal",
                      "start": 14,
                      "end": 19,
                      "raw": "\"foo\"",
                      "value": "foo",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 22,
                    "end": 27,
                    "literal": {
                      "type": "Literal",
                      "start": 22,
                      "end": 27,
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
      "type": "VariableDeclaration",
      "start": 30,
      "end": 53,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 38,
            "end": 52,
            "expression": {
              "type": "Literal",
              "start": 38,
              "end": 43,
              "raw": "\"foo\"",
              "value": "foo",
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 47,
              "end": 52,
              "literal": {
                "type": "Literal",
                "start": 47,
                "end": 52,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 59,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 62,
            "end": 76,
            "expression": {
              "type": "Literal",
              "start": 62,
              "end": 67,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 71,
              "end": 76,
              "literal": {
                "type": "Literal",
                "start": 71,
                "end": 76,
                "raw": "\"foo\"",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 78,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 82,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 86,
            "end": 103,
            "expression": {
              "type": "Identifier",
              "start": 86,
              "end": 94,
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 98,
              "end": 103,
              "literal": {
                "type": "Literal",
                "start": 98,
                "end": 103,
                "raw": "\"foo\"",
                "value": "foo",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 105,
      "end": 131,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 109,
          "end": 130,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 109,
            "end": 110,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 113,
            "end": 130,
            "expression": {
              "type": "Identifier",
              "start": 113,
              "end": 121,
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 125,
              "end": 130,
              "literal": {
                "type": "Literal",
                "start": 125,
                "end": 130,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 132,
      "end": 158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 136,
          "end": 157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 140,
            "end": 157,
            "expression": {
              "type": "Identifier",
              "start": 140,
              "end": 148,
              "decorators": [],
              "name": "fooOrBar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 152,
              "end": 157,
              "literal": {
                "type": "Literal",
                "start": 152,
                "end": 157,
                "raw": "\"baz\"",
                "value": "baz",
                "regex": null,
                "bigint": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 164,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 167,
            "end": 191,
            "expression": {
              "type": "Literal",
              "start": 167,
              "end": 172,
              "raw": "\"baz\"",
              "value": "baz",
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 176,
              "end": 191,
              "exprName": {
                "type": "Identifier",
                "start": 183,
                "end": 191,
                "decorators": [],
                "name": "fooOrBar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
