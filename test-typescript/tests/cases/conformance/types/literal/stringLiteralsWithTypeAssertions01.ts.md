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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5,
            "end": 28,
            "decorators": [],
            "name": "fooOrBar",
            "optional": false,
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
                      "raw": "\"foo\"",
                      "value": "foo"
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
      "start": 31,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "decorators": [],
            "name": "a",
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
              "raw": "\"foo\"",
              "value": "foo"
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 48,
              "end": 53,
              "literal": {
                "type": "Literal",
                "start": 48,
                "end": 53,
                "raw": "\"bar\"",
                "value": "bar"
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
      "start": 55,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "b",
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
              "raw": "\"bar\"",
              "value": "bar"
            },
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 72,
              "end": 77,
              "literal": {
                "type": "Literal",
                "start": 72,
                "end": 77,
                "raw": "\"foo\"",
                "value": "foo"
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
      "start": 79,
      "end": 105,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 104,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "c",
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
              "decorators": [],
              "name": "fooOrBar",
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
                "raw": "\"foo\"",
                "value": "foo"
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
      "start": 106,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 110,
          "end": 131,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "d",
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
              "decorators": [],
              "name": "fooOrBar",
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
                "raw": "\"bar\"",
                "value": "bar"
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
      "start": 133,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 158,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 138,
            "decorators": [],
            "name": "e",
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
              "decorators": [],
              "name": "fooOrBar",
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
                "raw": "\"baz\"",
                "value": "baz"
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
      "start": 160,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 164,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "decorators": [],
            "name": "f",
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
              "raw": "\"baz\"",
              "value": "baz"
            },
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 177,
              "end": 192,
              "exprName": {
                "type": "Identifier",
                "start": 184,
                "end": 192,
                "decorators": [],
                "name": "fooOrBar",
                "optional": false
              }
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
