__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 193,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 1,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 28,
            "name": "fooOrBar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 28,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 15,
                "end": 28,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 15,
                    "end": 20,
                    "literal": {
                      "type": "Literal",
                      "start": 15,
                      "end": 20,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 23,
                    "end": 28,
                    "literal": {
                      "type": "Literal",
                      "start": 23,
                      "end": 28,
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
      "start": 31,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 39,
            "end": 53,
            "expression": {
              "type": "Literal",
              "start": 39,
              "end": 44,
              "value": "foo",
              "raw": "\"foo\""
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 48,
              "end": 53,
              "literal": {
                "type": "Literal",
                "start": 48,
                "end": 53,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 63,
            "end": 77,
            "expression": {
              "type": "Literal",
              "start": 63,
              "end": 68,
              "value": "bar",
              "raw": "\"bar\""
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 72,
              "end": 77,
              "literal": {
                "type": "Literal",
                "start": 72,
                "end": 77,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 104,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 87,
            "end": 104,
            "expression": {
              "type": "Identifier",
              "start": 87,
              "end": 95,
              "name": "fooOrBar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 99,
              "end": 104,
              "literal": {
                "type": "Literal",
                "start": 99,
                "end": 104,
                "value": "foo",
                "raw": "\"foo\""
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 106,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 114,
            "end": 131,
            "expression": {
              "type": "Identifier",
              "start": 114,
              "end": 122,
              "name": "fooOrBar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 126,
              "end": 131,
              "literal": {
                "type": "Literal",
                "start": 126,
                "end": 131,
                "value": "bar",
                "raw": "\"bar\""
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 141,
            "end": 158,
            "expression": {
              "type": "Identifier",
              "start": 141,
              "end": 149,
              "name": "fooOrBar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 153,
              "end": 158,
              "literal": {
                "type": "Literal",
                "start": 153,
                "end": 158,
                "value": "baz",
                "raw": "\"baz\""
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSAsExpression",
            "start": 168,
            "end": 192,
            "expression": {
              "type": "Literal",
              "start": 168,
              "end": 173,
              "value": "baz",
              "raw": "\"baz\""
            },
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 177,
              "end": 192,
              "exprName": {
                "type": "Identifier",
                "start": 184,
                "end": 192,
                "name": "fooOrBar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
